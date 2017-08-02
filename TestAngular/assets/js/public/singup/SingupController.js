angular.module('SingupModule.controllers',[ ]).controller('SingupController',['$scope',function($scope){
	/*$scope.user={
		name:'student name'
	}*/

	$scope.singupFormSubmit=function(){
		console.log('entramos a form');
	}

}]);

/*
var myApp = angular.module('myApp',[]);∫

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);*/