angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'pages/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'pages/about.html',
        controller: 'referCtrl'
      }
    }
  })

  .state('menu.resources', {
    url: '/resources',
    views: {
      'side-menu21': {
        templateUrl: 'pages/resources.html',
        controller: 'kauhaleCtrl'
      }
    }
  })
  
  .state('menu.volunteer', {
    url: '/volunteer',
    views: {
      'side-menu21': {
        templateUrl: 'pages/volunteer.html',
        controller: 'kauhaleCtrl'
      }
    }
  })
  
  .state('menu.events', {
    url: '/events',
    views: {
      'side-menu21': {
        templateUrl: 'pages/events.html',
        controller: 'kauhaleCtrl'
      }
    }
  })
  
  .state('menu.contact', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'pages/contact.html',
        controller: 'kauhaleCtrl'
      }
    }
  })
  
  .state('menu.refer', {
    url: '/refer',
    views: {
      'side-menu21': {
        templateUrl: 'pages/refer.html',
        controller: 'kauhaleCtrl'
      }
    }
  })
  
  

  .state('menu', {
    url: '/kauhale',
    templateUrl: 'pages/menu.html',
    abstract:true
  })
  
  
  
 
$urlRouterProvider.otherwise('/kauhale/home')

  

});