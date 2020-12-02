var Parser = require("jison").Parser;

window.run = () =>
{
    var grammerText = document.getElementById("grammer").value;
    var parser = new Parser(grammerText);
    var inputText = document.getElementById("input").value;
    var output = parser.parse(inputText);

    document.getElementById("output").innerHTML = output;
}

window.addEventListener('DOMContentLoaded', (event) => {
    var client = new XMLHttpRequest();
    client.open('GET', 'grammer.jison');
    client.onreadystatechange = function()
    {
        document.getElementById("grammer").value = client.responseText;
        document.getElementById("input").value = "5 + 6";
    }
    client.send();
});