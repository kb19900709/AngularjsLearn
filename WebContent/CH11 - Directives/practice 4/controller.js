angular.module('kbApp')
.controller('MainCtrl',[function(){
	
    var self = this;
    
    self.stocks = [
      {name: 'First Stock', price: 100, previous: 220},
      {name: 'Second Stock', price: 140, previous: 120},
      {name: 'Third Stock', price: 110, previous: 110},
      {name: 'Fourth Stock', price: 400, previous: 420}
    ];
    
    //設定一個函式提供 custom directive 呼叫
    self.changeDataByIndex = function(index,price,previous){
    	self.stocks[index].price = price;
    	self.stocks[index].previous = previous;
    };
    
    self.changeAllStocks = function(){
    	for(var i = 0;i<self.stocks.length;i++){
    		self.stocks[i] = {
    				name:'change all (controller)'
    					,price:200
    					,previous : 150
    		};
    	}
    };
    
    self.changeTheFirst = function(){
    	self.stocks[0] = {
    			name:'first change (controller)'
					,price:100
					,previous : 50
    	};
    };
  }]);