describe('AdaptiveImageDirective', function() {

    var stub = ['<adaptive-img alt="A responsive image">',
                    '<adaptive-img-set breakpoint="xs" src="xs-1x.jpg"></adaptive-img-set>',
                    '<adaptive-img-set breakpoint="sm" src="sm-1x.jpg"></adaptive-img-set>',
                    '<adaptive-img-set breakpoint="md" src="md-1x.jpg"></adaptive-img-set>',
                    '<adaptive-img-set breakpoint="lg" src="lg-1x.jpg"></adaptive-img-set>',
                    '<adaptive-img-set breakpoint="xs" hi-res src="xs-2x.jpg"></adaptive-img-set>',
                    '<adaptive-img-set breakpoint="sm" hi-res src="sm-2x.jpg"></adaptive-img-set>',
                    '<adaptive-img-set breakpoint="md" hi-res src="md-2x.jpg"></adaptive-img-set>',
                    '<adaptive-img-set breakpoint="lg" hi-res src="lg-2x.jpg"></adaptive-img-set>',
                '</adaptive-img>'].join();

    it('should show only a single image', function() {
        var $rootScope, $compile;

        module('app.directives.adaptiveImage');

        inject(function(_$rootScope_, _$compile_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
        });

        var $element = $compile(stub)($rootScope);
        $rootScope.$apply();

        var imgTags = $element.find('img');

        expect(imgTags.length).toEqual(1);

    });

    describe('Low Res', function() {
        var $rootScope, $compile, $window, $element;

        beforeEach(module('app.directives.adaptiveImage'));

        beforeEach(inject(function(_$rootScope_, _$compile_, _$window_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $window = _$window_;

            $element = $compile(stub)($rootScope);
        }));

        it('should show an xs non retina image', function() {
            $window.innerWidth = 360;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('xs-1x.jpg');
        });

        it('should show an sm non retina image', function() {
            $window.innerWidth = 600;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('sm-1x.jpg');
        });

        it('should show the md non retina image', function() {
            $window.innerWidth = 768;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('md-1x.jpg');
        });


        it('should show the lg non retina image', function() {
            $window.innerWidth = 1025;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('lg-1x.jpg');
        });

    });

    describe('High Res', function() {
        var $rootScope, $compile, $window, $element;

        beforeEach(module('app.providers.adaptiveImage', function(adaptiveImageProvider) {
            adaptiveImageProvider.setHires(true);
        }));

        beforeEach(module('app.directives.adaptiveImage'));

        beforeEach(inject(function(_$rootScope_, _$compile_, _$window_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $window = _$window_;

            $element = $compile(stub)($rootScope);
        }));

        it('should show the xs retina image', function() {
            $window.innerWidth = 360;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('xs-2x.jpg');
        });

        it('should show the sm retina image', function() {
            $window.innerWidth = 600;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('sm-2x.jpg');
        });

        it('should show the md retina image', function() {
            $window.innerWidth = 768;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('md-2x.jpg');
        });


        it('should show the lg retina image', function() {
            $window.innerWidth = 1025;
            $rootScope.$apply();

            var imgTag = $element.find('img');
            expect(imgTag.attr('src')).toEqual('lg-2x.jpg');
        });

    });
});
