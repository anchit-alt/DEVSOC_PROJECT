const currentYear = new Date().getFullYear();
const date = new Date();
let time = date.getHours();
// let time = 6;

// Dynamic time code
if (time<12&&time>=5){
  document.querySelector(".time-content").textContent =  "It's "+ time + " Had Breakfast ? , if not what are you waiting for ..";
  document.querySelector(".time-meal").style.backgroundColor = "#FFE61B";
  document.querySelector(".chef").style.width = "70%";
  document.querySelector(".time-meal").style.backgroundImage = "linear-gradient(to bottom right,rgba(12, 78, 2, 0.8), rgba(142, 246, 126, 0.8))";
} else if (time>12&&time<17) {
  time = time - 12;
document.querySelector(".time-content").textContent = "Come on dude , keep your work aside and have your lunch first !!"+ " it's "+time + " already"
document.querySelector(".time-meal").style.backgroundImage = "linear-gradient(to bottom right, rgba(33, 191, 9, 0.8)), rgba(39, 252, 7, 0.8))";
document.querySelector(".chef").style.width = "80%";
}
else {
  time = time -12 ;
  document.querySelector(".time-content").textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  document.querySelector(".time-meal").style.backgroundColor = "#051367";
  document.querySelector(".time-meal").style.backgroundImage = "linear-gradient(to bottom right, red, yellow)";
}

// Dynamic time code closed

//footer
document.querySelector("footer").textContent = "Copyright @ "+currentYear;
//footer closed



//<-------------------------------------------------------------------------------------------------------------------------------->


// DOM_RUCHIK
var noOfItems = 8;
var itemName = ["mi1","mi2","mi3","mi4","mi5","mi6","mi7","mi8"];
var itemPrice = [100,200,300,400,500,600,700,800];
var itemQnt = [0,0,0,0,0,0,0,0];

for(var i=0;i<noOfItems;i++){
  document.querySelector("#mi"+(i+1)).addEventListener("click",function(){
    itemQnt[this.id[2]-1]++;
    document.querySelector("."+this.id+"q").innerHTML = itemQnt[this.id[2]-1];
    document.querySelector(".itemsname").innerHTML = "";
    document.querySelector(".itemsqnt").innerHTML = "";
    document.querySelector(".itemsprice").innerHTML = "";
    display();
  });
}

for(var i=0;i<noOfItems;i++){
  document.querySelector("#mim"+(i+1)).addEventListener("click",function(){
    if(itemQnt[this.id[3]-1]!=0){
      itemQnt[this.id[3]-1]--;
      document.querySelector(".mi"+this.id[3]+"q").innerHTML = itemQnt[this.id[3]-1];
      document.querySelector(".itemsname").innerHTML = "";
      document.querySelector(".itemsqnt").innerHTML = "";
      document.querySelector(".itemsprice").innerHTML = "";
      display();
    }
  });
}

function display(){
  for(var i=0;i<noOfItems;i++){
    if(itemQnt[i]!=0){
      document.querySelector(".itemsname").innerHTML += "<li> "+itemName[i];
      document.querySelector(".itemsqnt").innerHTML += "<li>"+itemQnt[i];
      document.querySelector(".itemsprice").innerHTML += "<li>"+itemPrice[i]+" X "+itemQnt[i];
    }
  }
  var price = 0;
  var dishes = 0;
  for(var i=0;i<noOfItems;i++){
    dishes+=itemQnt[i];
  }
  document.querySelector(".total-of-dishes").innerHTML = dishes+" dishes";
  for(var i=0;i<noOfItems;i++){
    price += itemPrice[i]*itemQnt[i];
  }
  document.querySelector(".amount-in-ruppees").innerHTML = "₹"+price+" only";
}
