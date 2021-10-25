function calcularIMC()
{
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    
    let imc = weight / (height * height);
    let result = imc.toFixed(2) + " " + rangeIMC(imc);
    document.getElementById("result").innerHTML = "Seu IMC é: " + result;
}


function rangeIMC(imc)
{
    let imcText;
    if(imc < 18.5)
    {
        imcText = "abaixo do normal";
    }
    else if((imc >= 18.5) && (imc < 25))
    {
        imcText =  "normal";
    }
    else if((imc >= 25) && (imc < 30))
    {
        imcText = "sobrepeso";
    }
    else if((imc >= 30) && (imc < 40))
    {
        imcText = "obesidade"
    }
    else if(imc >= 40)
    {
        imcText = "obesidade grave";
    }

    return imcText;
}


function clearValue()
{
    document.getElementById("height").value = 0;
    document.getElementById("weight").value = 0;
    document.getElementById("result").innerHTML = " ";
}