function AdaptiveImageFactory(config) {

    this.breakpoints = config.breakpoints;
    this.hires = config.hires;

    this.whichBreakpoint = function(currentWidth) {

        var currentBreakpoint = null;

        angular.forEach(this.breakpoints, function(breakpointWidth, breakpoint) {

            if (currentWidth >= breakpointWidth) {
                currentBreakpoint = breakpoint;
            }

        });

        return currentBreakpoint;

    };

    this.isHiRes = function() {
        return this.hires;
    };

}

angular.module('app.providers.adaptiveImage', [])
    .provider('adaptiveImage', [function() {
        var config = {
            breakpoints: {
                xs: 0,
                sm: 600,
                md: 768,
                lg: 1025
            },
            hires: false
        };

        this.setBreakpoint = function(breakpoint, width) {
            if (breakpoint && width) {
                config.breakpoints[breakpoint] = width;
            } else {
                return false;
            }
        };

        this.setHires = function(hires) {
            //Using !! to force type cast boolean
            config.hires = !!hires;
        };

        this.$get = function() {
            return new AdaptiveImageFactory(config);
        };
    }]);
