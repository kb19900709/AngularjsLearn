angular.module('kbApp')
    .directive('noUiSlider', [function() {
        return {
            //依賴 ng-model 模組所以自動掛勾 ngModelCtrl
            require: 'ngModel', 
            //宣告為 element
            restrict: 'E',
            link: function($scope, $element, $attr, ngModelCtrl) {

                //初始化元件
                $element.noUiSlider({
                    start: 0,
                    range: {
                        //$attr 預設為字串型態需轉型
                        min: Number($attr.rangeMin),
                        max: Number($attr.rangeMax)
                    } 
                });

                //如果在 ngModelCtrl 改變 model 時，同步改變第三方元件
                ngModelCtrl.$render = function(){
                	$element.val(ngModelCtrl.$viewValue);
                };

                //如果第三方元件在改變數值時，也同步改變由 ngModelCtrl 控制的 model
                $element.on('set',function(args){
                    /*
                     * $apply see >>> https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$apply
                     * 執行完成之後將會觸發 digest 週期
                     */
                	$scope.$apply(function(){
                		ngModelCtrl.$setViewValue($element.val());
                	});
                });
            }
        };
    }]);
