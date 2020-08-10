let stpbl1 = document.getElementById("stepbl1");
let stepbrdr1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stepbrdr2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stepbrdr3 = document.getElementById("stepbrdr3");



stpbl1.onmouseover = function() {
	stepbrdr1.style.borderBottom = "3px solid white"
}
stpbl1.onmouseout = function() {
	stepbrdr1.style.borderBottom = "3px solid black"
}



stpbl2.onmouseover = function() {
	stepbrdr2.style.borderBottom = "3px solid white"
}
stpbl2.onmouseout = function() {
	stepbrdr2.style.borderBottom = "3px solid black"
}



stpbl3.onmouseover = function() {
	stepbrdr3.style.borderBottom = "3px solid white"
}
stpbl3.onmouseout = function() {
	stepbrdr3.style.borderBottom = "3px solid black"
}