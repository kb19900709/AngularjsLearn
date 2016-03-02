angular.module('kbApp')
.directive('stockWidget',['$log',function($log){
	$log.log('stockWidget called');
	return {
		templateUrl : 'stockTemplate.html'
		,restrict : 'AE'
		,scope : {
			stockData : '='
		}
		,link : function($scope,$element,$attrs){
			$scope.getChange = function(stock) {
				return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
			};
			
			//改變當前 scope stockData 的資料
			$scope.changeStock = function(){
				$scope.stockData = {
						name:'directive change'
							,price:500
							,previous : 450	
				};
			};
		}
	};
}]);