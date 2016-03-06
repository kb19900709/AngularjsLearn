angular.module('kbApp')
.directive('stockWidget',['$log',function($log){
	$log.log('stockWidget called');
	return {
		/*
		 * 若在此 directive 加入內文會完整複製
		 * 然後插入 template or templateUrl 中的 ng-transclude
		 */
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