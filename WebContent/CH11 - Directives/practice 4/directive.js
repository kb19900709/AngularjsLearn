angular.module('kbApp')
.directive('stockWidget',['$log',function($log){
	$log.log('stockWidget called');
	return {
		templateUrl : 'stockTemplate.html'
		,restrict : 'AE'
		,scope : {
			stockData : '=' 	//json
			,stockIndex : '@'	//string
			,stockChange : '&'	//function
		}
		,link : function($scope,$element,$attrs){
			$scope.getChange = function(stock) {
				return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
			};
			
			$scope.changeStock = function(){
				/*
				 * 透過stockChange(function)的引用呼叫controller的函式
				 * 此範例指向 controller 的 changeDataByIndex
				 */
				$scope.stockChange({
					index : $scope.stockIndex
					,price : 500
					,previous : 400
				});
			};
		}
	};
}]);