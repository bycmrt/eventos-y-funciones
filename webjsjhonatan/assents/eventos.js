var z = function division(x,y)
{
    return x/y
}
function divisionforma2(x,y){
    return x/y
}
z = function divisionforma2(x,y)
{
console.log("El valor de x es"+x)
return x/y
}

function realizarDivision()
{
var num1 = document.getElementById("numerador").value
document.getElementById("dividendo").innerHTML =  z(10,2)
document.getElementById("resdivision2").innerHTML =  divisionforma2(20,5)

}
function eventoCargado()
{
    alert("ya cargue")
}