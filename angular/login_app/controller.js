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
        var uname = $scope.username;
        var pass = $scope.password;
        if(uname == "admin" && pass == "admin"){
            $location.path('/dashboard');
        }
        else{
            console.log('Invalid credentials');
        }
    }
});
