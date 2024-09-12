let app = angular.module('listaTelefonica', []);

app.controller('listaTelefonicaCtrl', ['$scope', function($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "João", telefone: "1234567890"},
        {nome: "Maria", telefone: "9876543210"},
        {nome: "Ana", telefone: "5555555555"},
        {nome: "Carlos", telefone: "4444444444"}
    ];
    $scope.addContato = function(contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };
}]);