var appX = angular.module('todoApp', [])

appX.controller('app', function($scope){
    $scope.tasks = [];
    $scope.searchEnter = function(){
        if(event.which == 13 && $scope.task != ''){
            $scope.addTask();
        }
    };
        
    $scope.addTask = function(){
        $scope.tasks.push({'taskMessage':$scope.task, 'status':false});
        console.log($scope.tasks);
        $scope.task = '';
    };
    
    $scope.contentEdit = function(){  
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
    };
    
    $scope.enterAgain = function(msg){
        if(event.which == 13 && msg != ''){
            $scope.contentEdit();
        }
    };
});
