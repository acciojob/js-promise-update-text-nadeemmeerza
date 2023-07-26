//your JS code here. If required.

const call = new Promise((res, rej)=>{
	 setTimeout(() => {
    res("Hello, world!");
  }, 1000);
})
call().then((res)=>{
	let output = document.getElementById("output");
	output.innerText = res;
});