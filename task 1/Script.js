
const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown",(e)=>{
    if("0123456789+-*/.".includes(e.key)){
        appendValue(e.key);
    }
    else if(e.key==="Enter"){
        calculate();
    }
    else if(e.key==="Backspace"){
        display.value = display.value.slice(0,-1);
    }
});
</script>

</body>
</html>