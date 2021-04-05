alert('o nome é "eric macedo"')

function contadorDeVogais(palavras){
    let numerdevogais=0
    const vogais='aeiou'
    for (let i = 0 ; i < palavras.length;i++){
        const letra=palavras[i].toLowerCase();
        console.log(vogais.includes(letra))
        if(vogais.includes(letra)){
            numerdevogais++;
        }
    }
    console.log("o total é...",numerdevogais)
}
contadorDeVogais("Eric Macedo de Lira")