var appX = angular.module('todoApp', [])

appX.controller('app', function($scope){
    var taskData = localStorage['tasksList'];

    if(taskData != undefined){
        $scope.tasks = JSON.parse(taskData);
    }
    else{
        $scope.tasks = [];
        console.log("Unable to parse");
        console.log(taskData);
    }
    
    $scope.searchEnter = function(){
        if(event.which == 13 && $scope.task != ''){
            $scope.addTask();
        }
    };
        
    $scope.addTask = function(){
        $scope.tasks.push({'taskMessage':$scope.task, 'status':false});
        console.log($scope.tasks);
        $scope.task = '';
        localStorage['tasksList'] = JSON.stringify($scope.tasks);
        console.log(localStorage);
    };
    
    $scope.contentEdit = function(msg){  
        console.log($scope.tasks);

        for(i=0;i<$scope.tasks.length;i++){
            if($scope.tasks[i].taskMessage == msg){
                $scope.tasks[i].taskMessage = event.target.innerText;
            }
        }
        
        localStorage['tasksList'] = JSON.stringify($scope.tasks);
    
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
    };
    
    $scope.enterAgain = function(msg){
        if(event.which == 13 && msg != ''){
            $scope.contentEdit(msg);
        }
    };
    
    $scope.statusChange = function(msg){
        localStorage['tasksList'] = JSON.stringify($scope.tasks);
    };
});
