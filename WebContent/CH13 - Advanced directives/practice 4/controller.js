angular.module('kbApp')
    .controller('MainCtrl', [function() {
    	var self = this;

    	//當前數值 (default 2000)
    	self.selectedValue = 2000;

    	//外部引入數值 (default 4000)
    	self.textValue = 4000;

    	//同步
    	self.changeSelectedValue = function(){
    		self.selectedValue = self.textValue;
    	};
    }]);
