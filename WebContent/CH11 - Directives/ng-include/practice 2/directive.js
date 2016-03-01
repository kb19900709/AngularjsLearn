/*
 * 取得模組實體並建立一個directive
 * angularjs會將 - 轉換成駝峰式寫法
 * 所以在此處定義的 stockWidget 在HTML表示式上會變成 stock-widget
 */
angular.module('kbApp')
.directive('stockWidget',['$log',function($log){
	$log.log('stockWidget called');
	return {
		//模板位置
		templateUrl : 'stockTemplate.html'
		/*
	          'A' - only matches attribute name
	          'E' - only matches element name	PS:不適用於IE8
	          'C' - only matches class name
	          'M' - only matches comment
	        */
		,restrict : 'AE'
		/*
	          false : 繼承父範疇所有資訊，可修改父範疇內容 (default)
	          true  : 繼承父範疇所有資訊，不可修改父範疇內容
	          object: 建立獨立範疇，若有資料交換需求透過html的屬性傳遞
	                  = json格式
	                  @ 字串
	                  & 函式
	        */
		,scope : {
            		//在此範疇新增物件 stockData & 綁定屬性 stock-data，屬性格式為 json
			stockData : '='
		}
	        /*
	          固定寫法 link : function($scope,$element,$attrs){}
	          此directive的範疇、元件、屬性皆定義在此做操作
	        */
		,link : function($scope,$element,$attrs){
			$scope.getChange = function(stock) {
				return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
			};
		}
	}
}]);
