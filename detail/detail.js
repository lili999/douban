(function () {
    var detailModule=angular.module("detailModule",['doubanApp.service']);
    detailModule.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when("/detail/:movieId",{
            templateUrl:"detail/detail.html",
            controller:'detailController'
        })
    }])
    detailModule.controller("detailController",["$scope",'jsonpService','$routeParams',function ($scope,jsonpService,$routeParams) {
        var id =$routeParams.movieId;
        var address="https://api.douban.com/v2/movie/subject/"+id;
        jsonpService.jsonp(address,{},function (res) {
            $scope.movie=res;
            $scope.$apply();
        })
    }])
})();
