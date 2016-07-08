'use strict';

angular.module('mapboxAviationDemoApp')
  .service('airports', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var rootUrl = '/api/airports';

	var returnValue = {
		get: function (id) {
			var promise = $http.get(rootUrl+'/'+id); 
			var deferObject = $q.defer();

			promise.then(
				function(response) {
					deferObject.resolve(response.data);
				},
				function(reason) {
					deferObject.reject(reason);
				}
			);

			return deferObject.promise;
		},

		list: function() {

			var promise = $http.get(rootUrl+'?format=geojson');
			var deferObject = $q.defer();

			promise.then(
				// OnSuccess function
				function(response){
					deferObject.resolve(response);
				},
				// OnFailure function
				function(reason){
					deferObject.reject(reason);
				}
			);

			return deferObject.promise;
		}
	};

	return returnValue;
  });
