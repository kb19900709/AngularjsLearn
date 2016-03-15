angular.module('kbApp')
    .controller('MainCtrl', ['$log', function($log) {
        var self = this;
        self.user = {
            name: '',
            password: ''
        };
    }]);
