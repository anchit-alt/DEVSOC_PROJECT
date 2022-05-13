const currentYear = new Date().getFullYear();
const date = new Date();
let time = date.getHours();
console.log(time);
// document.querySelector(".time-meal").textContent = "Hello" +time;
if (time<12&&time>6){
  document.querySelector(".time-content").textContent =  "It's "+ time + " Had Breakfast ? , if not what are you waiting for .."
} else if (time>12&&time<15) {
  time = time - 12;
document.querySelector(".time-content").textContent = "Come on dude , keep your work aside and have your lunch first !!"+ " it's "+time + " already"}
else {
  time = time -12 ;
  document.querySelector(".time-content").textContent = "Dinner";
}
document.querySelector("footer").textContent = "Copyright @ "+currentYear;
