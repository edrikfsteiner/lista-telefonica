app.controller('listaTelefonicaCtrl', ['$scope', 'contatosAPIService', 'operadoras', function($scope, contatosAPIService, operadoras) {
    $scope.contatos = [];
    $scope.operadoras = operadoras.data;

    const loadContatos = () => {
        contatosAPIService.getContatos().then(function(response) {
            $scope.contatos = response.data;
        });
    };

    $scope.addContato = (contato) => {
        contatosAPIService.postContato(contato).then(function() {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            loadContatos();
        });
    };

    $scope.deleteContatos = () => {
        $scope.contatos.forEach(contato => {
            if (contato.selecionado) {
              contatosAPIService.deleteContato(contato.id).then(function() {
                const index = $scope.contatos.indexOf(contato);
                if (index !== -1) {
                  $scope.contatos.splice(index, 1);
                }
              });
            }
        });
    };

    $scope.ordenar = (campo) => {
        $scope.ordenacao = campo;
        $scope.direcao = !$scope.direcao;
    };
    
    $scope.selecionado = "selecionado"

    loadContatos();
}]);