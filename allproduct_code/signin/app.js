


function validation(){
    if(document.getElementById("user").value==""){
        alert("Oops, that's not amatch");
        return false;
    }
    if (document.getElementById("user").value.length<=4){
        alert("! We ran into a problem. Please try again later.")
    }
    else{
        return true;
    }
}


function validation(){
    if(document.getElementById("pass").value==""){
        alert("Oops, that's not amatch");
        return false;
    }
    
    else{
        return true;
    }
}


function color(){
    if(document.getElementById("pass").value==""){
        document.getElementById("pass1").style.backgroundColor= "lightgray";
        return false;
    }
    
    else if(document.getElementById("pass").value.length>=1){
        document.getElementById("pass1").style.backgroundColor="#385998";
        return false;
    }
    else{
        return true;
    }
}


function passValue(){

    var userName=document.getElementById("user").value;
    localStorage.setItem("userValue",userName);
    return false;
}
document.getElementById("result").innerHTML=localStorage.getItem("userValue");