// Declare app level module which depends on filters, and services
var udoModule = angular.module('libraryApp', ['ui.bootstrap']);

udoModule.run(['$rootScope', '$location', '$anchorScroll', function($rootScope, $location, $anchorScroll) {
	$rootScope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
	}
}]);
function TestController($scope) {
    $scope.questions = [
        {
            answers: [
                {id : 1, text : 'accordion'},
                {id : 2, text : 'alert'},
                {id : 3, text : 'tooltip'}
            ]
        },

    ];


}