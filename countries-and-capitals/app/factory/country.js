// Factory
angular.module('myApp')
	.factory('Country', ['$http', function($http) {
 		
 		function Country(data){
 			this.init(data);
 		}

 		Country.prototype.init = function (data){
 			angular.extend(this, data);
 		}

 		Country.prototype.save = function(){
 			console.log(this);
 		}


 		return Country;

	}]) 