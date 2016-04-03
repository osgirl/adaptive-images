describe('adaptiveImageProvider', function() {
    'use strict';

    it('should return an instance of imageFactory', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        expect(typeof adaptiveImage).toBe('object');
    });

    it('should return the breakpoint as null', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        var breakpoint = adaptiveImage.whichBreakpoint(-1);

        expect(breakpoint).toBe(null);
    });

    it('should return the xs breakpoint', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        var breakpoint = adaptiveImage.whichBreakpoint(0);

        expect(breakpoint).toBe('xs');
    });

    it('should return the sm breakpoint', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        var breakpoint = adaptiveImage.whichBreakpoint(600);

        expect(breakpoint).toBe('sm');
    });

    it('should return the md breakpoint', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        var breakpoint = adaptiveImage.whichBreakpoint(768);

        expect(breakpoint).toBe('md');
    });


    it('should return the lg breakpoint', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        var breakpoint = adaptiveImage.whichBreakpoint(1025);

        expect(breakpoint).toBe('lg');
    });


    it('should return the custom xl breakpoint', function() {

        module('app.providers.adaptiveImage', function(adaptiveImageProvider) {
            adaptiveImageProvider.setBreakpoint('xl', 2000);
        });

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        var breakpoint = adaptiveImage.whichBreakpoint(2000);

        expect(breakpoint).toBe('xl');
    });


    it('should match the TalkTalk breakpoints by default', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        expect(adaptiveImage.breakpoints.xs).toEqual(0);
        expect(adaptiveImage.breakpoints.sm).toEqual(600);
        expect(adaptiveImage.breakpoints.md).toEqual(768);
        expect(adaptiveImage.breakpoints.lg).toEqual(1025);

    });


    it('should take configurable breakpoints', function() {

        module('app.providers.adaptiveImage', function(adaptiveImageProvider) {
            adaptiveImageProvider.setBreakpoint('xs', 320);
            adaptiveImageProvider.setBreakpoint('sm', 500);
            adaptiveImageProvider.setBreakpoint('md', 600);
            adaptiveImageProvider.setBreakpoint('lg', 1000);
            adaptiveImageProvider.setBreakpoint('xl', 2000);
        });

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        expect(adaptiveImage.breakpoints.xs).toEqual(320);
        expect(adaptiveImage.breakpoints.sm).toEqual(500);
        expect(adaptiveImage.breakpoints.md).toEqual(600);
        expect(adaptiveImage.breakpoints.lg).toEqual(1000);
        expect(adaptiveImage.breakpoints.xl).toEqual(2000);

    });

    it('should reject poorly crafted breakpoints', function() {
        var badBreakpoint;

        module('app.providers.adaptiveImage', function(adaptiveImageProvider) {
            badBreakpoint = adaptiveImageProvider.setBreakpoint(null, null);
        });

        inject();

        expect(badBreakpoint).toBeFalsy();
    });

    it('should not be running in hi-resolution mode by default', function() {

        module('app.providers.adaptiveImage');

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        expect(adaptiveImage.isHiRes()).toBeFalsy();
    });

    it('should be running in hi-resolution mode', function() {

        module('app.providers.adaptiveImage', function(adaptiveImageProvider) {
            adaptiveImageProvider.setHires(true);
        });

        var adaptiveImage;

        inject(function(_adaptiveImage_) {
            adaptiveImage = _adaptiveImage_;
        });

        expect(adaptiveImage.isHiRes()).toBeTruthy();
    });


});
