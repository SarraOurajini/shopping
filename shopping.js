


var pizzadd=document.getElementById("pizadd");
var pizznum=document.getElementById("piznum").value ;

var sandadd=document.getElementById("sanad");
var sandnum=document.getElementById("sanum").value;

var tacadd=document.getElementById("tacad");
var tacnum=document.getElementById("tanum").value;


var clicp=false;
var clics=false;
var clict=false;
function addp() {
clicp=true;
var pizznum=document.getElementById("piznum").value ;
alert('you added '+ pizznum +' pizza');
return false;
}

function adds() {
    var sandnum=document.getElementById("sanum").value;
    clics=true;
    alert('you added '+ sandnum +' sandwich');
    return false;
    }
 function addt() {
    var tacnum=document.getElementById("tanum").value;
    clict=true;
    alert('you added '+tacnum+' tacos');
    return false;
        }
function som() {
    var pizznum=document.getElementById("piznum").value ;
    var sandnum=document.getElementById("sanum").value;
    var tacnum=document.getElementById("tanum").value;
    if (clicp===true && clics===true && clict===true) {
        document.getElementById('msg').innerHTML= (15*pizznum+3*sandnum+7*tacnum +'dt')
    }
    else if (clicp===true && clics!==true && clict!==true) {
        document.getElementById('msg').innerHTML= (+(15*pizznum) +'dt')
    }
    else if (clicp!==true && clics===true && clict!==true) {
        document.getElementById('msg').innerHTML= ((3*sandnum) +'dt')
    }
    else if (clicp!==true && clics!==true && clict===true) {
        document.getElementById('msg').innerHTML= ((7*tacnum) +'dt')
    }
    else if (clicp==true && clics==true && clict!==true) {
        document.getElementById('msg').innerHTML= ((15*pizznum +3*sandnum) +'dt')
    }
    else if (clicp==true && clics!==true && clict==true) {
        document.getElementById('msg').innerHTML= ((15*pizznum +7*tacnum) +'dt')
    }
    else if (clicp!==true && clics==true && clict==true) {
        document.getElementById('msg').innerHTML= ((3*sandnum +7*tacnum) +'dt')
    }
    return false;
}

function delp() {
    clicp=false;
    alert('you canceled the pizza purchase')
    return false;
}
function dels() {
    clics=false;
    alert('you canceled the sandwich purchase')
    return false;
}
function delt() {
    clict=false;
    alert('you canceled the tacos purchase')
    return false;
}