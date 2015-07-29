app.directive("dirWeather", function () {
    return {
        templateUrl: 'app/dirWeather.html',
        scope: {
            currentUser: '='
        }
    }
});