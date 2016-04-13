export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.3",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 21,
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
      dom.setAttribute(el1,"id","calendar");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"href","#modal-box--open");
      var el2 = dom.createTextNode("Open Modal Box");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","modal-box--open");
      dom.setAttribute(el1,"class","modal-box");
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","#modal-box--close");
      dom.setAttribute(el2,"class","modal-box__overlay");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n            ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","modal-box__content");
      var el3 = dom.createTextNode("\n                        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"href","#modal-box--close");
      dom.setAttribute(el3,"class","modal-box--close");
      var el4 = dom.createTextNode("Close Modal Box");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                                ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h2");
      var el4 = dom.createTextNode("Modal Box");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                                        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("p");
      var el4 = dom.createTextNode("Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n                                            ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","title");
      var el2 = dom.createTextNode("Title:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n     ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n         \n         ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","event");
      var el2 = dom.createTextNode("Event:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n             ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n                 ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Date must ISO string: Ex. 2015-07-25");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n                     \n                     ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"class","btn btn-primary");
      var el2 = dom.createTextNode("+ Add New Event");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n                         \n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [16]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,8,8,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,12,12,contextualElement);
      morphs[2] = dom.createElementMorph(element0);
      return morphs;
    },
    statements: [
      ["inline","input",[],["id","title","class","form-control","value",["subexpr","@mut",[["get","eventTitle",["loc",[null,[13,51],[13,61]]]]],[],[]],"placeholder","Enter event title"],["loc",[null,[13,5],[13,95]]]],
      ["inline","input",[],["id","event","class","form-control","value",["subexpr","@mut",[["get","newEvent",["loc",[null,[16,59],[16,67]]]]],[],[]],"placeholder","Enter a new event date"],["loc",[null,[16,13],[16,106]]]],
      ["element","action",["addEvent"],[],["loc",[null,[19,48],[19,69]]]]
    ],
    locals: [],
    templates: []
  };
}()));