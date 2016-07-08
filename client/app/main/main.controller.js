'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlbnRsZW1vbnMiLCJhIjoiOWxVeThWbyJ9.iGiQ6rMvAjDXVpyzjRabSg';
      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/brentlemons/ciqd5imkt0001d1ngbqqzf1bh',
          center: [-98.58333333, 39.83333333],
          zoom: 3
      });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('mapboxAviationDemoApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
