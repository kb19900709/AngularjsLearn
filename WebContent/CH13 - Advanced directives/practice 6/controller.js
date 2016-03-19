angular.module('kbApp')
    .controller('MainCtrl', [function() {
        var self = this;
        self.user = {
            name: '',
            password: ''
        };
    }]);
