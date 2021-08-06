var serviceApp = angular.module("serviceApp", []);

serviceApp.factory('MathService', ['$log', '$q', function ($log, $q) {
    $log.info("Inside service")
    var math = {};
    math.checkEvenNo = function (no) {
        $log.info("Inside func")
        return $q(function (resolve, reject) {
            if (no % 2 == 0) {
                resolve("It is an even no");
                return;
            }
            resolve("It is an odd no");
        })
    }
    return math;
}])

serviceApp.controller('EvenController', ['$scope', 'MathService', function ($scope, MathService) {
    $scope.checkEven = function () {
        if ($scope.inputNo != "") {
            MathService.checkEvenNo($scope.inputNo).then(function (result) {
                console.log(result);
            })
        }
    }
}]);

