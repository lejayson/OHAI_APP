angular.module('app.factories', [])

.factory('ResourceMaps', function($cordovaGeolocation, Markers){
  var apiKey = false;
  var map = null;
 
  function initMap(){
    var options = {timeout: 10000, enableHighAccuracy: true};
 
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
 
      map = new google.maps.Map(document.getElementById("resourcemap"), mapOptions);
 
      //Wait until the map is loaded
      google.maps.event.addListenerOnce(map, 'idle', function(){
 
        //Load the markers
        loadMarkers();
 
      });
 
    }, function(error){
      console.log("Could not get location");
 
        //Load the markers
        loadMarkers();
    });
 
  }
 
  function loadMarkers(){
      //Get all of the markers from our Markers factory
      Markers.getMarkers().then(function(markers){
        console.log("Markers: ", markers);
        var records = markers.data.markers;
        for (var i = 0; i < records.length; i++) {
          console.log("Length: ",records.length);
          var record = records[i];   
          var markerPos = new google.maps.LatLng(record.lat, record.lng);
          // Add the markerto the map
          var marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: markerPos
          });
 
          var infoWindowContent = "<h4>" + record.name + "</h4>";          
 
          addInfoWindow(marker, infoWindowContent, record);
 
        }
 
      }); 
  }
 
  function addInfoWindow(marker, message, record) {
 
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });
 
      google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(map, marker);
      });
 
  }
 
  return {
    init: function(){
      initMap();
    }
  }
 
})

.factory('Markers', function($http) {
	
  var markers = [];
 
  return {
    getMarkers: function(){
		
      return $http.get("http://test.appkauhale.com/allmarkers.php").then(function(response){
          markers = response;
          return markers;
      });
    }
  }
})

.factory('FoodMaps', function($cordovaGeolocation, FoodMarkers){
  var apiKey = false;
  var map = null;
 
  function initMap(){
    var options = {timeout: 10000, enableHighAccuracy: true};
 
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
 
      map = new google.maps.Map(document.getElementById("resourcemap"), mapOptions);
 
      //Wait until the map is loaded
      google.maps.event.addListenerOnce(map, 'idle', function(){
 
        //Load the markers
        loadMarkers();
 
      });
 
    }, function(error){
      console.log("Could not get location");
 
        //Load the markers
        loadMarkers();
    });
 
  }
 
  function loadMarkers(){
      //Get all of the markers from our Markers factory
      FoodMarkers.getMarkers().then(function(markers){
        console.log("Markers: ", markers);
        var records = markers.data.markers;
        for (var i = 0; i < records.length; i++) {
          console.log("Length: ",records.length);
          var record = records[i];   
          var markerPos = new google.maps.LatLng(record.lat, record.lng);
          // Add the markerto the map
          var marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: markerPos
          });
 
          var infoWindowContent = "<h4>" + record.name + "</h4>";          
 
          addInfoWindow(marker, infoWindowContent, record);
 
        }
 
      }); 
  }
 
  function addInfoWindow(marker, message, record) {
 
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });
 
      google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(map, marker);
      });
 
  }
 
  return {
    init: function(){
      initMap();
    }
  }
 
})

.factory('FoodMarkers', function($http) {
	
  var markers = [];
 
  return {
    getMarkers: function(){
		
      return $http.get("http://test.appkauhale.com/foodmarkers.php").then(function(response){
          markers = response;
          return markers;
      });
    }
  }
})

.factory('MedicineMaps', function($cordovaGeolocation, MedMarkers){
  var apiKey = false;
  var map = null;
 
  function initMap(){
    var options = {timeout: 10000, enableHighAccuracy: true};
 
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
 
      map = new google.maps.Map(document.getElementById("resourcemap"), mapOptions);
 
      //Wait until the map is loaded
      google.maps.event.addListenerOnce(map, 'idle', function(){
 
        //Load the markers
        loadMarkers();
 
      });
 
    }, function(error){
      console.log("Could not get location");
 
        //Load the markers
        loadMarkers();
    });
 
  }
 
  function loadMarkers(){
      //Get all of the markers from our Markers factory
      MedMarkers.getMarkers().then(function(markers){
        console.log("Markers: ", markers);
        var records = markers.data.markers;
        for (var i = 0; i < records.length; i++) {
          console.log("Length: ",records.length);
          var record = records[i];   
          var markerPos = new google.maps.LatLng(record.lat, record.lng);
          // Add the markerto the map
          var marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: markerPos
          });
 
          var infoWindowContent = "<h4>" + record.name + "</h4>";          
 
          addInfoWindow(marker, infoWindowContent, record);
 
        }
 
      }); 
  }
 
  function addInfoWindow(marker, message, record) {
 
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });
 
      google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(map, marker);
      });
 
  }
 
  return {
    init: function(){
      initMap();
    }
  }
 
})

.factory('MedMarkers', function($http) {
	
  var markers = [];
 
  return {
    getMarkers: function(){
		
      return $http.get("http://test.appkauhale.com/medmarkers.php").then(function(response){
          markers = response;
          return markers;
      });
    }
  }
})

.factory('shelMaps', function($cordovaGeolocation, shelMarkers){
  var apiKey = false;
  var map = null;
 
  function initMap(){
    var options = {timeout: 10000, enableHighAccuracy: true};
 
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
 
      map = new google.maps.Map(document.getElementById("resourcemap"), mapOptions);
 
      //Wait until the map is loaded
      google.maps.event.addListenerOnce(map, 'idle', function(){
 
        //Load the markers
        loadMarkers();
 
      });
 
    }, function(error){
      console.log("Could not get location");
 
        //Load the markers
        loadMarkers();
    });
 
  }
 
  function loadMarkers(){
      //Get all of the markers from our Markers factory
      shelMarkers.getMarkers().then(function(markers){
        console.log("Markers: ", markers);
        var records = markers.data.markers;
        for (var i = 0; i < records.length; i++) {
          console.log("Length: ",records.length);
          var record = records[i];   
          var markerPos = new google.maps.LatLng(record.lat, record.lng);
          // Add the markerto the map
          var marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: markerPos
          });
 
          var infoWindowContent = "<h4>" + record.name + "</h4>";          
 
          addInfoWindow(marker, infoWindowContent, record);
 
        }
 
      }); 
  }
 
  function addInfoWindow(marker, message, record) {
 
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });
 
      google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(map, marker);
      });
 
  }
 
  return {
    init: function(){
      initMap();
    }
  }
 
})

.factory('shelMarkers', function($http) {
	
  var markers = [];
 
  return {
    getMarkers: function(){
		
      return $http.get("http://test.appkauhale.com/shelmarkers.php").then(function(response){
          markers = response;
          return markers;
      });
    }
  }
})


/**.factory('FeedLoader', function ($resource){
  return $resource('https://ajax.googleapis.com/ajax/services/feed/load', {}, {
    fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
  });
})


// Factory for node-pushserver (running locally in this case), if you are using other push notifications server you need to change this
.factory('NodePushServer', function ($http){
  // Configure push notifications server address
  // 		- If you are running a local push notifications server you can test this by setting the local IP (on mac run: ipconfig getifaddr en1)
  var push_server_address = "http://192.168.1.102:8000";

  return {
    // Stores the device token in a db using node-pushserver
    // type:  Platform type (ios, android etc)
    storeDeviceToken: function(type, regId) {
      // Create a random userid to store with it
      var user = {
        user: 'user' + Math.floor((Math.random() * 10000000) + 1),
        type: type,
        token: regId
      };
      console.log("Post token for registered device with data " + JSON.stringify(user));

      $http.post(push_server_address+'/subscribe', JSON.stringify(user))
      .success(function (data, status) {
        console.log("Token stored, device is successfully subscribed to receive push notifications.");
      })
      .error(function (data, status) {
        console.log("Error storing device token." + data + " " + status);
      });
    },
    // CURRENTLY NOT USED!
    // Removes the device token from the db via node-pushserver API unsubscribe (running locally in this case).
    // If you registered the same device with different userids, *ALL* will be removed. (It's recommended to register each
    // time the app opens which this currently does. However in many cases you will always receive the same device token as
    // previously so multiple userids will be created with the same token unless you add code to check).
    removeDeviceToken: function(token) {
      var tkn = {"token": token};
      $http.post(push_server_address+'/unsubscribe', JSON.stringify(tkn))
      .success(function (data, status) {
        console.log("Token removed, device is successfully unsubscribed and will not receive push notifications.");
      })
      .error(function (data, status) {
        console.log("Error removing device token." + data + " " + status);
      });
    }
  };
})


.factory('AdMob', function ($window){
  var admob = $window.AdMob;

  if(admob)
  {
    // Register AdMob events
    // new events, with variable to differentiate: adNetwork, adType, adEvent
    document.addEventListener('onAdFailLoad', function(data){
      console.log('error: ' + data.error +
      ', reason: ' + data.reason +
      ', adNetwork:' + data.adNetwork +
      ', adType:' + data.adType +
      ', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
    });
    document.addEventListener('onAdLoaded', function(data){
      console.log('onAdLoaded: ' + data);
    });
    document.addEventListener('onAdPresent', function(data){
      console.log('onAdPresent: ' + data);
    });
    document.addEventListener('onAdLeaveApp', function(data){
      console.log('onAdLeaveApp: ' + data);
    });
    document.addEventListener('onAdDismiss', function(data){
      console.log('onAdDismiss: ' + data);
    });

    var defaultOptions = {
      // bannerId: admobid.banner,
      // interstitialId: admobid.interstitial,
      // adSize: 'SMART_BANNER',
      // width: integer, // valid when set adSize 'CUSTOM'
      // height: integer, // valid when set adSize 'CUSTOM'
      position: admob.AD_POSITION.BOTTOM_CENTER,
      // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
      bgColor: 'black', // color name, or '#RRGGBB'
      // x: integer,		// valid when set position to 0 / POS_XY
      // y: integer,		// valid when set position to 0 / POS_XY
      isTesting: true, // set to true, to receiving test ad for testing purpose
      // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
    };
    var admobid = {};

    if(ionic.Platform.isAndroid())
    {
      admobid = { // for Android
        banner: 'ca-app-pub-6869992474017983/9375997553',
        interstitial: 'ca-app-pub-6869992474017983/1657046752'
      };
    }

    if(ionic.Platform.isIOS())
    {
      admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
      };
    }

    admob.setOptions(defaultOptions);

    // Prepare the ad before showing it
    // 		- (for example at the beginning of a game level)
    admob.prepareInterstitial({
      adId: admobid.interstitial,
      autoShow: false,
      success: function(){
        console.log('interstitial prepared');
      },
      error: function(){
        console.log('failed to prepare interstitial');
      }
    });
  }
  else
  {
    console.log("No AdMob?");
  }

  return {
    showBanner: function() {
      if(admob)
      {
        admob.createBanner({
          adId:admobid.banner,
          position:admob.AD_POSITION.BOTTOM_CENTER,
          autoShow:true,
          success: function(){
            console.log('banner created');
          },
          error: function(){
            console.log('failed to create banner');
          }
        });
      }
    },
    showInterstitial: function() {
      if(admob)
      {
        // If you didn't prepare it before, you can show it like this
        // admob.prepareInterstitial({adId:admobid.interstitial, autoShow:autoshow});

        // If you did prepare it before, then show it like this
        // 		- (for example: check and show it at end of a game level)
        admob.showInterstitial();
      }
    },
    removeAds: function() {
      if(admob)
      {
        admob.removeBanner();
      }
    }
  };
})

.factory('iAd', function ($window){
  var iAd = $window.iAd;

  // preppare and load ad resource in background, e.g. at begining of game level
  if(iAd) {
    iAd.prepareInterstitial( { autoShow:false } );
  }
  else
  {
    console.log("No iAd?");
  }

  return {
    showBanner: function() {
      if(iAd)
      {
        // show a default banner at bottom
        iAd.createBanner({
          position:iAd.AD_POSITION.BOTTOM_CENTER,
          autoShow:true
        });
      }
    },
    showInterstitial: function() {
      // ** Notice: iAd interstitial Ad only supports iPad.
      if(iAd)
      {
        // If you did prepare it before, then show it like this
        // 		- (for example: check and show it at end of a game level)
        iAd.showInterstitial();
      }
    },
    removeAds: function() {
      if(iAd)
      {
        iAd.removeBanner();
      }
    }
  };
})*/



;
