angular.module('app.services.adaptiveImage', ['app.providers.adaptiveImage'])
    .service('adaptiveImageService', ['adaptiveImage', '$window', '$rootScope', function(adaptiveImage, $window, $rootScope) {

        var _this = this;

        _this.whichImage = {};

        _this.whichImage.breakpoint = adaptiveImage.whichBreakpoint($window.innerWidth);
        _this.whichImage.hires = adaptiveImage.isHiRes();

        $rootScope.$watch(function() {

            return $window.innerWidth;
        }, function(newValue, oldValue) {

            _this.whichImage.breakpoint = adaptiveImage.whichBreakpoint(newValue);
        });

    }]);
