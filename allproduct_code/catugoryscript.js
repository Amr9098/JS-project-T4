var items_selected =sessionStorage.getItem("homepageitemsselect");
console.log(items_selected);

document.getElementById("pages_title").innerHTML=items_selected;
document.title=items_selected   
var apPopProducts = document.getElementById("apPopProducts");
function show_apPopProducts(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/1f844650bec837f58bcd/"+items_selected+"Products/", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataR =JSON.parse( xhr.responseText);
            // console.log(dataR.length);
            for (var i=0; i<dataR.length;i++){ 
                // console.log(dataR[i].money);
                var catbox = document.createElement('div');
                catbox.setAttribute('class','show_box');
                var elem_img = document.createElement("img");
                elem_img.setAttribute("src",dataR[i].src);
                var elem_a = document.createElement("a");
                // elem_a.setAttribute("id","data_boxaleft");
                elem_a.textContent=dataR[i].Name;
                catbox.appendChild(elem_img);
                catbox.appendChild(elem_a);
                apPopProducts.appendChild(catbox);
            }
        }
    }
    xhr.send();
    }
    show_apPopProducts();

    // ................................................
var LimitedDeals = document.getElementById("LimitedDeals");
function show_LimitedDeals(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/13b45254f8416319501e/"+items_selected,true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataR =JSON.parse( xhr.responseText);
            // console.log(dataR.length);
            for (var i=0; i<5;i++){ 
                // console.log(dataR[i].money);
                var catbox = document.createElement('div');
                catbox.setAttribute('class','show_box');
                var elem_img = document.createElement("img");
                elem_img.setAttribute("src",dataR[i].image);
                elem_img.setAttribute("alt",i);
                elem_img.setAttribute("onclick", "runCommand(this);");
                var elem_a = document.createElement("a");
                elem_a.textContent=dataR[i].title;
                var elem_a2 = document.createElement("a");
                elem_a2.textContent=dataR[i].price;
                catbox.appendChild(elem_img);
                catbox.appendChild(elem_a);
                catbox.appendChild(elem_a2);
                LimitedDeals.appendChild(catbox);
            }
        }
    }
    xhr.send();
    }
    show_LimitedDeals();

    
    

    var appleProducts = document.getElementById("appleProducts");
    function show_appleProducts(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.npoint.io/13b45254f8416319501e/"+items_selected, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var dataR =JSON.parse( xhr.responseText);
                // console.log(dataR.length);
                for (var i=6; i<dataR.length;i++){ 
                    // console.log(dataR[i].money);
                    var catbox = document.createElement('div');
                    catbox.setAttribute('class','show_box');
                    catbox.setAttribute('id','siz_box');
                    var elem_img = document.createElement("img");
                    elem_img.setAttribute("src",dataR[i].image);
                    elem_img.setAttribute("alt",i);
                    elem_img.setAttribute("onclick", "runCommand(this);");
                    var elem_a = document.createElement("a");
                    elem_a.textContent=dataR[i].title;
                    var elem_a2 = document.createElement("a");
                    var elem_a3 = document.createElement("a");
                    elem_a2.textContent=dataR[i].price;
                    elem_a3.textContent=dataR[i].shipping;
                    catbox.appendChild(elem_img);
                    catbox.appendChild(elem_a);
                    catbox.appendChild(elem_a2);
                    catbox.appendChild(elem_a3);
                    appleProducts.appendChild(catbox);
                }
            }
        }
        xhr.send();
        }
        show_appleProducts();





        function runCommand(x){ 
            console.log(x.alt);
            sessionStorage.setItem("produtselect", x.alt);
            window.open("/allproduct_code/showproduct.html","_self");
         
         }





         document.getElementById("badge").innerHTML=sessionStorage.getItem("countamr");

    // ...........................Iphone11....................
    