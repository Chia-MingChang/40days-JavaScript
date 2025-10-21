// 確保在腳本開始執行時，DOM 已經載入，以便操作 document.body
document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // ## 3. Theme Switcher with Persistence (載入時應用主題)
    // ----------------------------------------------------------------------
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.style.backgroundColor = savedTheme === 'dark' ? '#121212' : '#ffffff';
    document.body.style.color = savedTheme === 'dark' ? '#ffffff' : '#000000';
    document.body.style.fontFamily = 'Arial, sans-serif'; // 增加可讀性
    
    // 創建主題切換按鈕
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Theme';
    toggleBtn.style.marginBottom = '30px';
    document.body.appendChild(toggleBtn);

    // 主題切換邏輯
    toggleBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // 應用新主題
        document.body.style.backgroundColor = newTheme === 'dark' ? '#121212' : '#ffffff';
        document.body.style.color = newTheme === 'dark' ? '#ffffff' : '#000000';

        // 持久化主題
        localStorage.setItem('theme', newTheme);
        console.log(`Theme switched to: ${newTheme}`);
    });

    // ----------------------------------------------------------------------
    // ## 1. Create a form dynamically
    // ----------------------------------------------------------------------

    // 增加標題和分隔線
    const heading1 = document.createElement('h2');
    heading1.textContent = '1. 動態表單操作 (Dynamic Form Manipulation)';
    document.body.appendChild(heading1);
    
    // 創建表單元素
    const form = document.createElement('form');
    form.style.border = '1px solid #ccc';
    form.style.padding = '20px';
    form.style.marginBottom = '20px';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    document.body.appendChild(form);

    // 創建下拉選單和按鈕容器
    const typeControlContainer = document.createElement('div');
    typeControlContainer.className = 'type-controls';
    
    // 創建下拉選單以選擇輸入類型
    const inputTypeSelector = document.createElement('select');
    ['text', 'email', 'number'].forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        inputTypeSelector.appendChild(option);
    });
    
    // 創建添加輸入欄位的按鈕
    const addInputBtn = document.createElement('button');
    addInputBtn.textContent = 'Add Input Field';
    addInputBtn.setAttribute('type', 'button');
    addInputBtn.style.marginLeft = '10px';
    
    typeControlContainer.appendChild(inputTypeSelector);
    typeControlContainer.appendChild(addInputBtn);
    form.appendChild(typeControlContainer);

    // 創建提交按鈕
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit (Log to Console)';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.style.marginTop = '10px';
    submitBtn.style.maxWidth = '250px';
    form.appendChild(submitBtn);

    // 創建重設按鈕
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset (Clear Inputs)';
    resetBtn.setAttribute('type', 'button');
    resetBtn.style.marginTop = '10px';
    resetBtn.style.maxWidth = '250px';
    form.appendChild(resetBtn);

    // 動態添加輸入欄位
    addInputBtn.addEventListener('click', () => {
        const selectedType = inputTypeSelector.value;
        const input = document.createElement('input');
        input.setAttribute('type', selectedType);
        // 使用 name 屬性以便提交時識別
        input.setAttribute('name', `input_${selectedType}_${Date.now()}`); 
        input.setAttribute('placeholder', `Enter ${selectedType} Value`);
        input.style.marginBottom = '10px';
        
        // 插入到 "Submit" 按鈕之前
        form.insertBefore(input, submitBtn); 
    });

    // 處理表單提交
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {};
        // 遍歷表單中的所有元素
        Array.from(form.elements).forEach(el => {
            // 只記錄輸入欄位，並排除按鈕本身
            if (el.tagName === 'INPUT' && el.type !== 'submit' && el.type !== 'button') {
                formData[el.name] = el.value;
            }
        });
        console.log('--- Task 1: Form Submitted ---');
        console.log(formData);
        console.log('------------------------------');
    });

    // 處理表單重設 (清空所有輸入欄位)
    resetBtn.addEventListener('click', () => {
        Array.from(form.elements).forEach(el => {
            if (el.tagName === 'INPUT' && el.type !== 'submit' && el.type !== 'button') {
                el.value = '';
            }
        });
        console.log('--- Task 1: Form Reset (Inputs Cleared) ---');
    });

    // ----------------------------------------------------------------------
    // ## 2. Add, delete, and search rows in a dynamic table
    // ----------------------------------------------------------------------

    // 增加標題
    const heading2 = document.createElement('h2');
    heading2.textContent = '2. 動態表格操作 (Dynamic Table Manipulation)';
    document.body.appendChild(heading2);
    
    // 創建表單元素 (已修正變數名稱為 tableForm)
    const tableForm = document.createElement('form'); 
    tableForm.className = 'table-form-inputs';
    document.body.appendChild(tableForm);

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

    // 將輸入欄位和按鈕附加到 tableForm
    tableForm.appendChild(nameInput);
    tableForm.appendChild(ageInput);
    tableForm.appendChild(roleInput);
    tableForm.appendChild(addBtn);

    // 創建搜尋輸入欄位
    const searchInput = document.createElement('input');
    searchInput.setAttribute('placeholder', 'Search by name...');
    searchInput.style.width = '300px';
    document.body.appendChild(searchInput);

    // 創建表格容器
    const tableContainer = document.createElement('div');
    tableContainer.id = 'dynamic-table';
    document.body.appendChild(tableContainer);

    // 創建表格
    const table = document.createElement('table');
    tableContainer.appendChild(table);

    // 創建表頭
    const header = table.insertRow();
    ['Name', 'Age', 'Role', 'Actions'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        header.appendChild(th);
    });

    // 處理新增行
    tableForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const role = roleInput.value.trim();
        if (!name || !age || !role) {
            console.warn('--- Task 2: Cannot add empty row. ---');
            return;
        }

        const row = table.insertRow();
        
        // 插入數據單元格
        [name, age, role].forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });

        // 插入刪除按鈕單元格
        const deleteCell = row.insertCell();
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = '#f44336';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        
        // 刪除邏輯
        deleteBtn.addEventListener('click', () => {
            // 使用 row.rowIndex 取得當前行在表格中的索引
            // 由於我們不在意表格數據的持久性，直接操作 DOM 是最快的方法
            table.deleteRow(row.rowIndex); 
            console.log(`--- Task 2: Deleted row for ${name} ---`);
        });
        deleteCell.appendChild(deleteBtn);

        tableForm.reset();
        console.log(`--- Task 2: Added row for ${name} ---`);
    });

    // 處理搜尋/過濾
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        // i=1 從第二行開始 (跳過表頭)
        for (let i = 1; i < table.rows.length; i++) {
            const row = table.rows[i];
            const nameCell = row.cells[0]; // 名字在第一個單元格
            const nameText = nameCell.textContent.toLowerCase();
            
            // 根據是否包含搜尋文字來顯示或隱藏行
            row.style.display = nameText.includes(query) ? '' : 'none';
        }
    });

}); // DOMContentLoaded 結束
