angular.module('kbApp')
.directive('simulationRepeat',['$log',function($log){
	$log.log('simulationRepeat called');
	return {
		transclude : 'element'
		,restrict : 'A'
		,link : function($scope,$element,$attrs,ctrl,$transclude){
			var inputArray = $scope.$eval($attrs.simulationRepeat);
			var container = angular.element('<div></div>');
			for(var i=0;i<inputArray.length;i++){
				var newInstance = $transclude($scope.$new(),function(clonedElement ,newScope){
					newScope.stock = inputArray[i];
					newScope.currentIndex = i;
				});
				container.append(newInstance);
			}
			$element.after(container);
		}
	};
}]);