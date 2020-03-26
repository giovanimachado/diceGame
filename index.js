// alert("Working!")

var p1 = Math.floor(Math.random()*6)+1;
document.querySelector("img.img1").setAttribute("src", "images/dice"+p1+".png");
var p2 = Math.floor(Math.random()*6)+1;
document.querySelector("img.img2").setAttribute("src", "images/dice"+p2+".png");

if (p1 > p2) {
  document.querySelector("h1").innerHTML="🎇P1 Wins";
}
else if (p2 > p1) {
  document.querySelector("h1").innerHTML="P2 Wins🎇";
}
else {
  document.querySelector("h1").innerHTML="😒Draw😒";
}
