angular.module('kbApp')
    .directive('formElementInput', ['$log',function($log) {
        return {
            scope: true,
            require: '^form',
            restrict: 'E',
            compile: function($element, $attr) {
            	//see >>> https://docs.angularjs.org/api/ng/type/form.FormController#$error
            	var errorSupport = {
            		'required' :  'required'
            		,'ng-minlength': 'minlength'
                    //可在這邊繼續增加更多的實作
            	};

            	//錯誤訊息鍵值對
            	var validateBox = {};

            	//dynamic html element str
                var newHtmlStr = '';

                var label = $attr.label;
                var type = $attr.type;
                var name = $attr.name;
                var modelR = $attr.bindTo;

                //處理 form-element-input 基本屬性
                if(label){
                	newHtmlStr += '<span>'+label+'</span>&emsp;'
                }

                //動態組裝 element 屬性
                newHtmlStr += '<input type="' + type 
                			+ '" name="' + name 
                			+ '" ng-model="' + modelR + '"';
                
                //處理基本驗證字串
                var validateDependency = $element.find('validate-dependency');
                if(validateDependency){
                	//angular.forEach see >>> https://docs.angularjs.org/api/ng/function/angular.forEach

                	var validateConditionArray = validateDependency.text().split(',');
                	//動態組裝驗證屬性
                	angular.forEach(validateConditionArray,function(validateStr){
						newHtmlStr += ' '+validateStr;
                	});

                	var validateInfoList = $element.find('validate-info');
                	var validateInfo,dependency;
                	angular.forEach(validateInfoList,function(element){
                		//轉成 angular 元件
                		validateInfo = angular.element(element);
                		dependency = validateInfo.attr('dependency');
                		//組裝validateBox
                		validateBox[errorSupport[dependency]] = validateInfo.text();
                	});
                }

                newHtmlStr += '>';

                $log.log('formElementInput dynamic generator >>> '+newHtmlStr);

                //錯誤訊息處理
            	newHtmlStr += '&emsp;';
            	newHtmlStr += '<span ng-repeat="(key,value) in validateBox">';
            	newHtmlStr += '<span ng-bind="value" ng-show="checkError(key)" style="color:red;"/>';
            	newHtmlStr += '</span>';

            	//把組合字串輸出成html格式至該$element
                $element.html(newHtmlStr);

                //回傳一個標準的 link 函式，組合需要用到的變數或是函式至該 scope 
                return function($scope, $element, $attr, formCtrl) {
                	$scope.validateBox = validateBox;
                	$scope.checkError = function(key){
                		return formCtrl[name]['$error'][key];
                	}
                };
            }
        };
    }]);
