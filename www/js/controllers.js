angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$state', '$cordovaGeolocation', '$locationProperties',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $state, $cordovaGeolocation, $locationProperties) {
 var options = {timeout: 10000, enableHighAccuracy: true};
  var marker;
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("homemap"), mapOptions);
	$locationProperties.setLoc($scope.map.getCenter());
	google.maps.event.addListener($scope.map, 'click', function(event) {
		placeMarker($scope.map.getCenter());
	});
	function placeMarker(location) {
	  if ( marker ) {
		  marker.setPosition(location);
		  $locationProperties.setLoc(location);
	  }else{
	    marker = new google.maps.Marker({
		position: location,
		map: $scope.map,
	  });
	  }
	}
	google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
	      marker = new google.maps.Marker({
		  map: $scope.map,
		  animation: google.maps.Animation.DROP,
		  position: latLng
	  });      
	 
	  var infoWindow = new google.maps.InfoWindow({
		  content: "Here I am!"
	  });
	 
	  google.maps.event.addListener(marker, 'click', function () {
		  infoWindow.open($scope.map, marker);
	  });
	 
	});
 
  }, function(error){
    console.log("Could not get location");
  });

}])
   
.controller('referCtrl', ['$scope', '$state', '$cordovaGeolocation', '$locationProperties', '$http', '$infoProperties',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $cordovaGeolocation, $locationProperties, $http, $infoProperties) {
 var options = {timeout: 10000, enableHighAccuracy: true};
  var marker;
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = $locationProperties.getLoc();
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("refermap"), mapOptions);
	
	google.maps.event.addListener($scope.map, 'click', function(event) {
		placeMarker($scope.map.getCenter());
	});
	function placeMarker(location) {
	  if ( marker ) {
		  marker.setPosition(location);
		  $locationProperties.setLoc(location);
	  }else{
	    marker = new google.maps.Marker({
		position: location,
		map: $scope.map,
	  });
	  }
	}
	google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
	      marker = new google.maps.Marker({
		  map: $scope.map,
		  animation: google.maps.Animation.DROP,
		  position: latLng
	  });      
	 
	  var infoWindow = new google.maps.InfoWindow({
		  content: "Here I am!"
	  });
	 
	  google.maps.event.addListener(marker, 'click', function () {
		  infoWindow.open($scope.map, marker);
	  });
	 
	});
 
  }, function(error){
    console.log("Could not get location");
  });

  $scope.submitForm = function(){
	var latlng = $locationProperties.getLoc();
	var nm = $infoProperties.getNm();
	var lat = latlng.lat();
	var lng = latlng.lng();
    console.log(lat);
	console.log(lng);
	var method = 'POST';
	  var url = 'http://test.appkauhale.com/postReferral.php';
	  $scope.codeStatus = "";
		var data = {
		  lat: lat,
		  lng: lng,
		  nm: nm
		};
		$http({
		  method: method,
		  url: url,
		  data: data,
		  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
		}).
		success(function(response) {
			$scope.codeStatus = response.data;
		}).
		error(function(response) {
			$scope.codeStatus = response || "Request failed";
		});
  }
  $scope.saveInput = function(e){
	  $infoProperties.setNm(e);
  }
}])
   
.controller('kauhaleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
 
}])
      
.controller('resourcesCtrl', ['$scope', '$stateParams', 'ResourceMaps',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ResourceMaps) {
 
	ResourceMaps.init();

}])

.controller('foodCtrl', ['$scope', '$stateParams', 'FoodMaps',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, FoodMaps) {
    FoodMaps.init();

}])

.controller('medicalCtrl', ['$scope', '$stateParams', 'MedicineMaps',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MedicineMaps) {
    
	 MedicineMaps.init();

}])

.controller('shelterCtrl', ['$scope', '$stateParams', 'shelMaps',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, shelMaps) {
    
	 shelMaps.init();

}])

.controller('volunteerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]);


 