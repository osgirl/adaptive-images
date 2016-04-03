angular.module("adaptiveImageTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("adaptiveImageTemplate.html",
    "<img ng-if=\"whichImage.breakpoint === breakpoint && whichImage.hires === hiRes\" ng-src=\"{{src}}\" alt=\"{{alt}}\" class=\"img-responsive\">");
}]);
