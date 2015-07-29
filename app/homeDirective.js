app.directive('dirDisplay', function () {
    return {
        templateUrl: 'app/newTmpl.html',
        link: function (scope, element, attrs) {
            console.log(scope);
            element.on('click', function () {
                scope.apply();
            })
        }
    };
});