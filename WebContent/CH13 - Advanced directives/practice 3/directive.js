var kbApp = angular.module('kbApp');

kbApp.directive('tabs', ['$log', function($log) {
    $log.log('tabs directive init');
    return {
        //宣告為element模式
        restrict: 'E',
        //樣板url
        templateUrl: 'tabTemplate.html',
        //宣告為transclude模式
        transclude: true,
        //宣告為繼承父類別但是不覆蓋的自我範疇
        scope: true,
        /*
         * 與子 directive 通訊使用controller
         * 注入 scope 如同 link的用法
         * 若使用 this 則可提供子 directive 存取
         */
        controller: ['$scope', function($scope) {
            var self = this;
            $scope.tabs = [];

            //子元件可使用
            self.registeredTab = function(title, scope) {
                if ($scope.tabs.length == 0) {
                    scope.selected = true;
                } else {
                    scope.selected = false;
                }
                $scope.tabs.push({ 'title': title, 'scope': scope });
            };

            //僅在此 scope 可使用
            $scope.tabsClick = function(index) {
                for (var i = 0; i < $scope.tabs.length; i++) {
                    var tab = $scope.tabs[i];
                    if (i == index) {
                        tab.scope.selected = true;
                    } else {
                        tab.scope.selected = false;
                    }
                }
            };
        }]
    };
}]);

kbApp.directive('tab', ['$log', function($log) {
    $log.log('tab directive init');
    return {
    	//宣告為element模式
        restrict: 'E',
        //樣板直述
        template: '<div ng-transclude></div>',
        //宣告為transclude模式
        transclude: true,
        //宣告為繼承父類別但是不覆蓋的自我範疇
        scope: true,
        /*
         * no prefix : 同一層級
         * ? : 選擇性內容
         * ^ : 父類別
         * 可混用
         */
        require: '^tabs',
        /*
         * 基礎 link 為 function($scope, $element, $attr)
         * 在此注入第四個引數 ctrl (需要有 require 掛勾)
         */
        link: function($scope, $element, $attr, ctrl) {
            ctrl.registeredTab($attr.title, $scope);
        }
    };
}]);
