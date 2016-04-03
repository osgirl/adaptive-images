describe('adaptiveImageService', function() {

    describe('whichImage - Low Res', function() {
        it('should return an object specifying hires: false and breakpoint: xs ', function() {

            module('app.services.adaptiveImage');

            var adaptiveImageService, $window;

            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 360;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'xs', hires: false};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });

        it('should return an object specifying hires: false and breakpoint: sm', function() {

            module('app.services.adaptiveImage');

            var adaptiveImageService, $window;

            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 600;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'sm', hires: false};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });


        it('should return an object specifying hires: false and breakpoint: md', function() {

            module('app.services.adaptiveImage');

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 768;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'md', hires: false};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });


        it('should return an object specifying hires: false and breakpoint: lg', function() {

            module('app.services.adaptiveImage');

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 1025;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'lg', hires: false};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });

        it('should return an object specifying hires: false and the custom breakpoint: xl', function() {

            module('app.services.adaptiveImage', function(adaptiveImageProvider) {
                adaptiveImageProvider.setBreakpoint('xl', 2000);
            });

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 2000;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'xl', hires: false};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });

        it('should update the breakpoint on $window innerWidth change', function() {

            module('app.services.adaptiveImage');

            var adaptiveImageService, $rootScope, $window;

            inject(function(_$window_, _$rootScope_) {
                $rootScope = _$rootScope_;
                $window = _$window_;
                $window.innerWidth = 360;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'xs', hires: false};
            var expectedResult2 = { breakpoint: 'sm', hires: false};

            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

            $window.innerWidth = 600;
            $rootScope.$apply();

            expect(adaptiveImageService.whichImage).toEqual(expectedResult2);

        });
    });

    describe('whichImage - High Res', function() {
        it('should return an object specifying hires: true and breakpoint: xs ', function() {

            module('app.services.adaptiveImage', function(adaptiveImageProvider) {
                adaptiveImageProvider.setHires(true);
            });

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 360;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'xs', hires: true};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });

        it('should return an object specifying hires: true and breakpoint: sm', function() {

            module('app.services.adaptiveImage', function(adaptiveImageProvider) {
                adaptiveImageProvider.setHires(true);
            });

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 600;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'sm', hires: true};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });


        it('should return an object specifying hires: true and breakpoint: md', function() {

            module('app.services.adaptiveImage', function(adaptiveImageProvider) {
                adaptiveImageProvider.setHires(true);
            });

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 768;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'md', hires: true};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });


        it('should return an object specifying hires: true and breakpoint: lg', function() {

            module('app.services.adaptiveImage', function(adaptiveImageProvider) {
                adaptiveImageProvider.setHires(true);
            });

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 1025;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'lg', hires: true};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });

        it('should return an object specifying hires: true and the custom breakpoint: xl', function() {

            module('app.services.adaptiveImage', function(adaptiveImageProvider) {
                adaptiveImageProvider.setBreakpoint('xl', 2000);
                adaptiveImageProvider.setHires(true);
            });

            var adaptiveImageService, $window;
            inject(function(_$window_) {
                $window = _$window_;
                $window.innerWidth = 2000;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'xl', hires: true};
            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

        });


        it('should update the breakpoint on $window innerWidth change', function() {

            module('app.services.adaptiveImage', function(adaptiveImageProvider) {
                adaptiveImageProvider.setHires(true);
            });

            var adaptiveImageService, $rootScope, $window;

            inject(function(_$window_, _$rootScope_) {
                $rootScope = _$rootScope_;
                $window = _$window_;
                $window.innerWidth = 360;
            });

            inject(function(_adaptiveImageService_) {
                adaptiveImageService = _adaptiveImageService_;
            });

            var expectedResult = { breakpoint: 'xs', hires: true};
            var expectedResult2 = { breakpoint: 'sm', hires: true};

            expect(adaptiveImageService.whichImage).toEqual(expectedResult);

            $window.innerWidth = 600;
            $rootScope.$apply();

            expect(adaptiveImageService.whichImage).toEqual(expectedResult2);

        });

    });

});
