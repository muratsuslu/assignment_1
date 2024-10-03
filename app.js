(function(){
'use strict';
angular.module("MainApp",[])
.controller("MainController",MainController);

MainController.$inject = ["$scope"];
function MainController($scope){
    $scope.foodInput = "";
    $scope.totalFoodCount = 0;
    $scope.resultMessage = "";
    $scope.Calculate = function(){
        var resultMessage = "";
        var foodInput = $scope.foodInput;
        if(foodInput == ""){
            resultMessage = "You need to enter something to calculate.";
        }
        else{
            //resultMessage = "Will be calculated."
            var count = foodInput.split(',').length;
            foodInput.split(',').forEach(element => {
                if(element == ""){
                    resultMessage = "Please check your information.";
                    $scope.resultMessage = resultMessage;
                    return;
                }
                else{
                    $scope.totalFoodCount = count;
                    if(count>3){
                        resultMessage = "It is too much for you.";
                    }
                    else{
                        resultMessage = "You know your limits."
                    }
                }
            });

        }
        $scope.resultMessage = resultMessage;
    };
};
})();