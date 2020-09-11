(function () {
    'use strict'
angular.module('LunchCheck', [])
    .controller('LunchCheckController', Controller);
    Controller.$inject =['$scope'];

    function Controller($scope) {
        $scope.users_input = '';
        $scope.message = '';
        $scope.style =  '';
        $scope.styleOfBorder = '';


        $scope.createMessage = function () {
            if ($scope.users_input == '') {
                $scope.message="Please enter data first"
                $scope.style =  { "background-color": "red" };
                $scope.styleOfBorder = { "border": "solid 4px Crimson" };


            }
            else {
                var arrayOfFood = $scope.users_input.split(",");
                var newArray=[];
                console.log(arrayOfFood)
                for (var i = 0; i<arrayOfFood.length; i++){
                    if (arrayOfFood[i]!="" && arrayOfFood[i]!=" ") {
                        newArray[i]=arrayOfFood[i];
                    }
                }
                console.log("New " + newArray.length)
                if (newArray.length > 3) {
                    $scope.message="Too much!"
                    $scope.style =  { "background-color": "green" };
                    $scope.styleOfBorder = { "border": "solid 4px YellowGreen" };

                }
                else if (newArray.length <= 3 && newArray.length!=0) {
                    $scope.message="Enjoy!"
                    $scope.style =  { "background-color": "green" };
                    $scope.styleOfBorder = { "border": "solid 4px YellowGreen" };
                }
                else {
                    $scope.message="Please enter data first.  " +
                        "I do NOT consider and empty item, i.e., , , as an item towards to the count."
                    $scope.style =  { "background-color": "red" };
                    $scope.styleOfBorder = { "border": "solid 4px Crimson" };

                }
            }
        }
    }
})()