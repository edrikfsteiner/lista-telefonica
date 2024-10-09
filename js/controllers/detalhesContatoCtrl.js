app.controller('detalhesContatoCtrl', ['$scope', '$routeParams', 'contato', function($scope, $routeParams, contato) {
    $scope.contato = contato.data;
}]);