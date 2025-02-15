// Set the PDF.js worker (required for page extraction).
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.13.216/pdf.worker.min.js';

// Array to hold PDF items (each with metadata + settings).
const pdfItems = [];

// DOM elements
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const pdfList = document.getElementById('pdf-list');
const totalCostEl = document.getElementById('total-cost');

// --- 1. Drag-and-Drop Events ---
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});

// --- 2. File Input Change ---
fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
  fileInput.value = ''; // reset file input
});

// --- 3. Handle PDF Files ---
async function handleFiles(files) {
  const validFiles = [...files].filter((file) => file.type === 'application/pdf');
  for (const file of validFiles) {
    try {
      const pdfData = await getPdfInfo(file);
      pdfItems.push(pdfData);
      renderPDFList();
      updateTotalCost();
    } catch (err) {
      console.error('Error reading PDF:', err);
      alert('Could not read PDF file.');
    }
  }
}

// Extract page count and generate thumbnail using PDF.js
async function getPdfInfo(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pageCount = pdf.numPages;

  // Create a thumbnail from the first page
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1 });
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({ canvasContext: ctx, viewport }).promise;
  const thumbnail = canvas.toDataURL('image/png');

  return {
    id: Date.now() + Math.random(), // simple unique ID
    file,
    name: file.name,
    size: file.size,
    lastModified: file.lastModified,
    pageCount,
    thumbnail,
    // Default print settings
    colorMode: 'bw',       // 'bw' or 'color'
    printType: 'single',   // 'single' or 'double'
    copies: 1
  };
}

// --- 4. Render PDF List ---
function renderPDFList() {
  pdfList.innerHTML = '';
  pdfItems.forEach((item) => {
    const card = createPDFCard(item);
    pdfList.appendChild(card);
  });
}

// Create a DOM card for a PDF item
function createPDFCard(pdfItem) {
  const card = document.createElement('div');
  card.className = 'pdf-card';

  // Header: thumbnail + basic info
  const header = document.createElement('div');
  header.className = 'pdf-header';

  const thumbImg = document.createElement('img');
  thumbImg.src = pdfItem.thumbnail;
  thumbImg.alt = 'Thumbnail';

  const infoDiv = document.createElement('div');
  infoDiv.className = 'pdf-info';
  infoDiv.innerHTML = `
    <div><strong>${pdfItem.name}</strong></div>
    <div>Pages: ${pdfItem.pageCount}</div>
    <div>Size: ${(pdfItem.size / 1024).toFixed(2)} KB</div>
    <div>Last Modified: ${new Date(pdfItem.lastModified).toLocaleDateString()}</div>
  `;

  header.appendChild(thumbImg);
  header.appendChild(infoDiv);

  // Print settings
  const settingsDiv = document.createElement('div');
  settingsDiv.className = 'print-settings';

  // Color Mode
  const colorLabel = document.createElement('label');
  colorLabel.textContent = 'Color: ';

  const colorSelect = document.createElement('select');
  const bwOption = document.createElement('option');
  bwOption.value = 'bw';
  bwOption.textContent = 'Black & White';
  const colorOption = document.createElement('option');
  colorOption.value = 'color';
  colorOption.textContent = 'Full Color';

  colorSelect.appendChild(bwOption);
  colorSelect.appendChild(colorOption);
  colorSelect.value = pdfItem.colorMode;
  colorSelect.addEventListener('change', () => {
    pdfItem.colorMode = colorSelect.value;
    updateItemPrice(pdfItem, card);
    updateTotalCost();
  });

  // Print Type
  const printTypeLabel = document.createElement('label');
  printTypeLabel.textContent = 'Sides: ';

  const printTypeSelect = document.createElement('select');
  const singleOption = document.createElement('option');
  singleOption.value = 'single';
  singleOption.textContent = 'Single-Sided';
  const doubleOption = document.createElement('option');
  doubleOption.value = 'double';
  doubleOption.textContent = 'Double-Sided';

  printTypeSelect.appendChild(singleOption);
  printTypeSelect.appendChild(doubleOption);
  printTypeSelect.value = pdfItem.printType;
  printTypeSelect.addEventListener('change', () => {
    pdfItem.printType = printTypeSelect.value;
    updateItemPrice(pdfItem, card);
    updateTotalCost();
  });

  // Copies
  const copiesLabel = document.createElement('label');
  copiesLabel.textContent = 'Copies: ';

  const copiesInput = document.createElement('input');
  copiesInput.type = 'number';
  copiesInput.min = '1';
  copiesInput.value = pdfItem.copies;
  copiesInput.addEventListener('change', () => {
    let val = parseInt(copiesInput.value, 10);
    if (isNaN(val) || val < 1) val = 1;
    pdfItem.copies = val;
    copiesInput.value = val;
    updateItemPrice(pdfItem, card);
    updateTotalCost();
  });

  // Price display
  const priceDisplay = document.createElement('div');
  priceDisplay.className = 'price-display';

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    removePdfItem(pdfItem.id);
  });

  // Assemble the settings
  const colorWrapper = document.createElement('div');
  colorWrapper.appendChild(colorLabel);
  colorWrapper.appendChild(colorSelect);

  const typeWrapper = document.createElement('div');
  typeWrapper.appendChild(printTypeLabel);
  typeWrapper.appendChild(printTypeSelect);

  const copiesWrapper = document.createElement('div');
  copiesWrapper.appendChild(copiesLabel);
  copiesWrapper.appendChild(copiesInput);

  settingsDiv.appendChild(colorWrapper);
  settingsDiv.appendChild(typeWrapper);
  settingsDiv.appendChild(copiesWrapper);
  settingsDiv.appendChild(priceDisplay);

  card.appendChild(header);
  card.appendChild(settingsDiv);
  card.appendChild(removeBtn);

  // Initial price update
  updateItemPrice(pdfItem, card);

  return card;
}

// --- 5. Price Calculation ---
function calculatePdfPrice(pdfItem) {
  // Example pricing logic
  const baseBwPerPage = 2;      // base cost for black & white
  const colorSurcharge = 8;     // additional cost if color
  let costPerPage = baseBwPerPage;

  if (pdfItem.colorMode === 'color') {
    costPerPage += colorSurcharge; // color = base + surcharge
  }

  // If double-sided, apply a discount or different rate
  if (pdfItem.printType === 'double') {
    // e.g. 0% discount for double-sided
    costPerPage = costPerPage * 1;
  }

  const total = pdfItem.pageCount * costPerPage * pdfItem.copies;
  return Math.round(total * 100) / 100; // round to 2 decimals
}

// Update the price display for a single PDF item
function updateItemPrice(pdfItem, cardElement) {
  const price = calculatePdfPrice(pdfItem);
  const priceDisplay = cardElement.querySelector('.price-display');
  priceDisplay.textContent = `Price: ₹${price}`;
}

// --- 6. Remove PDF Item ---
function removePdfItem(id) {
  const index = pdfItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    pdfItems.splice(index, 1);
    renderPDFList();
    updateTotalCost();
  }
}

// --- 7. Update Total Cost ---
function updateTotalCost() {
  let total = 0;
  pdfItems.forEach((item) => {
    total += calculatePdfPrice(item);
  });
  totalCostEl.textContent = total.toFixed(2);
}

// --- 8. Checkout Button ---
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (pdfItems.length === 0) {
    alert('No PDFs in the cart!');
  } else {
    // In a real app, you'd proceed to a checkout flow (payment, etc.)
    alert(`Checkout clicked! Total: ₹${totalCostEl.textContent}`);
  }
});