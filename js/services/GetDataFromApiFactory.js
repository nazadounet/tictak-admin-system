app.factory('GetDataFromApiFactory', ['$q', '$http', function ($q, $http) {

    var deferred = $q.defer();

    var factory = {

        getDriverProfil : function (driverIdOrMail) {
            var data = {"dataFromAdminSystem" : driverIdOrMail};
            var jsonData = JSON.stringify(data);

            $http({
                method : 'POST',
                url : 'http://localhost:8888/Api-ti-tak/public/api/v1/getDriverProfil',
                data : jsonData
            })
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.resolve(err);
                });

            return deferred.promise;
        }

    };

    return factory;
}]);