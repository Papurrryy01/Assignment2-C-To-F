function convertTemperature(temperature, scale){
    
    let result;

   switch (scale){
    case "C":
        result = (temperature * 9/5) + 32;
        break;
    case "F":
        result = (temperature - 32) * 5/9;
        break;
    default:
        result = "Invalid scale! Use 'C' or 'F'.";
   }
    return result;
}

function showResult(){
    let temp = document.getElementById("tempInput").value;
    let scale = document.getElementById("scaleInput").value;
    
   // this line is very important: is converting 
   //(tempInput)"string") into an actual number 
   //to do the math correctly
    let converted = convertTemperature(Number(temp), scale);
   // it calls the "converted" number and selected scale ("C", "F") 
    document.getElementById("output").innerHTML = `Converted: ${converted}`;

}