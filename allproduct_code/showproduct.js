var catygory=sessionStorage.getItem("homepageitemsselect");
var items=sessionStorage.getItem("produtselect");
console.log(catygory);
console.log(items);



function show(){
    var xhr = new XMLHttpRequest();
    var url="https://api.npoint.io/13b45254f8416319501e/"+catygory+"/"+items;
    xhr.open("GET",url , true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataR =JSON.parse( xhr.responseText);
            console.log(dataR);
            localStorage.setItem("productimg",dataR.image);
            localStorage.setItem("producttitle",dataR.title)
            localStorage.setItem("productprice",dataR.price);
            localStorage.setItem("productshipping",dataR.shipping);
            localStorage.setItem("productconditions",dataR.condition);
            
            document.getElementById("img-product").src=dataR.image;
            document.getElementById("name-product").innerHTML=dataR.title;
            document.getElementById("price_product").innerHTML=dataR.price;
            document.getElementById("condition_product").innerHTML=dataR.condition;
            document.getElementById("shipping-product").innerHTML=dataR.shipping;
            this.addEventListener('loadend',aaimg);

        }
    }
    xhr.send();
    }
    show();
 function aaimg(){
    document.getElementById("lodiiimg").style.display="none";
    document.getElementById("img-product").style.display="block";
  }

  var sold_product =Math.floor(Math.random() * (150 + 1));
  document.getElementById("sold_product").innerHTML=sold_product;

    // ..................add_cart............add_cart.onclick........

    function set_loc(loc_key, arr_na) {
        localStorage.setItem(loc_key, JSON.stringify(arr_na));

    }

    function get_loc(loc_key) {
        var arr = localStorage.getItem(loc_key);
        return JSON.parse(arr);

    }


        var data_product_selected=localStorage.getItem("data_product_selected");
        console.log("ssss"+data_product_selected)
    document.getElementById("add_cart").onclick = function() {

        if (localStorage.getItem("inames")) {
            var i_name = get_loc("inames");
            var i_price = get_loc("iprice");
            var i_img = get_loc("i_img");
            var i_seller = get_loc("iseller");
            var i_ship_cost = get_loc("i_ship");
            var i_import_cost = get_loc("i_imp");



            var price = localStorage.getItem("productprice").replace(/[^0-9\.]+/g, "");
            var shipping = localStorage.getItem("productshipping").replace(/[^0-9\.]+/g, "");
             price = price.slice(0, 4);
            price=Math.trunc(price);

           shipping=Math.trunc(shipping);

           
           
            var cost =Math.floor(Math.random() * (50 + 1));
            document.getElementById("sold_product").innerHTML=cost;


            i_name.push(localStorage.getItem("producttitle"));
            i_price.push(price);
            i_seller.push("ebay");
            i_img.push(localStorage.getItem("productimg") );
            i_ship_cost.push(shipping);
            i_import_cost.push(cost);




            set_loc("iprice", i_price);
            set_loc("inames", i_name);
            set_loc("iseller", i_seller);
            set_loc("i_img", i_img);
            set_loc("i_ship", i_ship_cost);
            set_loc("i_imp", i_import_cost);




        } else {
            //alert("done");
            var i_name = [];
            var i_price = [];
            var i_img = [];
            var i_seller = [];
            var i_ship_cost = [];
            var i_import_cost = [];

            i_name.push(localStorage.getItem("producttitle"));
            i_price.push(price);
            i_seller.push("ebay");
            i_img.push(localStorage.getItem("productimg") );
            i_ship_cost.push(shipping);
            i_import_cost.push(cost);


            set_loc("iprice", i_price);
            set_loc("inames", i_name);
            set_loc("iseller", i_seller);
            set_loc("i_img", i_img);
            set_loc("i_ship", i_ship_cost);
            set_loc("i_imp", i_import_cost);


        }


        //window.location.replace("cart.html");
        //console.log(it[1]);


    };

    document.getElementById("badge").innerHTML=sessionStorage.getItem("countamr");
