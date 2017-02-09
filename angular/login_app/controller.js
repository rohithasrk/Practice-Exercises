var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'login.html'
    })
    .when('/dashboard', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.loggedIn){
                    $location.path('/');
                }
            }
        },
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location, $rootScope){
    $scope.submit = function(){
        var uname = $scope.username;
        var pass = $scope.password;
        if(uname == "admin" && pass == "admin"){
            $rootScope.loggedIn = true;
        }
        $location.path('/dashboard');
    }
});
