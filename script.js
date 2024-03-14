// Retorna o nome da key pressionada (em QWERTY)
function inputFunction(event) {
    let key = event.code;
    document.getElementById("input").innerHTML = key;
}
