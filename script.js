function function1(){
    var a="";
    a=document.getElementById("t1").innerHTML;
    var b="";
    b=document.getElementById("t2").innerHTML;
    document.getElementById("t1").innerHTML=b;
    document.getElementById("t2").innerHTML=a;
}
function toCelsius(f) {
    return ((f-32)*5)/9;
}
function function2(){
    a=parseFloat(document.getElementById('temp1').value);
    document.getElementById('temp2').value = toCelsius(a);
    console.log("hello world");
}
function function3(){
    document.getElementById("temp1").value=0;
    document.getElementById('temp2').value=0;
}