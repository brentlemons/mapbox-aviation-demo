'use strict';

(function() {

  class MainController {

    constructor($http, airports) {
      this.$http = $http;
      this.airports = airports;
      this.apts = [];
    }

    $onInit() {
      var sources = {
        airports: new mapboxgl.GeoJSONSource({
          data: {type: 'FeatureCollection', features:[]}
        })
      };

      mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlbnRsZW1vbnMiLCJhIjoiOWxVeThWbyJ9.iGiQ6rMvAjDXVpyzjRabSg';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/brentlemons/ciqd5imkt0001d1ngbqqzf1bh',
        center: [-98.58333333, 39.83333333],
        zoom: 3
      });
      
      map.on('style.load', function () {
        map.addSource('airports', sources.airports);
        map.addLayer({
          'id': 'airports',
          'type': 'symbol',
          // 'type': 'circle',
          'source': 'airports',
          'interactive': true,
          'layout': {
              'icon-image': '{icon}',
              'icon-allow-overlap': true,
              // 'icon-ignore-placement': true,
              // 'text-field': '{id}',
              // 'text-optional': true,
              // 'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
              // 'text-offset': [0, 0.6],
              // 'text-anchor': 'top'
          // },
          // 'paint': {
          //     'circle-radius': 6,
          //     'circle-color': '#f00',
          //     'circle-opacity': 0.4
          }
        });
      });

      this.airports.list().then(function (airports) {
        sources.airports.setData(airports.data);
      }, function (error) {
          console.log('airports error');
      });
    }
  }

  angular.module('mapboxAviationDemoApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
