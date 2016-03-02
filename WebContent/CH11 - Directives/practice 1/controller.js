//取得模組實體並建立一個Controller
angular.module('kbApp')
.controller('MainCtrl',[function(){
    var self = this;
    
    self.stocks = [
      {name: 'First Stock', price: 100, previous: 220},
      {name: 'Second Stock', price: 140, previous: 120},
      {name: 'Third Stock', price: 110, previous: 110},
      {name: 'Fourth Stock', price: 400, previous: 420}
    ];
    
    self.getChange = function(stock) {
      return Math.ceil(((stock.price - stock.previous) /
          stock.previous) * 100);
    };
    
    //模板位置 src
    self.repeatTemplate = 'stockTemplate.html';
  }]);