
var radio1=document.getElementById("acc1");
var radio2=document.getElementById("acc2");
var dis1=document.getElementById("main_body");
var dis2=document.getElementById("form_j");
radio1.onclick=function(){
    console.log("radio1.checked"+radio1.checked);
    dis2.style.display="none";
    dis1.style.display="flex";
}
    radio2.onclick=function(){

    console.log("radio2.checked"+radio1.checked);

    dis2.style.display="flex";
    dis1.style.display="none";
}


// ......................................
// ......................................
// ......................................
// ......................................
//  F_Name=document.getElementById("F_Name").value;
//  L_Name=document.getElementById("L_Name").value;
 
