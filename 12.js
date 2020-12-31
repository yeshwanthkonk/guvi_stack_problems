// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let n = +userInput[0];
  let q = +userInput[2];
  let arr = userInput[1].split(" ").map(x => +x);
  let que = userInput[3].split(" ").map(x => +x);
  let stack = [];
  for(let i=0;i<arr.length;i++){
      let index = stack.length - 1;
      while(index>=0 && arr[i] > arr[stack[index]]){
          arr[stack[index]] = arr[i];
          stack.pop();
          index--;
      }
      stack.push(i);
  }
  while(stack.length>0){
      arr[stack.pop()] = -1;
  }
  let out_p = "";
  for(let i=0;i<que.length;i++){
      out_p += arr[que[i]]+" ";
  }
  console.log(out_p.trim());
  //end-here
});
