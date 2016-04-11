/**
 * @author Milad Naseri (mmnaseri@programmer.net)
 * @since 1.0 (4/9/16)
 */
var module = angular.module("Site", ["ngRoute", "ui.bootstrap", "ui.bootstrap.tpls", "ui.router"]);
module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html"
        })
        .state('readme', {
            url: "/readme",
            templateUrl: "views/readme.html"
        })
        .state('roadmap', {
            url: "/roadmap",
            templateUrl: "views/roadmap.html"
        })
        .state('changelog', {
            url: "/changelog",
            templateUrl: "views/changelog.html"
        });
    $urlRouterProvider.otherwise("/home");
}]);
module.directive('table', function () {
    return {
        restrict: "E",
        link: function ($scope, $element) {
            $element.addClass('table');
        }
    }
});
module.directive('code', function () {
    return {
        restrict: "E",
        link: function ($scope, $element) {
            if ($element[0].parentNode.nodeName.toLowerCase() == 'pre') {
                angular.element($element[0].parentNode).addClass('hljs');
            } else {
                $element.addClass('inline');
            }
        }
    }
});