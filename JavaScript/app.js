function convertidorTemperatura() {
    magnitudObtenida = document.getElementById("magnitudObtenida").value;
    magnitudConvertir = document.getElementById("magnitudConvertir").value;
    opc1 = parseInt(magnitudConvertir);
    opc1 = parseInt(magnitudObtenida);
    temperatura = document.getElementById("temperatura").value;
    temperatura = parseFloat(temperatura);
    switch(true){
        case magnitudObtenida==0:
            if(magnitudConvertir==0){
                resultado=temperatura;
            }else if(magnitudConvertir==1){
                resultado=(temperatura+32)*1.8;
            }else if(magnitudConvertir==2){
                resultado=temperatura+274.15;
            }else if(magnitudConvertir==3){
                resultado=(temperatura+273.15)*1.8;
            }
        break;
        case magnitudObtenida==1:
            if(magnitudConvertir==0){
                resultado=(temperatura-32)/1.8;
            }else if(magnitudConvertir==1){
                resultado=temperatura;
            }else if(magnitudConvertir==2){
                resultado=(temperatura+ 459.67)*5/9;
            }else if(magnitudConvertir==3){
                resultado=temperatura+459.67;
            }
        break;
        case magnitudObtenida==2:
            if(magnitudConvertir==0){
                resultado=temperatura-274.15;
            }else if(magnitudConvertir==1){
                resultado=temperatura*1.8-459.67;
            }else if(magnitudConvertir==2){
                resultado=temperatura;
            }else if(magnitudConvertir==3){
                resultado=temperatura*1.8;
            }
        case magnitudObtenida==3:
            if(magnitudConvertir==0){
                resultado=(temperatura-491.67)*(5/9);
            }else if(magnitudConvertir==1){
                resultado=temperatura-459.67;
            }else if(magnitudConvertir==2){
                resultado=temperatura*(5/9);
            }else if(magnitudConvertir==3){
                resultado=temperatura;
            }
        default:
            break;
    }
    document.getElementById("resultado").value=resultado;
    
}
function convertidorFC(temperatura) {
    document.getElementById("resultado").innerHTML = (valNum-32) / 1.8;
}
function convertidorCF(temperatura) {
    temperatura = parseFloat(temperatura);
    document.getElementById("resultado").innerHTML = (temperatura+32)*1.8;
}