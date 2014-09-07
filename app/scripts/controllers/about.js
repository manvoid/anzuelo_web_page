'use strict';

angular.module('anzueloAppApp')
  .controller('AboutCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Cosa rara de la que quiero hablar'
    ];

    $scope.mensaje = function () {
    	console.log('hola');
    	console.log($location.path());
    	$location.path('/');
    };
  });
