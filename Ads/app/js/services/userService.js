'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authentication) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + 'api/user/ads',
                    headers: authentication.getHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + 'api/user/ads',
                    headers: authentication.getHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            deactivateAd: function (id, success, error) {
                // TODO
            },

            publishAgainAd: function (id, success, error) {
                // TODO
            }
        }
    }
);
