function cleardisplay(){
    document.getElementById("display").value="";
}
function appendvalue(value)
{
    document.getElementById("display").value+=value;
}

function calculate()
{
      let result=document.getElementById("display").value
      document.getElementById("display").value=eval(result)

}
