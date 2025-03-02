var app = angular.module("calculatorApp", []);

app.controller("CalculatorController", function ($scope) {
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.result = 0;

    $scope.calculate = function (operator) {
        switch (operator) {
            case '+':
                $scope.result = $scope.num1 + $scope.num2;
                break;
            case '-':
                $scope.result = $scope.num1 - $scope.num2;
                break;
            case '*':
                $scope.result = $scope.num1 * $scope.num2;
                break;
            case '/':
                $scope.result = $scope.num2 !== 0 ? $scope.num1 / $scope.num2 : "Cannot divide by zero";
                break;
        }
    };
});
