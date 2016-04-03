angular.module('app.directives.adaptiveImage', ['app.services.adaptiveImage', 'adaptiveImageTemplate.html'])
    .directive('adaptiveImg', function() {
        return {
            restrict: 'E',
            scope: {
                alt: '@'
            },
            replace: true,
            controller: ['$scope', function($scope) {
                this.getAlt = function() {
                    return $scope.alt;
                };
            }]
        };
    })
    .directive('adaptiveImgSet', ['adaptiveImageService', function(adaptiveImageService) {
        return {
            require: '^adaptiveImg',
            restrict: 'E',
            scope: {
                breakpoint: '@',
                src: '@'
            },
            templateUrl: 'adaptiveImageTemplate.html',
            link: function($scope, $element, $attr, adaptiveImg) {

                $scope.alt = adaptiveImg.getAlt();
                $scope.hiRes = ('hiRes' in $attr) ? true : false;
                $scope.whichImage = adaptiveImageService.whichImage;

            }
        };
    }]);
