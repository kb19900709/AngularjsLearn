/*
 * 取得模組實體並建立一個Controller
 * 相較於上一個範例少了模板位置以及模板相依函式
 */
angular.module('kbApp')
.controller('MainCtrl',[function(){
	
    var self = this;
    
    self.stocks = [
      {name: 'First Stock', price: 100, previous: 220},
      {name: 'Second Stock', price: 140, previous: 120},
      {name: 'Third Stock', price: 110, previous: 110},
      {name: 'Fourth Stock', price: 400, previous: 420}
    ];
    
  }]);