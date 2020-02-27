var app = angular.module('app', []);

function mainController($scope, $http) {
    $scope.formData = {};
    console.log($scope.formData)
    console.log(formData)

	// Cuando se cargue la página, pide del API todos los TODOs
	$http.get('/messages')
		.success(function(data) {
			$scope.messages = data;
			console.log(data)
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// Cuando se añade un nuevo TODO, manda el texto a la API
	$scope.createMessage = function(){
		$http.post('/message', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.messages = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error:' + data);
			});
	};
}