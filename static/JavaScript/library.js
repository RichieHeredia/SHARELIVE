//eventos de clic bliblioteca
var numOfcategories = document.querySelectorAll(".event").length;
//bg img
var fondo = document.getElementById("main");
//cards imgs
var imag1 = document.getElementById("img1");
var imag2 = document.getElementById("img2");
var imag3 = document.getElementById("img3");
var imag4 = document.getElementById("img4");
var imag5 = document.getElementById("img5");
var imag6 = document.getElementById("img6");
var imag7 = document.getElementById("img7");
var imag8 = document.getElementById("img8");
var imag9 = document.getElementById("img9");
//category description
var des = document.getElementById("descrip");
//number of cards
var num1= document.getElementById("carta1");
var num2= document.getElementById("carta2");
var num3= document.getElementById("carta3");
var num4= document.getElementById("carta4");
var num5= document.getElementById("carta5");
var num7= document.getElementById("carta7");
var num6= document.getElementById("carta6");
var num8= document.getElementById("carta8");
var num9= document.getElementById("carta9");

for (var i = 0; i < numOfcategories; i++) {
  document.querySelectorAll(".event")[i].addEventListener("click", function() {

    var itemTriggered = this.getAttribute("class")[0];
    console.log(itemTriggered);
    if (itemTriggered === "s") {
      // cambio de fondo de pag
      fondo.style.backgroundImage = 'url("static/Multimedia/cat1.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="static/Articles/1.jpg";
      num1.innerHTML="<strong>#1</strong>"
      img2.src="static/Articles/2.jpg";
      num2.innerHTML="<strong>#2</strong>"
      img3.src="static/Articles/3.jpg";
      num3.innerHTML="<strong>#3</strong>"
      img4.src="static/Articles/4.jpg";
      num4.innerHTML="<strong>#4</strong>"
      img5.src="static/Articles/5.jpg";
      num5.innerHTML="<strong>#5</strong>"
      img6.src="static/Articles/6.jpg";
      num6.innerHTML="<strong>#6</strong>"
      img7.src="static/Articles/7.jpg";
      num7.innerHTML="<strong>#7</strong>"
      img8.src="static/Articles/8.png";
      num8.innerHTML="<strong>#8</strong>"
      img9.src="static/Articles/1.jpg";
      num9.innerHTML="<strong>#9</strong>"
      //cambio de descripción de categoria
      des.innerHTML = "Standup Comedy";
      //

    } else if (itemTriggered === "g") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("static/Multimedia/cat2.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="static/Articles/o1.jpg";
      img2.src="static/Articles/o2.jpg";
      img3.src="static/Articles/o3.jpg";
      img4.src="static/Articles/o4.jpg";
      img5.src="static/Articles/o5.jpg";
      img6.src="static/Articles/o6.jpg";
      img7.src="static/Articles/o7.jpg";
      img8.src="static/Articles/o8.jpg";
      img9.src="static/Articles/o9.jpg";
      //cambio de descripción de categoria
      des.innerHTML="Ocio";

    } else if (itemTriggered === "c") {
        // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("static/Multimedia/cat3.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="static/Articles/g1.jpg";
      img2.src="static/Articles/g2.jpg";
      img3.src="static/Articles/g3.jpg";
      img4.src="static/Articles/g4.jpg";
      img5.src="static/Articles/g5.jpg";
      img6.src="static/Articles/g6.jpg";
      img7.src="static/Articles/g7.jpg";
      img8.src="static/Articles/g8.jpg";
      img9.src="static/Articles/g1.jpg";
      //cambio de descripción de categoria
      des.innerHTML="Conciertos en vivo";

    } else if (itemTriggered === "m") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("static/Multimedia/cat4.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="static/Articles/m1.jpg";
      img2.src="static/Articles/m2.jpg";
      img3.src="static/Articles/m3.jpg";
      img4.src="static/Articles/m4.jpg";
      img5.src="static/Articles/m5.jpg";
      img6.src="static/Articles/m6.png";
      img7.src="static/Articles/m7.jpg";
      img8.src="static/Articles/m8.jpg";
      img9.src="static/Articles/m9.jpg";
      //cambio de descripción de categoria
      des.innerHTML="Conferencias";
    }
  });
}
