app.service('contatosAPIService', ['$http', function($http) {
    const apiUrl = 'http://localhost:8000/contatos';
    
    return {
        getContato: function(id) {
            return $http.get(`${apiUrl}/${id}`)
        },

        getContatos: function() {
            return $http.get(`${apiUrl}`);
        },
        
        postContato: function(contato) {
            return $http.post(`${apiUrl}`, contato);
        },
        
        deleteContato: function(id) {
            return $http.delete(`${apiUrl}/${id}`);
        }  
    };
}]);