let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
showSlidest();

function showSlidest() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlidest, 9000000); 
}


document.getElementById("badge").innerHTML=sessionStorage.getItem("countamr");
// ..............show_Categories.........................................

var catplaces = document.getElementById("Catplace");
function show_Categories(){
  

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/f438445a68906a7fb87e/Categories/", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataR =JSON.parse( xhr.responseText);
            // console.log(dataR);
            for (var i=0; i<dataR.length;i++){ 
                // console.log(dataR[i].Name);
                var catbox = document.createElement('div');
                catbox.setAttribute('class','data_box');
                var elem_img = document.createElement("img");
                elem_img.setAttribute("alt",dataR[i].Name);
                elem_img.setAttribute("onclick", "runCommand(this);");
                elem_img.setAttribute("src",dataR[i].src);
                var elem_a = document.createElement("a");
                elem_a.textContent=dataR[i].Name;
                catbox.appendChild(elem_img);
                catbox.appendChild(elem_a);
                catplaces.appendChild(catbox);
                this.addEventListener('loadend',aaca);
              
            }
        }
    }
    xhr.send();
    }
    show_Categories();

    
    // ..............show_brands.........................................

var brandsplace = document.getElementById("brandsplace");
function show_brands(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/f438445a68906a7fb87e/brands/", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataR =JSON.parse( xhr.responseText);
            // console.log(dataR);
            for (var i=0; i<dataR.length;i++){ 
                // console.log(dataR[i].Name);
                var catbox = document.createElement('div');
                catbox.setAttribute('class','data_box');
                var elem_img = document.createElement("img");
                elem_img.setAttribute("src",dataR[i].src);
                elem_img.setAttribute("alt",dataR[i].Name);
                elem_img.setAttribute("onclick", "runCommand(this);");
                var elem_a = document.createElement("a");
                // elem_a.setAttribute("href","/allproduct_code/apple.html")
                elem_a.textContent=dataR[i].Name;
                catbox.appendChild(elem_img);
                catbox.appendChild(elem_a);
                brandsplace.appendChild(catbox);
                this.addEventListener('loadend',aabr);

            }
        }
    }
    xhr.send();
    }
    show_brands();


    // ...........................Deals...............................
    
var Dealssplace = document.getElementById("Dealssplace");
function show_Deals(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/13b45254f8416319501e/led/", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataR =JSON.parse( xhr.responseText);
            // console.log(dataR.length);
            for (var i=0; i<7;i++){ 
                // console.log(dataR[i].money);
                var catbox = document.createElement('div');
                catbox.setAttribute('class','data_boxx');
                var elem_img = document.createElement("img");
                elem_img.setAttribute("src",dataR[i].image);
                elem_img.setAttribute("alt",i);
                elem_img.setAttribute("onclick", "runCommanddeals(this);");
                var elem_a = document.createElement("a");
                elem_a.textContent=dataR[i].price;
                catbox.appendChild(elem_img);
                catbox.appendChild(elem_a);
                Dealssplace.appendChild(catbox);
                this.addEventListener('loadend',aade);
            }
        }
    }
    
    xhr.send();
    }
    show_Deals();


    function aaca(){
      document.getElementById("lodiica").style.display="none";
    }
    function aabr(){
      document.getElementById("lodiibr").style.display="none";
    } function aade(){
      document.getElementById("lodiide").style.display="none";
    } function aace(){
      document.getElementById("lodiice").style.display="none";
    }


    // ..........................Smartphones...............................
       
var Smartphonesplace = document.getElementById("Smartphones");
function show_Smartphones(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/13b45254f8416319501e/Apple/", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataR =JSON.parse( xhr.responseText);
            // console.log(dataR.length);

            for (var i=0; i<7;i++){ 
                // console.log(dataR[i].money);
                var catbox = document.createElement('div');
                catbox.setAttribute('class','data_boxx');
                var elem_img = document.createElement("img");
                elem_img.setAttribute("src",dataR[i].image);
                elem_img.setAttribute("alt",i);
                elem_img.setAttribute("onclick", "runCommandproduct(this);");
                var elem_a = document.createElement("a");
                  elem_a.textContent=dataR[i].price;
                catbox.appendChild(elem_img);
                catbox.appendChild(elem_a);
                Smartphonesplace.appendChild(catbox);
                this.addEventListener('loadend',aace);

            }
        }
    }
    xhr.send();
    }
    show_Smartphones();

    // ..........................Scroll Back To Top Button..............................

    var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}


// ..................................test...............

var counters=0;
var x =document.getElementById("co");
var im = document.querySelectorAll("#id1");
for(i=0; i<im.length; i++){
	im[i].onclick = ()=>{
		x.innerHTML=`conter =  ${++counters}`;  
        console.log("1");
	}
}


 function runCommand(x){
   console.log(x.alt);
   sessionStorage.setItem("homepageitemsselect", x.alt);
   window.open("/allproduct_code/catugory.html","_self");

}
 function runCommandproduct(x){
   console.log(x.alt);
   sessionStorage.setItem("homepageitemsselect", "Apple");
   sessionStorage.setItem("produtselect", x.alt);   
   window.open("/allproduct_code/showproduct.html","_self");

}
function runCommanddeals(x){
  console.log(x.alt);
  sessionStorage.setItem("homepageitemsselect", "led");
  sessionStorage.setItem("produtselect", x.alt);   
  window.open("/allproduct_code/showproduct.html","_self");

}
  