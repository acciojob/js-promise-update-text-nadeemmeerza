//your JS code here. If required.
let output = document.getElementById("output");
const call = new Promise((res, rej)=>{
	 setTimeout(() => {
    res("Hello, world!");
  }, 1000);
})
call().then((res)=>{
	output.innerText = res;
});