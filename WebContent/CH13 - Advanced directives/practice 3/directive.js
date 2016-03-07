var kbApp = angular.module('kbApp');

kbApp.directive('tabs',['$log',function($log){
	$log.log('tabs directive init');
	return {
		restrict : 'E'
		,templateUrl : 'stockTemplate.html'
		,transclude : true
		,scope : true
		,controller : ['$scope',function($scope){
			var self = this;
			$scope.tabs = [];
			
			self.registeredTab = function(title,scope){
				if($scope.tabs.length == 0){
					scope.selected = true;
				}else{
					scope.selected = false;
				}
				$scope.tabs.push({'title':title,'scope':scope});
			};
			
			$scope.tabsClick = function(index){
				for(var i=0;i<$scope.tabs.length;i++){
					var tab = $scope.tabs[i];
					$log.log(tab);
					if(i==index){
						tab.scope.selected = true;
					}else{
						tab.scope.selected = false;
					}
				}
			};
		}]
	};
}]);

kbApp.directive('tab',['$log',function($log){
	$log.log('tab directive init');
	return {
		restrict : 'E'
		,template : '<div ng-transclude></div>'
		,transclude : true
		,scope : true
		,require : '^tabs'
		,link : function($scope,$element,$attr,ctrl){
			ctrl.registeredTab($attr.title,$scope);
		}
	};
}]);