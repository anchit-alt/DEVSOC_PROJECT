const currentYear = new Date().getFullYear();
const date = new Date();
let time = date.getHours();
// let time = 6;

// Dynamic time code
if (time<12&&time>=5){
  document.querySelector(".time-content").textContent =  "It's "+ time + " Had Breakfast ? , if not what are you waiting for ..";
  document.querySelector(".time-meal").style.backgroundColor = "#FFE61B";
  document.querySelector(".chef").style.width = "100%";
} else if (time>12&&time<17) {
  time = time - 12;
document.querySelector(".time-content").textContent = "Come on dude , keep your work aside and have your lunch first !!"+ " it's "+time + " already"
document.querySelector(".time-meal").style.backgroundColor = "#F7ECDE";
document.querySelector(".time-content").style.color = "blue";
document.querySelector(".chef").style.width = "80%";
}
else {
  time = time -12 ;
  document.querySelector(".time-content").textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  document.querySelector(".time-meal").style.backgroundColor = "#051367";
}

// Dynamic time code closed

//footer
document.querySelector("footer").textContent = "Copyright @ "+currentYear;
//footer closed
