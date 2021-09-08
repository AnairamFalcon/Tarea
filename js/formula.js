
function formula() {
    var a,b,c,totalp,totaln, tx1,tx2;
    a=document.getElementById("x2").value;
    b=document.getElementById("x").value;
    c=document.getElementById("c").value;
    totalp=((parseFloat(-b))+Math.pow(((Math.pow(parseFloat(b),2))-(4*parseFloat(a)*parseFloat(c))),(1/2)))/(2*parseFloat(a));
    totalm=((parseFloat(-b))-Math.pow(((Math.pow(parseFloat(b),2))-(4*parseFloat(a)*parseFloat(c))),(1/2)))/(2*parseFloat(a));

    if(isNaN(a)||isNaN(b)||isNaN(c)){ //Is not a number, los valores de los inputs
        txt1="Te faltó un número reina"
    }else{
        totalp=((parseFloat(-b))+Math.pow(((Math.pow(parseFloat(b),2))-(4*parseFloat(a)*parseFloat(c))),(1/2)))/(2*parseFloat(a));
        totaln=((parseFloat(-b))-Math.pow(((Math.pow(parseFloat(b),2))-(4*parseFloat(a)*parseFloat(c))),(1/2)))/(2*parseFloat(a));
        tx1="x1: " +totalp;
        tx2="x2: "+totaln;
    }

    document.getElementById("total").innerHTML=tx1;
    document.getElementById("total2").innerHTML=tx2;
}

//var a=1;
//var b=-5;
//var c=6;

