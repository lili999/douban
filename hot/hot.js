(function () {

    var hotModule = angular.module('doubanApp.hotModule', ['doubanApp.service']);
    hotModule.controller('hotController', ['$scope', 'jsonpService', '$routeParams', '$route', '$rootScope', function ($scope, jsonpService, $routeParams, $route, $rootScope) {
        $rootScope.curl = $routeParams.curl;
        //搜索功能
        $rootScope.search = function () {
            $route.updateParams({curl: 'search', hah: $rootScope.input})
        };
        //定义每一页请求的数据
        var count = 10;
//得到当前页
        var currentPage = parseInt($routeParams.page || 1);
        $scope.currentPage = currentPage;
        var start = (currentPage - 1) * count;
//跨域请求豆瓣数据
        jsonpService.jsonp('https://api.douban.com/v2/movie/' + $routeParams.curl, {
            count: count,
            start: start,
            q: $routeParams.hah
        }, function (res) {
            $scope.hotjson = res.subjects;
            $scope.title = res.title;
            //获取总共多少条数据
            $scope.total = res.total;
            console.log($scope.total);
            //得到页数
            $scope.totalPage = Math.ceil($scope.total / count);
            //点击调用的方法
            $scope.go = function (page) {

                if (page < 1 || page > $scope.totalPage) {
                    return;
                }
                //更改路由的参数  $route
                $route.updateParams({page: page});

            };
            //刷新界面上的数据
            $scope.$apply();
        });


    }])

})();
