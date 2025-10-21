# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a form dynamically using JavaScript and manipulate its behavior

- Add input fields dynamically based on user selection e.g., text, email, number
- Add a submit button that logs all the input values as an object.
- Add a reset button that clears the form.
- Use createElement, appendChild, setAttribute, and addEventListener.
// Create the form container
const formContainer = document.createElement('div');
document.body.appendChild(formContainer);

// Create the form element
const form = document.createElement('form');
formContainer.appendChild(form);

// Create a dropdown to select input type
const inputTypeSelector = document.createElement('select');
['text', 'email', 'number'].forEach(type => {
  const option = document.createElement('option');
  option.value = type;
  option.textContent = type;
  inputTypeSelector.appendChild(option);
});
formContainer.appendChild(inputTypeSelector);

// Create a button to add input fields
const addInputBtn = document.createElement('button');
addInputBtn.textContent = 'Add Input';
addInputBtn.setAttribute('type', 'button');
formContainer.appendChild(addInputBtn);

// Create Submit button
const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.setAttribute('type', 'submit');
form.appendChild(submitBtn);

// Create Reset button
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.setAttribute('type', 'button');
form.appendChild(resetBtn);

// Add input field dynamically
addInputBtn.addEventListener('click', () => {
  const selectedType = inputTypeSelector.value;
  const input = document.createElement('input');
  input.setAttribute('type', selectedType);
  input.setAttribute('name', `input_${Date.now()}`);
  input.setAttribute('placeholder', `Enter ${selectedType}`);
  form.insertBefore(input, submitBtn); // Insert before submit button
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {};
  Array.from(form.elements).forEach(el => {
    if (el.tagName === 'INPUT') {
      formData[el.name] = el.value;
    }
  });
  console.log('Form Submitted:', formData);
});

// Handle form reset
resetBtn.addEventListener('click', () => {
  Array.from(form.elements).forEach(el => {
    if (el.tagName === 'INPUT') {
      el.value = '';
    }
  });
  console.log('Form Reset');
});

## 2. Add, delete, and search rows in a dynamic table

- A form to add rows (Name, Age, Role).
- Each row should have a “Delete” button to remove it.
- Add a search input that filters the rows by name.
- Use insertRow, deleteRow, and textContent/innerText.
// Create form elements
const form = document.createElement('form');
const nameInput = document.createElement('input');
nameInput.setAttribute('placeholder', 'Name');
const ageInput = document.createElement('input');
ageInput.setAttribute('placeholder', 'Age');
ageInput.setAttribute('type', 'number');
const roleInput = document.createElement('input');
roleInput.setAttribute('placeholder', 'Role');
const addBtn = document.createElement('button');
addBtn.textContent = 'Add Row';
addBtn.setAttribute('type', 'submit');

// Create search input
const searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', 'Search by name');
searchInput.style.marginTop = '10px';

// Create table
const table = document.createElement('table');
const header = table.insertRow();
['Name', 'Age', 'Role', 'Actions'].forEach(text => {
  const th = document.createElement('th');
  th.textContent = text;
  header.appendChild(th);
});

// Append elements to body
form.appendChild(nameInput);
form.appendChild(ageInput);
form.appendChild(roleInput);
form.appendChild(addBtn);
document.body.appendChild(form);
document.body.appendChild(searchInput);
document.body.appendChild(table);

// Add row on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const role = roleInput.value.trim();
  if (!name || !age || !role) return;

  const row = table.insertRow();
  row.insertCell().textContent = name;
  row.insertCell().textContent = age;
  row.insertCell().textContent = role;

  const deleteCell = row.insertCell();
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    table.deleteRow(row.rowIndex);
  });
  deleteCell.appendChild(deleteBtn);

  form.reset();
});

// Filter rows by name
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  for (let i = 1; i < table.rows.length; i++) {
    const nameCell = table.rows[i].cells[0];
    const nameText = nameCell.textContent.toLowerCase();
    table.rows[i].style.display = nameText.includes(query) ? '' : 'none';
  }
});

## 3. Theme Switcher with Persistence

- Toggle theme using a button or switch.
- Persist the theme in localStorage and apply on page load.
- Change background and text color based on the theme.
// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';// savedTheme theme標籤的元素=light
document.body.style.backgroundColor = savedTheme === 'dark' ? '#121212' : '#ffffff';
document.body.style.color = savedTheme === 'dark' ? '#ffffff' : '#000000';

// Create toggle button
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Theme';
toggleBtn.style.padding = '10px 20px';
toggleBtn.style.margin = '20px';
toggleBtn.style.cursor = 'pointer';
document.body.appendChild(toggleBtn);

// Toggle logic
toggleBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Apply new theme
  document.body.style.backgroundColor = newTheme === 'dark' ? '#121212' : '#ffffff';
  document.body.style.color = newTheme === 'dark' ? '#ffffff' : '#000000';

  // Persist theme
  localStorage.setItem('theme', newTheme);//把變數 newTheme 的值儲存到 localStorage 中，key 是 'theme'。如果之前有儲存過 'theme'，這次會覆蓋掉舊值。
  console.log(`Theme switched to: ${newTheme}`);
});
