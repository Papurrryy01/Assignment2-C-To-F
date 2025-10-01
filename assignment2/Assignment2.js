function convertToF(){
    let Celsius = document.getElementById("celsiusInput").value;
    if (Celsius === "")
        
    document.getElementById("result").innerText = "Please enter a value.";
    
    
    let Fahrenheit = (Celsius * 9/5) + 32;

    document.getElementById("result").innerText = Fahrenheit.toFixed(1) + " °F"

}