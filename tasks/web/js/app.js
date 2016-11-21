var app = angular.module('taskspozzod',['ngRoute','ui.grid','ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.cellNav','ui.grid.selection']);
app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
	.when('/opzioni', { 
      controller: 'OpzioniController', 
      templateUrl: 'views/opzioni.html' 
    })
	.when('/opzioni/:opz', { 
      controller: 'OpzioniController', 
      templateUrl: 'views/opzioni.html' 
    })	
    .otherwise({ 
      redirectTo: '/' 
    }); 
}
app.config(app.conf);
app.config(['$httpProvider', function($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);