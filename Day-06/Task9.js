/*## 9. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {
    f1();
}
f2();
```*/
1. Before any function is called
| Call Stack |
|-----------------|
| (global) |
2. f2() is called
| Call Stack |
|-----------------|
| f2 |
| (global) |
3. Inside f2, f1() is called
| Call Stack |
|-----------------|
| f1 |
| f2 |
| (global) |
4. f1 finishes (returns)
| Call Stack |
|-----------------|
| f2 |
| (global) |
5. f2 finishes (returns)
| Call Stack |
|-----------------|
| (global) |
// Start
[global]

// Call f2()
[f2]
[global]

// Inside f2, call f1()
[f1]
[f2]
[global]

// f1 returns
[f2]
[global]

// f2 returns
[global]


