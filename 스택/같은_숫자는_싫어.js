// function solution(arr) {
//   const answer = [arr[0]];
//   let top = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (answer[top] !== arr[i]) {
//       answer[++top] = arr[i];
//     }
//   }

//   return answer;
// }

function myStack(size) {
  this.status = Array(size).fill(null);
  this.top = -1;

  this.myPush = (val) => {
    if (this.isFull()) throw Error("스택이 찼습니다.");
    this.status[++this.top] = val;
  };
  this.myPop = () => { // pop은 후입선출을 하면서 빼는값을 리턴하는 역할도 합니다. 
    if (this.isEmpty()) throw Error("스택이 비었습니다.");
    this.status[this.top--] = null;
  };
  this.myPeek = () => {
    if (this.isEmpty()) throw Error("스택이 비었습니다.");
    return this.status[this.top];
  };
  this.isEmpty = () => this.top === -1;
  this.isFull = () => this.top === size - 1;
}

const MAX = 1_000_000;

function solution(arr) {
  const ms = new myStack(MAX);
  let ans = [];

  ms.myPush(arr[0]);

  for (let i=1; i<arr.length; i++) {
    (ms.myPeek() !== arr[i]) && ms.myPush(arr[i]);
    /*
    매니저님은 아래 두 문법중에서 어느것을 선호하시나요 ?
```js
  if (true) console.log("true")
```

```js
  if (true) {
      console.log("true")
  }
```
    */
  }
  
  while(!ms.isEmpty()) {
    ans.push(ms.myPeek());
    ms.myPop();
  }

  return ans.reverse();
}
