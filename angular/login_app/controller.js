var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'login.html'
    })
    .when('/dashboard', {
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location){
    $scope.submit = function(){
        var uname = $scope.uname;
        var password = $scope.password;
        if(uname == 'admin' && password == 'admin'){
            $location.path('/dashboard');
        }
    }
})
