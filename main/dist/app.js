"use strict";

var _routes = require("./lib/Router/routes.js");
document.addEventListener('DOMContentLoaded', function () {
  //NOTE: Handle navigation
  document.addEventListener('click', function (event) {
    var isAnchor = event.target.nodeName === 'A';
    if (!isAnchor) {
      return;
    }
    event.preventDefault();
    var path = event.target.getAttribute('href');
    _routes.router.goTo(path);
    (0, _routes.renderRoute)(path);
  }, true);
});