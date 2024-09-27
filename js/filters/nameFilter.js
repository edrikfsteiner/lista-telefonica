app.filter("name", function() {
    return function(input) {
        if (!input) {
            return "";
        }
        let listaDeNomes = input.split(" ");
        let listaDeNomesFormat = listaDeNomes.map(function(nome) {
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        
        return listaDeNomesFormat.join(" ");
    };
});