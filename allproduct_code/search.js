var butsearch=document.getElementById("butsearch");
var search_text=document.getElementById("search_text");
// search_text.value="Apple";
butsearch.onclick=show_search;
    
    var search = document.getElementById("search");
    function show_search(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.npoint.io/13b45254f8416319501e/"+search_text.value, true);
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
                    search.appendChild(catbox);
                }
            }
        }
        xhr.send();
        }
    
        function runCommand(x){ 
            console.log(x.alt);
            sessionStorage.setItem("produtselect", x.alt);
            window.open("/allproduct_code/showproduct.html","_self");
         
         }
         document.getElementById("badge").innerHTML=sessionStorage.getItem("countamr");
