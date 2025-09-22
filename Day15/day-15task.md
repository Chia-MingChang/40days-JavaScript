# day15 Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## Questions

> Please Note: These tasks are for your practice. If you are stuck, go back to the videos and get the clarifications. If you are still stuck, feel free to start a conversation on [tapaScript Discord](https://discord.gg/HHwdF8r28m).

- [x ] **T-001**: Create an array of 5 elements using the Array Constructor.
Ans. 
const arr = new Array(1,2,3,4,5,);//with numeric values
- [x] **T-002**: Create an array of 3 empty slots.
Ans.
new Array(3);//Important Note just t3 empty slots.
- [x] **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.
Ans.
const teas = ["Black tea", "Green tea", "Milk tea", "Oolong tea","Jasmine tea", "White tea"]
teas[teas.length-3];//6 - 3 = 3 → index 3 is the 4th element: "Oolong tea"
- [x] **T-004**: Use the `for` loop on the above array to print elements in the odd index.
Ans.
const teas = ["Black tea", "Green tea", "Milk tea", "Oolong tea","Jasmine tea", "White tea"]
for (let i = 1;  i< teas.length;  i+=2){
    console.log(teas[i]);
}
- [x] **T-005**: Add one element at the front and the end of an array.
Ans.
let teas = ["Green tea", "Oolong tea", "Jasmine tea"];
//Add to the front: array.unshift();
teas.unshift("Black  tea");
//Add to the end
teas.push("White tea");
console.log(teas);
- [x] **T-006**: Remove an element from the front and the end of an array.
Ans.
let teas = ["Green tea", "Oolong tea", "Jasmine tea"];
// Remove from the front--array.shift()
teas.shift();//Remove "Green tea"

//Remove from the end
teas.pop(); //Remove "Jasmine tea"
- [x] **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const favoriteFoods = [
  "Steak", "Tacos", "Fried chicken","Pasta", "Banana","Apple", "Water melon", "Pizza","Tea","Roast pork"];

//Destructure the 6th element (at index5)
const [,,,,,sixthFood]= favoriteFoods;
console.log(favoriteFoods);
console.log(sixthFood);

- [x] **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
Ans.
const favoriteFoods = [
  "Steak", "Tacos", "Fried chicken","Pasta", "Banana","Apple", "Water melon", "Pizza","'Tea","Roast pork"];
const [,,...lastEightFoods] = favoriteFoods;
console.log(lastEightFoods);

- [x] **T-009**: Clone an Array(Shallow cloning)
const ori = [0,{i:1},2];
const colone = [...ori];
console.log(clone[1]===ori[1]);//Shallow copy->the reference of 2 arrays are the same
- [x] **T-010**: Empty an array using its length property
let array=[1,{1,2},"好"]
console.log(array.length);
array.length = (0);

- [x] **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
let arr=[];
for(let i=1; i<=10;i++){
	arr.push(i);
	if(i===5){
		arr.push(6);
		break;
	}
}
console.log(arr);

- [x] **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
//Create an Array of 10 elements
let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}

// Empty the array using splice
arr.splice(0, arr.length);
console.log(arr); 

- [ ] **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?
Efficiency Analysis
✅ Most Efficient:

arr.length = 0 — Directly truncates the array. No iteration, no reallocation.

arr = [] — Also fast, but breaks references to the original array.

⚠️ Least Efficient:

shift() — Each call reindexes the array, making it O(n²) in total. Avoid for large arrays.

🧩 Reference Safety Tip: If other variables reference the original array, use arr.length = 0 to preserve the reference:x`
+------------------+------------------+------------------+------------------+The Most efficient	
| Method           | Time Complexity  | Keeps Reference? | Recommended Use  |^
+------------------+------------------+------------------+------------------+|
| arr.length = 0   | O(1)             | ✅ Yes           | ✅ Best overall  ||
| arr = []         | O(1)             | ❌ No            | ✅ If ref reset  ||
| splice()         | O(n)             | ✅ Yes           | ⚠️ Moderate      ||
| pop() loop       | O(n)             | ✅ Yes           | ⚠️ Moderate      ||
| shift() loop     | O(n²)            | ✅ Yes           | ❌ Avoid         ||
+------------------+------------------+------------------+------------------+The last efficient

- [x] **T-014**: What happens when you concatenate two empty arrays?
it generates a new empty erray.
const a = [];
const b = [];
const result = a.concat(b);
console.log(result); // []
console.log(result === a); // false

- [x] **T-015**: How can you check if a value is partially matching with any of the elements of an Array?
//use arr.some(i=>i.includes(check_item))
let fruits = ["pineapple", "banana", "apple pie"];
let hasApple = fruits.some(item => item.includes("apple"));
console.log(hasApple); // true
- [x] **T-016**: What is the difference between the slice() and splice() methods?
+----------------------------+-------------------------------+----------------------------+------------------------------+
|         功能項目          |           slice()             |           splice()         |         備註說明             |
+----------------------------+-------------------------------+----------------------------+------------------------------+
| 用途                       | 擷取陣列的一部分              | 增加、刪除或替換陣列元素   | slice 是「複製」，splice 是「修改」 |
| 是否改變原陣列             | ❌ 否                         | ✅ 是                       | slice 不改變原陣列，splice 會改變 |
| 回傳值                     | 新陣列（擷取的部分）          | 被刪除的元素組成的陣列     | splice 可同時插入與刪除元素 |
| 語法格式                   | slice(start, end)             | splice(start, deleteCount, ...items) | end 不包含在 slice 結果中 |
| 支援負數索引               | ✅ 是                         | ✅ 是                       | -1 表示最後一個元素         |
| 常見用途                   | 複製、擷取資料                | 修改原陣列內容              | slice 常用於不破壞原資料的操作 |
+----------------------------+-------------------------------+----------------------------+------------------------------+

- [ ] **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
const originalArray = ['B2', 'A10', 'C1', 'A2', 'B1', 'C10'];

// Ascending sort (immutable)
const ascending = [...originalArray].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

// Descending sort (immutable)
const descending = [...originalArray].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

console.log('Original:', originalArray);
console.log('Ascending:', ascending);
console.log('Descending:', descending);

- [x] **T-018**: Can you give examples of sparse and dense arrays?
Dense Array: Every index from 0 to length - 1 has a defined value. No gaps.

Sparse Array: Some indices are missing or undefined—these are called “holes.”

📦 Dense Array Example
const dense = [1, 2, 3, 4, 5];
console.log(dense.length); // 5
console.log(dense);        // [1, 2, 3, 4, 5]
✅ Every index is filled. No holes.

🕳️ Sparse Array Example
const sparse = [];
sparse[0] = 'A';
sparse[5] = 'B';
console.log(sparse.length); // 6
console.log(sparse);        // ['A', <4 empty items>, 'B']
⚠️ Indices 1–4 are holes. They exist in length but not in content.

🧪 Another Sparse Case: Using new Array()
const holes = new Array(5);
console.log(holes);        // [ <5 empty items> ]
console.log(holes.length); // 5
Even though the length is 5, there are no actual values—just empty slots.
- [x] **T-019**: Give a practical usages of the .fill() method
const arr = [1, 2, 3, 4, 5];
arr.fill('X', 1, 4); // [1, 'X', 'X', 'X', 5]

- [ ] **T-020**: How to convert an array to a string?
1.join(separator)
const arr = ['apple', 'banana', 'cherry'];
const str = arr.join(', ');
console.log(str); // "apple, banana, cherry"
2..toString()
const arr = ['apple', 'banana', 'cherry'];
const str = arr.toString();
console.log(str); // "apple,banana,cherry"
3.JSON.stringify()
javascript
const arr = ['apple', 'banana', 'cherry'];
const str = JSON.stringify(arr);
console.log(str); // '["apple","banana","cherry"]'
+-------------------+----------------------------+-----------------------------+
|     方法          |        輸出格式            |         使用情境            |
+-------------------+----------------------------+-----------------------------+
| join(', ')        | apple, banana, cherry      | 自訂分隔符，最常用           |
| toString()        | apple,banana,cherry        | 快速轉換，固定逗號分隔       |
| JSON.stringify()  | ["apple","banana","cherry"]| 傳輸資料、保留結構           |
+-------------------+----------------------------+-----------------------------+

> Consider these input arrays for question **T-21** to **T-48**

- `employees array`: An array of emplyees working in a department.

  ```js
  const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
  ];
  ```

- `departments array`: An array of departments where emplyees work.

  ```js
  const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
  ];
  ```

- [x] **T-021**: Can you filter employees who work in the "Engineering" department?
const employees = [
  { name: 'Alice', department: 'Engineering' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'Engineering' },
  { name: 'Diana', department: 'HR' }
];
🔍 Filter Logic
const engineeringTeam = employees.filter(emp => emp.department === 'Engineering');
console.log(engineeringTeam);
📦Output
[
  { name: 'Alice', department: 'Engineering' },
  { name: 'Charlie', department: 'Engineering' }
]
- [x] **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Charlie', department: 'Engineering' }
];

const formatted = employees.map(emp => `${emp.name} (${emp.department})`);
console.log(formatted); // ["Alice (HR)", "Charlie (Engineering)"]
- [x] **T-023**: Find the highest salary among employees.
const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 75000 },
  { name: 'Charlie', salary: 62000 }
];
🔍 Find Highest Salary
javascript
const highestSalary = Math.max(...employees.map(emp => emp.salary));
console.log(highestSalary); // 75000
🧠 Explanation:
employees.map(emp => emp.salary) creates an array of just the salary values: [50000, 75000, 62000]

Math.max(...array) finds the maximum value using the spread operator.

🏆 Bonus: Find the Employee with Highest Salary
javascript
const topEarner = employees.reduce((maxEmp, emp) => 
  emp.salary > maxEmp.salary ? emp : maxEmp
);
console.log(`${topEarner.name} has the highest salary: $${topEarner.salary}`);
📦 Output:

Bob has the highest salary: $75000
- [x] **T-024**: Check if there is at least one employee in the "Sales" department.
✅ Using .some() for Partial Match
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'Sales' }
];

const hasSales = employees.some(emp => emp.department === 'Sales');
console.log(hasSales); // true
🧠 Why .some() Works Well:
It returns true as soon as one match is found.

It’s efficient and expressive—perfect for existence checks.

It doesn’t modify the original array.

📦 Output:
true
If no employee is in "Sales", it would return false. Want to extend this to count how many are in "Sales" or group by department? I can help with that too!
- [x] **T-025**:function filterHighEarners(employees) {
  return employees.filter(emp => emp.salary > 6000);
}
e.g.
const employees = [
  { name: 'Alice', salary: 5800 },
  { name: 'Bob', salary: 7200 },
  { name: 'Charlie', salary: 6100 },
  { name: 'Diana', salary: 6000 }
];

const highEarners = filterHighEarners(employees);
console.log(highEarners);
/*Output
[
  { name: 'Bob', salary: 7200 },
  { name: 'Charlie', salary: 6100 }
]*/
- [x] **T-026**: Create an array of employee names only.
Sample Data

const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 6100 }
];
✅ Extract Names Only
const names = employees.map(emp => emp.name);
console.log(names); // ["Alice", "Bob", "Charlie"]
🧠 Why .map() Works:
It transforms each object into just the name field.

Returns a new array—immutable and clean.
Perfect for display lists, dropdowns, or reports.
- [x] **T-027**: Calculate the total salary of all employees using
👨‍💻 Sample Data
const employees = [
  { name: 'Alice', salary: 5800 },
  { name: 'Bob', salary: 7200 },
  { name: 'Charlie', salary: 6100 }
];
✅ Total Salary Using .reduce()
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary); // 19100
🧠 Why .reduce() Works Well:
It accumulates values across the array.

Starts from 0 and adds each emp.salary.

Immutable and expressive—great for aggregations.

📦 Output:
19100
- [ ] **T-028**: Is there any employee earning less than 5000?
✅ Using .some() for Conditional Check
javascript
const employees = [
  { name: 'Alice', salary: 5800 },
  { name: 'Bob', salary: 7200 },
  { name: 'Charlie', salary: 4900 }
];

const hasLowEarner = employees.some(emp => emp.salary < 5000);
console.log(hasLowEarner); // true
🧠 Why .some() Works Well:
Returns true as soon as one match is found.

Efficient for large arrays—short-circuits early.

Keeps your code clean and expressive.

📦 Output:
true
- [x] **T-029**: Find the first employee who earns exactly 5100.
✅ Using .find() Method
javascript
const employees = [
  { name: 'Alice', salary: 5800 },
  { name: 'Bob', salary: 5100 },
  { name: 'Charlie', salary: 5100 },
  { name: 'Diana', salary: 4900 }
];

const match = employees.find(emp => emp.salary === 5100);
console.log(match); // { name: 'Bob', salary: 5100 }
🧠 Why .find() Works Well:
Returns the first matching object.

Stops searching as soon as a match is found (efficient).

Returns undefined if no match exists.

📦 Output:
js
{ name: 'Bob', salary: 5100 }
- [x] **T-030**: Find the last employee in the "HR" department.
✅ Using .filter() + .at(-1) (ES2022+)

const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'HR' },
  { name: 'Diana', department: 'Engineering' }
];

const lastHR = employees.filter(emp => emp.department === 'HR').at(-1);
console.log(lastHR); // { name: 'Charlie', department: 'HR' }
🧠 Explanation:
.filter() collects all employees in "HR".

.at(-1) grabs the last element from that filtered array.

This approach is immutable and expressive.

🧪 Alternative (Pre-ES2022): Using .slice(-1)[0]

const lastHR = employees.filter(emp => emp.department === 'HR').slice(-1)[0];
Both methods return:
{ name: 'Charlie', department: 'HR' }
- [x] **T-031**: Find the first employee in the "Marketing" department.
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'HR' },
  { name: 'Diana', department: 'Engineering' }
];

const lastHR = employees.filter(emp => emp.department === 'Marketing');
console.log(lastHR); // { name: 'Charlie', department: 'Marketing' }
- [x] **T-032**: Check if all employees earn more than 4000.
✅ Using .every() Method
const employees = [
  { name: 'Alice', salary: 5800 },
  { name: 'Bob', salary: 7200 },
  { name: 'Charlie', salary: 4900 }
];

const allAbove4000 = employees.every(emp => emp.salary > 4000);
console.log(allAbove4000); // true
🧠 Why .every() Works:
Returns true only if all elements pass the condition.

Stops early if any employee fails the check.

Clean, expressive, and immutable.

📦 Output:
true
- [x] **T-033**: Find the first employee in the "Sales" and "HR" department.
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'Sales' },
  { name: 'Diana', department: 'Engineering' },
  { name: 'Eve', department: 'Sales' },
  { name: 'Frank', department: 'HR' }
];
✅ Find First in "Sales" and "HR"

const firstSales = employees.find(emp => emp.department === 'Sales');
const firstHR = employees.find(emp => emp.department === 'HR');

console.log('First Sales:', firstSales); // { name: 'Charlie', department: 'Sales' }
console.log('First HR:', firstHR);       // { name: 'Alice', department: 'HR' }
🧩 Bonus：包成函式更彈性

const findFirstByDept = (dept) => employees.find(emp => emp.department === dept);

console.log(findFirstByDept('Sales')); // Charlie
console.log(findFirstByDept('HR'));    // Alice
- [x] **T-034**: Verify if all employees belong to a department listed in the departments array.
Sample Data
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'Sales' }
];

const departments = ['HR', 'Marketing', 'Sales', 'Engineering'];
✅ Check with .every() + .includes()

const allValid = employees.every(emp => departments.includes(emp.department));
console.log(allValid); // true
🧠 Why This Works:
.every() ensures all employees pass the condition.

.includes() checks if the employee’s department exists in the departments array.

Returns true only if every department is valid.

📦 Output:
true
- [x] **T-035**: Log each employee's name and department name to the console.
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'Sales' },
  { name: 'Diana', department: 'Engineering' }
];

employees.forEach(emp => {
  console.log(`${emp.name} (${emp.department})`);
});
📦 Output

Alice (HR)
Bob (Marketing)
Charlie (Sales)
Diana (Engineering)
- [x] **T-036**: Extract all employee names into a single array.
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'Sales' },
  { name: 'Diana', department: 'Engineering' }
];
✅ Extract Names Only

const names = employees.map(emp => emp.name);
console.log(names); // ["Alice", "Bob", "Charlie", "Diana"]
🧠 Why .map() Works:
Transforms each object into just the name field.

Returns a new array—clean and immutable.

Ideal for dropdowns, reports, or display lists.

📦 Output
["Alice", "Bob", "Charlie", "Diana"]
- [x] **T-037**: Increment each employee's salary by 10%
const employees = [
  { name: 'Alice', salary: 5800 },
  { name: 'Bob', salary: 7200 },
  { name: 'Charlie', salary: 6100 }
];
✅ Increase Salary by 10%
const updatedEmployees = employees.map(emp => ({
  ...emp,
  salary: Math.round(emp.salary * 1.10)
}));

console.log(updatedEmployees);
📦 Output
[
  { name: 'Alice', salary: 6380 },
  { name: 'Bob', salary: 7920 },
  { name: 'Charlie', salary: 6710 }
]
🧠 Why This Works:
.map() creates a new array with transformed objects.

...emp preserves other properties.

Math.round() ensures clean integer values (optional).

emp.salary * 1.10 applies the 10% increase.
- [x] **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const employees = [
  { name: 'Alice', skills: ['Communication', 'Recruiting'] },
  { name: 'Bob', skills: ['SEO', 'Content Writing'] },
  { name: 'Charlie', skills: ['Sales', 'Negotiation', 'CRM'] }
];
✅ Flatten All Skills into One Array
const allSkills = employees.flatMap(emp => emp.skills);
console.log(allSkills);
📦 Output
[
  'Communication',
  'Recruiting',
  'SEO',
  'Content Writing',
  'Sales',
  'Negotiation',
  'CRM'
]
🧠 Why .flatMap() Rocks:
Combines .map() and .flat() in one step.

Efficient and expressive—no need for nested loops.

Keeps your code clean and immutable.

🧩 Bonus: Remove Duplicates
javascript
const uniqueSkills = [...new Set(allSkills)];
console.log(uniqueSkills);
This gives you a deduplicated list of all skills across employees.

Want to group skills by frequency, tag them by department, or visualize them in a skill cloud? I can help you build that logic next!
- [x] **T-039**: Find the total salary of all employees working in the "Engineering" department.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 6100 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
✅ Total Salary for "Engineering"
const totalEngineeringSalary = employees
  .filter(emp => emp.department === 'Engineering')
  .reduce((sum, emp) => sum + emp.salary, 0);

console.log(totalEngineeringSalary); // 16500
🧠 Why This Works:
.filter() narrows down to just "Engineering" employees.

.reduce() adds up their salaries starting from 0.

Clean, immutable, and expressive.

📦 Output:
js
16500
- [x] **T-040**: Check if there is any department where all employees earn more than 5000.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
✅ Step-by-Step Logic
// Group employees by department
const grouped = employees.reduce((acc, emp) => {
  acc[emp.department] = acc[emp.department] || [];
  acc[emp.department].push(emp);
  return acc;
}, {});

// Check if any department has all salaries > 5000
const hasQualifiedDept = Object.values(grouped).some(group =>
  group.every(emp => emp.salary > 5000)
);

console.log(hasQualifiedDept); // true
🧠 Explanation:
reduce() groups employees by department.

Object.values(grouped) gives arrays of employees per department.

.some() checks if any department meets the condition.

.every() ensures all employees in that department earn > 5000.

📦 Output:
true
| 名稱 | 角色     | 說明                             |
|------|----------|----------------------------------|
| acc  | 累加器   | 一開始是 {}，用來儲存分組結果     |
| emp  | 當前員工 | 每次迭代時的員工物件              |
| {}   | 初始值   | 傳給 acc，不是給 emp 的           |

- [x] **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
Find the total number of unique projects being handled across all employees.
const employees = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project B", "Project C"] },
  { id: 3, name: "Charlie", projects: ["Project D"] },
  { id: 4, name: "Diana", projects: ["Project A", "Project E"] },
  { id: 5, name: "Eve", projects: ["Project F", "Project C"] }
];

// Flatten all project arrays into one big array
const allProjects = employees.flatMap(emp => emp.projects);

// Use a Set to remove duplicates
const uniqueProjects = new Set(allProjects);

// Count the unique projects
const totalUnique = uniqueProjects.size;

console.log(totalUnique); // 👉 Outputs: 6
📦 Visual Flow
plaintext
Step 1: Extract all projects
→ ["A", "B"] + ["B", "C"] + ["D"] + ["A", "E"] + ["F", "C"]
→ ["A", "B", "B", "C", "D", "A", "E", "F", "C"]

Step 2: Deduplicate using Set
→ {"A", "B", "C", "D", "E", "F"}

Step 3: Count
→ 6 unique projects
- [x] **T-042**:const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];

// Extract name and department
const nameWithDepartment = employees.map(emp => ({
  name: emp.name,
  department: emp.department
}));

console.log(nameWithDepartment);

- [x] **T-043**: Get a list of names of employees earning more than 6000.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
const moreThan6000 = employees
  .filter(emp => emp.salary > 6000)
  .map(emp => emp.name);

console.log(moreThan6000); // 👉 ["Bob", "Diana", "Eve"]
- [x] **T-044**: Write a for-of loop to print the names of all employees from the employees array.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
for (const employee of employees){
	console.log(employere.name);
}
- [x] **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
const morethan5000=employees
	.filter(emp=>emp.salary>5000)
	.map(emp=> emp.name);
for (const employee of morethan5000){
	console.log(employee);
}
- [x] **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
for(const {name,salary} of employees){
  console.log(`${name} earns $${salary}`);
  Title: 為什麼使用反引號 `` 而不是單引號 ' 或雙引號 "？

| 字串種類       | 是否支援插值       | 是否支援換行       | 範例                     |
|----------------|--------------------|---------------------|--------------------------|
| '...' 或 "..." | ❌ 不支援插值      | ❌ 不支援直接換行   | 'Hello ' + name          |
| `...`          | ✅ 支援 ${} 插值   | ✅ 可直接換行       | `Hello ${name}`          |

- [x] **T-047**: Write a for-of loop to match employees with their departments and print the results.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
for(const {name, department} of employees){
	console.log(`${name}work in ${department}`);
}
- [x] **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
const employees = [
  { name: 'Alice', department: 'HR', salary: 5800 },
  { name: 'Bob', department: 'Marketing', salary: 7200 },
  { name: 'Charlie', department: 'Sales', salary: 4900 },
  { name: 'Diana', department: 'Engineering', salary: 8000 },
  { name: 'Eve', department: 'Engineering', salary: 8500 }
];
for(const [index,{mame}] of employees.entries()){
	console.log(`Index ${index}: ${name}`);
}
使用 entries() 配合 for...of 解構員工資料
| 語法                  | 說明                                 |
|-----------------------|--------------------------------------|
| employees.entries()   | 回傳 [index, value] 的迭代器         |
| [index, { name }]     | 解構出索引與員工名字                 |
| for...of              | 逐一送出每個 [index, employee] 配對  |
Output:

Index 0: Alice
Index 1: Bob
Index 2: Charlie
Index 3: Diana
Index 4: Eve
- [x] **T-049**: Given the array-like object below, access the second element and log it:

  ```js
  const arrayLike = { 0: "First", 1: "Second", length: 2 };
  ```
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log(arrayLike[1]);
- [ ] **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
function toRealArray() {
  const argsArray = Array.from(arguments);
  return argsArray;
}
Title: 使用 arguments 與 Array.from 將參數轉為陣列

| 語法                    | 說明                                         |
|-------------------------|----------------------------------------------|
| arguments               | 類陣列物件，包含所有傳入的參數               |
| Array.from(arguments)   | 將類陣列轉換為真正的陣列                     |
| return argsArray.map(), filter() 等方法的陣列 | 回傳可用於 .map(), .filter() 等方法的陣列 |

// Test it
console.log(toRealArray("Alice", "Bob", "Charlie")); 
// 👉 ["Alice", "Bob", "Charlie"]

- [x] **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
const divs = Array.from(document.querySelectorAll('div'));
console.log(divs); // 👉 Logs an array of all <div> elements

- [x] **T-052**: Merge these two arrays into a single array:

  ```js
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  ```
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];
console.log(merged); // 👉 [1, 2, 3, 4]
🔧 Alternative: concat()

const merged = arr1.concat(arr2);

- [ ] **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
const n = 5;
const value = "A";

const result = Array.from({ length: n }, () => value);
console.log(result); // 👉 ["A", "A", "A", "A", "A"]
Title: 使用 Array.from 建立重複值陣列

| 語法                  | 說明                                         |
|-----------------------|----------------------------------------------|
| { length: n }         | 建立一個具有特定長度的類陣列物件             |
| () => value           | 每個元素都回傳 "A"                           |
| Array.from(...)       | 將類陣列轉換為真正的陣列並注入值             |

- [x] **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
const str = "Hello";
const chars = Array.from(str);

console.log(chars); // 👉 ["H", "e", "l", "l", "o"]
- [x] **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
const fruits=['apple', 'banana', 'apricot', 'mango', 'blueberry'];
const grouped = fruits.group(word=>sord[0]);
console.log(grouped);
📦 Output

{
  a: ['apple', 'apricot'],
  b: ['banana', 'blueberry'],
  m: ['mango']
- [x] **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
const nums = [3, 7, 3, 2, 3, 8, 7, 7];

// Step 1: Count occurrences
const counts = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

// Step 2: Find the number with the highest count
const mostRepeated = Object.entries(counts).reduce((max, [num, count]) => {
  return count > max[1] ? [num, count] : max;
}, [null, 0]);

console.log(`Most repeated number: ${mostRepeated[0]} (${mostRepeated[1]} times)`);
📦 Output
Most repeated number: 7 (3 times)
Title: 使用 array 方法找出陣列中最常出現的數字

| 步驟               | 說明                                         |
|--------------------|----------------------------------------------|
| reduce()           | 建立一個計數物件 { 3: 3, 7: 3, 2: 1, 8: 1 }   |
| Object.entries()   | 將物件轉為 [key, value] 陣列                  |
| 第二個 reduce()    | 找出最大值的 key（即出現最多次的數字）        |

- [x] **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].
const sorted = [1, 2, 3, 5, 6, 8, 9];

//Get the median:
const median = sorted[3]; // 👉 5
- [ ] **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
const entries = [['a', 1], ['b', 2], ['c', 3]];

const result = Object.fromEntries(entries);

console.log(result); // 👉 { a: 1, b: 2, c: 3 }
Title: 使用 Object.fromEntries 將鍵值對陣列轉換為物件

| 語法                  | 說明                                         |
|-----------------------|----------------------------------------------|
| [['a', 1], ...]       | 陣列中的每個子陣列代表一組鍵值對             |
| Object.fromEntries()  | 將鍵值對陣列轉換為物件                       |
| console.log(result)   | 印出結果 { a: 1, b: 2, c: 3 }                |

- [ ] **T-060**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
const input = [['a', 'b'], ['c', 'd']];

const result = input.flatMap(sub => sub.map(char => char.toUpperCase()));

console.log(result); // 👉 ["A", "B", "C", "D"]
📦 Output

["A", "B", "C", "D"]
- [X] **T-061**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];

const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(counts);
// 👉 { apple: 2, banana: 3, mango: 1 }

📦 Output

{ apple: 2, banana: 3, mango: 1 }
Title: 使用 reduce() 統計陣列中每個水果的出現次數

| 語法           | 說明                                 |
|----------------|--------------------------------------|
| reduce()       | 將陣列壓縮成一個物件                 |
| acc[fruit]     | 累加每個水果的出現次數               |
| || 0           | 若尚未出現則初始化為 0               |
| + 1            | 每次出現就加一                       |

- [ ] **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
const arr = ['a', 'b', 'c', 'd', 'e'];
const result = arr.slice(1, 4);

console.log(result); // 👉 ['b', 'c', 'd']
Title: 使用 slice() 擷取陣列範圍

| 語法           | 說明                                         |
|----------------|----------------------------------------------|
| slice(start, end) | 從索引 start 開始（含），到 end 結束（不含） |
| slice(1, 4)     | 從索引 1 到 3，取得 ['b', 'c', 'd']          |

- [ ] **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
const arr = [9, 3, 1, 6, 8];

const sorted = arr.toSorted((a, b) => a - b);

console.log(sorted); // 👉 [1, 3, 6, 8, 9]
Title: 使用 toSorted() 進行升冪排序

| 語法                 | 說明                                 |
|----------------------|--------------------------------------|
| toSorted()           | ES2023 新增方法，回傳排序後的新陣列 |
| (a, b) => a - b      | 升冪排序，小的排前面                 |
| console.log(sorted)  | 印出排序後的結果                     |

- [x] **T-064**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
✅ Using toReversed() (ES2023)

const original = [1, 2, 3, 4, 5];
const reversed = original.toReversed();

console.log(reversed); // 👉 [5, 4, 3, 2, 1]
console.log(original); // 👉 [1, 2, 3, 4, 5] (unchanged)
🔁 Using reverse() (mutates original)

const original = [1, 2, 3, 4, 5];
const reversed = original.reverse();

console.log(reversed); // 👉 [5, 4, 3, 2, 1]
console.log(original); // 👉 [5, 4, 3, 2, 1] (mutated!)
🧠 Comparison Table
程式碼
| 方法          | 是否改變原陣列 | 回傳值             |
|---------------|----------------|--------------------|
| toReversed()  | ❌ 不改變       | 新的反轉陣列       |
| reverse()     | ✅ 改變         | 原陣列被反轉後回傳 |
🧪 Summary
Use toReversed() when you want immutability and keep the original array intact.

Use reverse() when you’re okay with mutating the original array.
- [ ] **T-065**: Group the follwing array elements based on age(Adult vs Non-Adult):

```js
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
```
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];

const grouped = users.group(user => user.age >= 18 ? 'Adult' : 'Non-Adult');

console.log(grouped);
/*
{
  Adult: [
    { name: 'Alice', age: 55 },
    { name: 'Charlie', age: 25 }
  ],
  'Non-Adult': [
    { name: 'Bob', age: 3 }
  ]
}
*/

- [x] **T-066**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";

const longestWord = sentence
  .split(' ') // Split into words
  .map(word => word.trim()) // Clean up whitespace
  .reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');

console.log(`Longest word: ${longestWord}`); // 👉 initiative
📦 Output

Longest word: initiative
Breakdown Table
| 方法         | 說明                                 |
|--------------|--------------------------------------|
| split(' ')   | 將句子分割成單字陣列                  |
| map(trim)    | 去除每個單字的前後空白                |
| reduce()     | 比較每個單字長度，保留最長的那個      |

- [x] **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const common = arr1.filter(item => arr2.includes(item));

console.log(common); // 👉 [3, 4]
📦 Output
[3, 4]
| 方法             | 說明                                 |
|------------------|--------------------------------------|
| filter()         | 篩選 arr1 中符合條件的元素           |
| includes(item)   | 檢查 arr2 是否包含該元素             |
| 結果             | 回傳 arr1 中與 arr2 重疊的項目       |
