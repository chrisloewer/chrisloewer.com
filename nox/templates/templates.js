(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['comic-items'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"comic-item\">\r\n      <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\"><h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3></a>\r\n      <p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div class=\"comic-container\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.entries : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
templates['image'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\r\n<div class=\"image-container\">\r\n  <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"src","hash":{},"data":data}) : helper)))
    + "\">\r\n</div>\r\n";
},"useData":true});
templates['news-items'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"news-item\">\r\n    <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\"><h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3></a>\r\n    <p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div class=\"news-container\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.entries : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['sources'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "      <div class=\"source-name\">\r\n        <span class=\"fake-link\" onclick=\"delNewsSource("
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"index","hash":{},"data":data}) : helper)))
    + ")\">del - </span>\r\n        "
    + alias1(container.lambda(depth0, depth0))
    + "\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "      <div class=\"source-name\">\r\n        <span class=\"fake-link\" onclick=\"delRedditSource("
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"index","hash":{},"data":data}) : helper)))
    + ")\">del - </span>\r\n        "
    + alias1(container.lambda(depth0, depth0))
    + "\r\n      </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "\r\n<div class=\"source-list\">\r\n\r\n  <div class=\"center-text\">\r\n    <hr class=\"small\">\r\n    <div class=\"fake-link\"><- use arrow keys to navigate -></div>\r\n    <hr class=\"small\">\r\n  </div>\r\n\r\n  <div id=\"_news-list\">\r\n    <h2>News Feeds</h2>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.news : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <input type=\"text\" title=\"Add new news source\" id=\"_add-news-input\">\r\n    <button onclick=\"addNewsSource()\">Add Source</button>\r\n\r\n  </div>\r\n\r\n  <div id=\"_reddit-list\">\r\n    <h2>Reddit Feeds</h2>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.reddit : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <input type=\"text\" title=\"Add new reddit source\" id=\"_add-reddit-input\">\r\n    <button onclick=\"addRedditSource()\">Add Source</button>\r\n  </div>\r\n\r\n  <hr class=\"small\">\r\n\r\n  <button onclick=\"(function() {\r\n    localStorage.clear();\r\n    showSources();\r\n  })()\">Reset Default Sources</button>\r\n\r\n  <hr/>\r\n\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
})();