app.controller('newContatoCtrl', ['$scope', '$location', 'contatosAPIService', 'operadoras', function($scope, $location, contatosAPIService, operadoras) {
    $scope.operadoras = operadoras.data;

    $scope.addContato = (contato) => {
        contatosAPIService.postContato(contato).then(function() {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos")
        });
    };
}]);