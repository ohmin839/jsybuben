define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Editor.html",
    "dojo/dom",
    "dojo/on",
    "jsybuben/jsybuben"
], function(declare, _WidgetBase, _TemplatedMixin, template,
            dom, on, jsybuben)
{
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        startup: function() {
            var sourceTextArea = dom.byId("sourceTextArea");
            var conversionButton = dom.byId("conversionButton");
            var targetTextArea = dom.byId("targetTextArea");
            on(conversionButton, "click", function(e) {
                var sourceText = sourceTextArea.value;
                var convertedText = jsybuben.to_aybuben(sourceText);
                targetTextArea.value = convertedText;
            });
        }
    });
});