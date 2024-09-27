app.config(function($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function(contatosAPIService) {
                return contatosAPIService.getContatos();
            },
            operadoras: function(operadorasAPIService) {
                return operadorasAPIService.getOperadoras();
            }
        }
    });

    $routeProvider.when("/novo-contato", {
        templateUrl: "view/new-contato.html",
        controller: "newContatoCtrl",
        resolve: {
            operadoras: function(operadorasAPIService) {
                return operadorasAPIService.getOperadoras();
            }
        }
    });

    $routeProvider.when("/detalhes-contato/:id", {
        templateUrl: "view/detalhes-contato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function(contatosAPIService, $route) {
                return contatosAPIService.getContato($route.current.params.id);
            }
        }
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo: "/contatos"})
});