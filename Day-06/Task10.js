/*Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```*/
Step-by-step Call Stack Changes
1. Before any function is called
| Call Stack |
|-----------------|
| (global) |
2. f2() is called
| Call Stack |
|-----------------|
| f2 |
| (global) |
3. f2 returns
| Call Stack |
|-----------------|
| (global) |
4. f3() is called
| Call Stack |
|-----------------|
| f3 |
| (global) |
5. Inside f3, f1() is called
| Call Stack |
|-----------------|
| f1 |
| f3 |
| (global) |
6. f1 returns (from inside f3)
| Call Stack |
|-----------------|
| f3 |
| (global) |
7. f3 returns
| Call Stack |
|-----------------|
| (global) |
8. f1() is called (from global)
| Call Stack |
|-----------------|
| f1 |
| (global) |
9. f1 returns
| Call Stack |
|-----------------|
| (global) |


