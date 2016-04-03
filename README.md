[![Code Climate](https://codeclimate.com/github/talktalkplc/adaptive-images/badges/gpa.svg)](https://codeclimate.com/github/talktalkplc/adaptive-images)
[![Build Status](https://travis-ci.org/talktalkplc/adaptive-images.svg?branch=master)](https://travis-ci.org/talktalkplc/adaptive-images)

# TalkTalk Adaptive Images

The purpose of this module is to replicate the functionality of the HTML5 <picture> tag
until such a time that it is available in all browsers.

## Installation

To install

```
bower install talktalplc/adaptive-images --save
```

You can then reference it within your application using **app.adaptiveImage**

## Configuration

Whilst this module supports retina and non-retina images, it does not feature detect,
however it has been built to work with your existing feature detection library (we use [Modernizr Retina Test]).

The example below will show you how to configure this module with the [Modernizr Retina Test].

```javascript
angular.module('myApp', [])
    .config(['adaptiveImageProvider', function(adaptiveImageProvider){
        adaptiveImageProvider.setHires( Modernizr.hires );
    }]);
```

By Default, it is configured to work with the TalkTalk breakpoints, these are:
- xs: 0px -> 599px
- sm: 600px -> 768px
- md: 768px -> 1024px
- lg: 1025px +

You can however easily configure it for your own breakpoints.

```javascript
angular.module('myApp', [])
    .config(['adaptiveImageProvider', function(adaptiveImageProvider){
        adaptiveImageProvider.setBreakpoint('xs', 0);
        adaptiveImageProvider.setBreakpoint('sm', 768);
        adaptiveImageProvider.setBreakpoint('md', 992);
        adaptiveImageProvider.setBreakpoint('lg', 1200);
    }]);
```

If you've got any non-bootstrap 3 standard breakpoints, you can also set them in the config

```javascript
angular.module('myApp', [])
    .config(['adaptiveImageProvider', function(adaptiveImageProvider){
        adaptiveImageProvider.setBreakpoint('xl', 2000);
    }]);
```
[Modernizr Retina Test]: https://github.com/joaocunha/modernizr-retina-test

## Use

For each breakpoint you wish an image to show at, simply add an **adaptive-img-set**.
You can specify the difference between a non-retina and retina image by adding the **hi-res** attribute.

```html
<adaptive-img alt="A responsive image">
    <adaptive-img-set breakpoint="xs" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=xs-1x&w=350&h=150"></adaptive-img-set>
    <adaptive-img-set breakpoint="sm" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=sm-1x&w=350&h=150"></adaptive-img-set>
    <adaptive-img-set breakpoint="md" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=md-1x&w=350&h=150"></adaptive-img-set>
    <adaptive-img-set breakpoint="lg" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=lg-1x&w=350&h=150"></adaptive-img-set>
    <adaptive-img-set breakpoint="xs" hi-res src="https://placeholdit.imgix.net/~text?txtsize=33&txt=xs-2x&w=700&h=300"></adaptive-img-set>
    <adaptive-img-set breakpoint="sm" hi-res src="https://placeholdit.imgix.net/~text?txtsize=33&txt=sm-2x&w=700&h=300"></adaptive-img-set>
    <adaptive-img-set breakpoint="md" hi-res src="https://placeholdit.imgix.net/~text?txtsize=33&txt=md-2x&w=700&h=300"></adaptive-img-set>
    <adaptive-img-set breakpoint="lg" hi-res src="https://placeholdit.imgix.net/~text?txtsize=33&txt=lg-2x&w=700&h=300"></adaptive-img-set>
</adaptive-img>
```
