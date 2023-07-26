//your JS code here. If required.
let output = document.getElementById("output");
const call = new Promise((res, rej)=>{
	 setTimeout(() => {
    res("Hello, world!");
  }, 1000);
})
output.innerText = call();