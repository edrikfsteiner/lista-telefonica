app.service('operadorasAPIService', ['$http', function($http) {
  const apiUrl = 'http://localhost:8000/operadoras';

  this.getOperadoras = () => {
    return $http.get(`${apiUrl}`);
  };
}]);