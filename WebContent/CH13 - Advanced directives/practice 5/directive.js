angular.module('kbApp')
	.directive('validCellPhone', [function(){
		var cellPhoneRegStr = '[0-9]{4}\-[0-9]{3}\-[0-9]{3}';
		var reg = new RegExp(cellPhoneRegStr);
		return {
			require: 'ngModel',
			restrict: 'A',
			link: function($scope, $element, $attr, ngModelCtrl) {
				
				//$setValidity see >>> https://docs.angularjs.org/api/ng/type/ngModel.NgModelController#$setValidity

				/*
				 * DOM -> model 
				 * 檢核 DOM 上的值。
				 * 如果資料是有效的則回傳給解析器，如果無效則回傳 undefined
				 */
				ngModelCtrl.$parsers.unshift(function(viewValue){
					var valid = reg.test(viewValue);
					ngModelCtrl.$setValidity('validCellPhone',valid);
					return valid ? viewValue : undefined;
				});

				/*
				 * model -> DOM
				 * 檢核 model 傳至 DOM 時的值(如從 server 要資料且顯示在畫面上)
				 * 檢核後回傳資料
				 */
				ngModelCtrl.$formatters.unshift(function(modelValue){
					ngModelCtrl.$setValidity('validCellPhone',reg.test(modelValue));
					return modelValue;
				});
			}
		};
	}]);