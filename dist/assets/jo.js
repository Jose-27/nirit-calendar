"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('jo/app', ['exports', 'ember', 'jo/resolver', 'ember-load-initializers', 'jo/config/environment'], function (exports, _ember, _joResolver, _emberLoadInitializers, _joConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _joConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _joConfigEnvironment['default'].podModulePrefix,
    Resolver: _joResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _joConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('jo/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'jo/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _joConfigEnvironment) {

  var name = _joConfigEnvironment['default'].APP.name;
  var version = _joConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('jo/components/full-calendar', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        _initializeCalendar: (function () {

            var date = new Date(),
                d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear(),
                calendar = $('#calendar');
            return calendar.fullCalendar({
                header: {
                    left: 'prev, next today',
                    center: 'title',
                    right: 'month, agendaWeek,agendaDay'
                },
                defaultview: 'month',
                selectable: true,
                slotMinutes: 15,
                defaultEventMinutes: 45,
                selectHelper: true,
                select: function select(start, end, allDay) {
                    var title = prompt('Event Title:');

                    if (title) {
                        calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay
                        }, true);
                    }
                    calendar.fullCalendar('unselect');
                },
                editable: true
            });
        }).on('didInsertElement')
    });
});
define('jo/components/login-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    loggedIn: (function () {
      return true;
    }).on('didInsertElement'),
    reset: function reset() {
      this.setProperties({
        username: "",
        password: "",
        errorMessage: ""
      });
    },

    login: function login() {

      var self = this,
          data = this.getProperties('username', 'password');

      // Clear out any error messages.
      this.set('errorMessage', null);

      _ember['default'].$.post('/auth.json', data).then(function (response) {

        self.set('errorMessage', response.message);
        if (response.success) {
          // Save the token and transition to where originally intended.
          self.set('token', response.token);
        }
      });
    }
  });
});
define('jo/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('jo/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('jo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('jo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('jo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jo/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _joConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_joConfigEnvironment['default'].APP.name, _joConfigEnvironment['default'].APP.version)
  };
});
define('jo/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('jo/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('jo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('jo/initializers/export-application-global', ['exports', 'ember', 'jo/config/environment'], function (exports, _ember, _joConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_joConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _joConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_joConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('jo/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('jo/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('jo/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("jo/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('jo/models/quote', ['exports'], function (exports) {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var QuoteSchema = new Schema({
        quote: String,
        author: String
    });

    module.exports = mongoose.model('Quote', QuoteSchema);
});
define('jo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('jo/router', ['exports', 'ember', 'jo/config/environment'], function (exports, _ember, _joConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _joConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('jo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("jo/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 7,
                "column": 6
              }
            },
            "moduleName": "jo/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "alert alert-error");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "errorMessage", ["loc", [null, [6, 39], [6, 55]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 4
            }
          },
          "moduleName": "jo/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "login-form", ["loc", [null, [4, 6], [4, 20]]]], ["block", "if", [["get", "errorMessage", ["loc", [null, [5, 12], [5, 24]]]]], [], 0, null, ["loc", [null, [5, 6], [7, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "jo/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "full-calendar", ["loc", [null, [2, 6], [2, 23]]]], ["block", "if", [["get", "ergbieurg", ["loc", [null, [3, 10], [3, 19]]]]], [], 0, null, ["loc", [null, [3, 4], [8, 11]]]], ["content", "outlet", ["loc", [null, [9, 0], [9, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("jo/templates/components/full-calendar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "jo/templates/components/full-calendar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "small-calendar");
        dom.setAttribute(el1, "class", "small-calendar");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "calendar");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("jo/templates/components/login-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 60,
            "column": 0
          }
        },
        "moduleName": "jo/templates/components/login-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("<form class=\"form-inline\" {{action login on=\"submit\"}}>\n  <h2>Log In</h2>\n  {{input value=username type=\"text\" placeholder=\"Username\"}}\n  {{input value=password type=\"password\" placeholder=\"Password\"}}\n  {{input class=\"btn\" type=\"submit\" value=\"Log In\"}}\n</form>");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "box");
        var el2 = dom.createTextNode("\n  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Login");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "action", "");
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Login ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "login-form");
        var el4 = dom.createTextNode("\n      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "username");
        var el5 = dom.createTextNode("Username");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "id", "username");
        dom.setAttribute(el4, "placeholder", "Username");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "password");
        var el5 = dom.createTextNode("Password");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "id", "password");
        dom.setAttribute(el4, "placeholder", "Password");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Register ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "register-form");
        var el4 = dom.createTextNode("\n      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "first-name");
        var el5 = dom.createTextNode("First Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "disabled", "");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "id", "first-name");
        dom.setAttribute(el4, "placeholder", "First Name");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "last-name");
        var el5 = dom.createTextNode("Last Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "disabled", "");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "id", "last-name");
        dom.setAttribute(el4, "placeholder", "Last Name");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "email");
        var el5 = dom.createTextNode("E-mail Adress");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "disabled", "");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "id", "email");
        dom.setAttribute(el4, "placeholder", "E-mail Address");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "confirm-email");
        var el5 = dom.createTextNode("Confirm E-mail Address");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "disabled", "");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "id", "confirm-email");
        dom.setAttribute(el4, "placeholder", "Confirm E-mail Address");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "captcha");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "captcha");
        var el6 = dom.createTextNode("What is ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("10 + 3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "disabled", "");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "id", "captcha");
        dom.setAttribute(el5, "placeholder", "Your answer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Submit ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "id", "submit");
        dom.setAttribute(el3, "value", "Login");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Help ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "register.htm");
        dom.setAttribute(el3, "class", "register");
        var el4 = dom.createTextNode("Register!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        dom.setAttribute(el3, "class", "forgot-password");
        dom.setAttribute(el3, "title", "Forgot password?");
        var el4 = dom.createTextNode("Forgot?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('jo/config/environment', ['ember'], function(Ember) {
  var prefix = 'jo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("jo/app")["default"].create({"name":"jo","version":"0.0.0+9cfef1d4"});
}

/* jshint ignore:end */
//# sourceMappingURL=jo.map