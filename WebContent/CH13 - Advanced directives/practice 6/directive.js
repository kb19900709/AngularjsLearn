angular.module('kbApp')
    .directive('formElementInput', [function() {
        return {
            scope: true,
            require: '^form',
            restrict: 'E',
            compile: function($element, $attr) {
            	//see >>> https://docs.angularjs.org/api/ng/type/form.FormController#$error
            	var errorSupport = {
            		'required' :  'required'
            		,'ng-minlength': 'minlength'
            	};

            	//錯誤訊息鍵值對
            	var validateBox = {};

                var newHtmlStr = '';
                //處理 form-element 基本屬性
                newHtmlStr += '<span>'+$attr.label+'</span>&emsp;'

                var type = $attr.type;
                var name = $attr.name;
                var modelR = $attr.bindTo;
                newHtmlStr += '<input type="' + type 
                			+ '" name="' + name 
                			+ '" ng-model="' + modelR + '"';
                
                //處理基本驗證字串
                var validateDependency = $element.find('validate-dependency');
                if(validateDependency){
                	var validateConditionArray = validateDependency.text().split(',');
                	for(var i=0;i<validateConditionArray.length;i++){
                		newHtmlStr += ' '+validateConditionArray[i];
                	}

                	var validateInfoList = $element.find('validate-info');
                	var validateInfo,dependency;
                	angular.forEach(validateInfoList,function(element){
                		validateInfo = angular.element(element);
                		dependency = validateInfo.attr('dependency');
                		validateBox[errorSupport[dependency]] = validateInfo.text();
                	});
                }

                newHtmlStr += '>';

            	newHtmlStr += '&emsp;';
            	newHtmlStr += '<span ng-repeat="(key,value) in validateBox">';
            	newHtmlStr += '<span ng-bind="value" ng-show="checkError(key)" style="color:red;"/>';
            	newHtmlStr += '</span>';
                $element.html(newHtmlStr);

                return function($scope, $element, $attr, formCtrl) {
                	$scope.validateBox = validateBox;
                	$scope.checkError = function(key){
                		return formCtrl[name]['$error'][key];
                	}
                };
            }
        };
    }]);
