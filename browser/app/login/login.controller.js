app.controller('Login', function($scope, Auth){
	$scope.login = function(){
		Auth.login({email: $scope.email, password: $scope.password});
	}
})