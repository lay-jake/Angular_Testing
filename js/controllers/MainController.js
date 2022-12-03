app.controller('MainController', ['$scope', function($scope) { 
	//Scope object is like a global object//redux - everything can talk to it so we are adding a list to the scope
	// View (html) sees scope Controllers(JS) act on/modify scope.
  	$scope.list = ["Clean my room", "Jump Around", "Study Angular, Hope for no Typescript","Cry"]


	//Adding function to the scope - it will access the list in scope, then add the item that is in the input field labeled 'addToDo'
	$scope.addItem = function(){
		$scope.list.push($scope.addToDo)
	}

}]);