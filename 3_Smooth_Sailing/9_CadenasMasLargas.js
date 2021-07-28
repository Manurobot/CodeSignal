
allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);

function allLongestStrings(inputArray) {

    let cadena = inputArray.reduce((a, b) => a.length > b.length ? a : b, '');
    let cadenas_mas_largas = [];

    for(var i=0; i<inputArray.length; i++)
    {
        if(cadena.length == inputArray[i].length)
        {   
            cadenas_mas_largas.push(inputArray[i]);
        }
    }
    console.log(cadenas_mas_largas);
    return cadenas_mas_largas;
}



