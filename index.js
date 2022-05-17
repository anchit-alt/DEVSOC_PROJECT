const currentYear = new Date().getFullYear();
const date = new Date();
let time = date.getHours();
// let time = 6;

const randomQoutesBF = ["Whole wheat flour and oats make applesauce bread a healthy breakfast option. Applesauce, cinnamon, nutmeg, and walnuts give it a wonderful seasonal flavor. This recipe also freezes well, so you can make a few loaves at once.","This hearty, healthy breakfast recipe is like a Greek omelette in a wrap. Fresh spinach, salty feta cheese, and black olives combine with scrambled eggs in a tortilla for an easy, hand-held breakfast you can eat on-the-go. Use whole wheat tortillas to boost the fiber in this protein and iron-rich breakfast.","Yogurt is a great way to get protein and healthy fat in your diet first thing in the morning, not to mention the active cultures. It's also easy to make with the help of an Instant Pot. While the process is almost entirely hands-off, you'll want to get started the day before to let the yogurt incubate and chill","If anyone in the family is gluten-free or on a low-carb diet, these pancakes are a delicious choice for breakfast. They are nice and delicate and come out more like crepes. Cream cheese, maple syrup, eggs, and vanilla extract are blended to create a batter. Dust with powdered sugar and top with berries","Green shakshuka replaces the typical tomato sauce with a healthy combination of broccoli rabe and spinach. Eggs cook on top until perfectly tender for a low-carb, high-protein breakfast dish","Some banana bread recipes have more sugar and fat than nutrition, but this version of the favorite quick bread cuts back on the bad stuff and pumps up the healthy ingredients. Oil and yogurt are swapped in for the butter and flaxseed and whole wheat flour increase the fiber. Walnuts bring a good dose of omega-3 fats, making this a good choice for breakfast on-the-go"]

const randomQoutesLN = ["Adelle Davis People who say they’re too busy to have lunch have a false impression of their own importance.~ John Howard","Food is, of course, a great way to meet people and make friends. When people share a meal, you can be sure the discussions about food, restaurants and recipes are going to be endless.","Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine."]

// Dynamic time code
if (time>=5&&time<12){
  document.querySelector(".currenttime").textContent = "It's " + time
  document.querySelector(".currenttime").style.fontSize = "3.4em";
  document.querySelector(".time-content").textContent =  randomQoutesBF[Math.floor(Math.random()*5)];
  document.querySelector(".time-meal").style.backgroundColor = "#FFE61B";
  document.querySelector(".chef").style.width = "70%";
  document.querySelector(".time-meal").style.backgroundImage = "linear-gradient(to bottom right,rgba(12, 78, 2, 0.8), rgba(142, 246, 126, 0.8))";
} else if (time>=12&&time<17) {
  document.querySelector(".currenttime").textContent = "It's " + time
  document.querySelector(".currenttime").style.fontSize = "3.4em";
  document.querySelector(".time-content").textContent = randomQoutesLN[Math.floor(Math.random()*3)];
  document.querySelector(".time-meal").style.backgroundImage = "linear-gradient(to bottom right, rgba(128, 255, 32, 0.8), rgba(229, 250, 212, 0.8))";
  document.querySelector(".chef").style.width = "80%";
}
else {
  // time = time -12 ;
  document.querySelector(".currenttime").textContent = "It's " + time
  document.querySelector(".currenttime").style.fontSize = "3.4em";
  document.querySelector(".time-content").textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  document.querySelector(".time-meal").style.backgroundColor = "#051367";
  document.querySelector(".time-meal").style.backgroundImage = "linear-gradient(to bottom right, rgba(13, 13, 242, 1), rgba(5, 5, 62, 1))";
}

// Dynamic time code closed

//footer
document.querySelector("footer").textContent = "Copyright @ "+currentYear;
//footer closed



//<-------------------------------------------------------------------------------------------------------------------------------->


// DOM_RUCHIK
var noOfItems = 24;
var itemName = ["mi1","mi2","mi3","mi4","mi5","mi6","mi7","mi8","mi9","mi10","mi11","mi12","mi13","mi14","mi15","mi16","mi17","mi18","mi19","mi20","mi21","mi22","mi23","mi24"];
var itemPrice = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400];
var itemQnt = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
