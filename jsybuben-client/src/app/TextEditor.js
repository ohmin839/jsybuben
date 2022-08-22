define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/TextEditor.html",
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
            var convertedTextArea = dom.byId("convertedTextArea");
            var wordListArea = dom.byId("wordListArea");

            var conversionButton = dom.byId("conversionButton");
            var collectionButton = dom.byId("collectionButton");
            var persistenceButton = dom.byId("persistenceButton");

            var statusMessage = dom.byId("statusMessage");

            on(conversionButton, "click", function(e) {
                var sourceText = sourceTextArea.value;
                var convertedText = jsybuben.to_aybuben(sourceText);
                convertedTextArea.value = convertedText;
                statusMessage.innerHTML = `Converted into text in Aybuben.`
            });

            on(collectionButton, "click", function(e) {
                var targetText = convertedTextArea.value;
                var wordSet = jsybuben.to_hayeren_word_set(targetText);
                var text = ""
                for (let word of wordSet) {
                    text += word + "\n"
                }
                wordListArea.value = text;
                var count = wordSet.size;
                if (count == 0) {
                    statusMessage.innerHTML = `No Hayeren words extracted.`
                } else if (count == 1) {
                    statusMessage.innerHTML = `1 Hayeren word extracted.`
                } else {
                    statusMessage.innerHTML = `${count} Hayeren words extracted.`
                }
            });
            
            on(persistenceButton, "click", function(e) {
                statusMessage.innerHTML = "Persistence not implemented yet."
            });
        }
    });
});