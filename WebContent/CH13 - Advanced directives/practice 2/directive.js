angular.module('kbApp')
.directive('simulationRepeat',['$log',function($log){
	$log.log('simulationRepeat called');
	return {
		/*
		 * 替換整個元素內容 
		 * see >>> http://stackoverflow.com/questions/18449743/angularjs-when-to-use-transclude-true-and-transclude-element
		 */
		transclude : 'element'
		,restrict : 'A'
		//此 directive 的範疇、呈現的元素、此元素的屬性、directive controller、transclusion函式
		,link : function($scope,$element,$attrs,ctrl,$transclude){
			//透過$eval函式，從該scope取得attribute simulationRepeat (此處傳進的是ctrl的陣列)
			var inputArray = $scope.$eval($attrs.simulationRepeat);
			//建立一個容器
			var container = angular.element('<div></div>');
			for(var i=0;i<inputArray.length;i++){
				//產生新的元素，以及產生新的子範疇($scope.$new())以及定義子範疇上使用的物件
				var newInstance = $transclude($scope.$new(),function(clonedElement ,newScope){
					newScope.stock = inputArray[i];
					newScope.currentIndex = i;
				});
				//加入新的實體
				container.append(newInstance);
			}
			//在該 directive 上加入此容器，如果沒有這一行指令則會呈現空白
			$element.after(container);
		}
	};
}]);