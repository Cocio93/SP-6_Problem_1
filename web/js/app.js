var app = angular.module('viewApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/allPersons", {
                templateUrl: "views/allPersons.html",
                controller: "PersonController"
            })
            .when("/newPerson", {
                templateUrl: "views/newPerson.html",
                controller: "PersonController"
            })
            .otherwise({
                redirectTo: "views/allPersons.html"
            });
});

app.controller('PersonController', ['$scope', function ($scope) {
        var self = this;
        self.persons = [];
        
        $scope.persons = [
            {id: 1, name: "Jens", age: 18}
            , {id: 2, name: "Peter", age: 23}
            , {id: 3, name: "Hanne", age: 23}
        ];

        $scope.addPerson = function (name, age) {
            var id = $scope.persons.length + 1;
            var obj = {id: id, name: name, age: age};
            console.log(obj);
            self.persons.push(obj);
            return false;
        };
    }]);



