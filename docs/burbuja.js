function ordenarPorBurbuja(arrayDesordenado) {
    
    var tempArray = arrayDesordenado;
    var volverAOrdenar = false;
    
    tempArray.forEach(function (valor, key) {
        
        if (tempArray[key] > tempArray[key + 1] && tempArray.length - 1 != key) {
           
            var primerNum = tempArray[key];
            var segundoNum = tempArray[key + 1];
            tempArray[key] = segundoNum;
            tempArray[key + 1] = primerNum;
            // Si debe volver a ordenarlo
            volverAOrdenar = true;
        }
    });
    // Vuelve a llamar al función
    if (volverAOrdenar) {
        ordenarPorBurbuja(tempArray);
    }
    
    return tempArray;
}


//Para funcionar (consola) se usa el siguiente comando: ordenarPorBurbuja([numeros seguidos por , ]);