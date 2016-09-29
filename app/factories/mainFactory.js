mainModule.factory('MainFactory', MainFactory);

    MainFactory.$inject = [];

    function MainFactory() {

        var self = this;

        self.details = [];
        self.get = $http.get('data/data.json')
                .then(function (response) {
                    self.details = response.data;
                }).catch(function (error) {
                    // log error
                });

        return self;
    }