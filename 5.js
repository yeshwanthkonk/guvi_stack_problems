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
  
  let arr = userInput[0];
  let stack = [];
  let open_para = ["{", "[", "("];
  let map_para = {"{":"}", "[":"]", "(":")"};
  let out_p = "yes";
  for(let i=0;i<arr.length;i++){
      if(open_para.indexOf(arr[i])>=0){
        stack.push(arr[i])
      }
      else{
          index = stack.length-1;
          if(index>=0 && arr[i] == map_para[stack[index]])
            stack.pop()
          else{
            out = "no";
            break;
          }
      }
  }
  if(out_p == "yes" && stack.length>0)
    out_p = "no"
    
  console.log(out_p);

  //end-here
});
