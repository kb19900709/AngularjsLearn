angular.module('kbApp')
.directive('stockWidget',['$log',function($log){
	$log.log('stockWidget called');
	return {
		transclude : true
		,templateUrl : 'stockTemplate.html'
		,restrict : 'AE'
		,scope : {
			stockData : '=' 	
			,stockIndex : '@'	
			,stockChange : '&'
		}
		,link : function($scope,$element,$attrs){
			$scope.getChange = function(stock) {
				return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
			};
			
			$scope.changeStock = function(){
				$scope.stockChange({
					index : $scope.stockIndex
					,price : 500
					,previous : 400
				});
			};
		}
	};
}]);