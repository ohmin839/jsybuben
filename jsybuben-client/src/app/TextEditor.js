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
            // DO NOTHING
        },

        onConversionButtonClicked: function(e) {
            var sourceText = this.sourceTextArea.value;
            var convertedText = jsybuben.to_aybuben(sourceText);
            this.convertedTextArea.value = convertedText;
            this.statusMessage.innerHTML = `Converted into text in Aybuben.`
        },

        onCollectionButtonClicked: function(e) {
            var targetText = this.convertedTextArea.value;
            var wordSet = jsybuben.to_hayeren_word_set(targetText);
            var text = ""
            for (let word of wordSet) {
                text += word + "\n"
            }
            this.wordListArea.value = text;
            var count = wordSet.size;
            if (count == 0) {
                this.statusMessage.innerHTML = `No Hayeren words extracted.`
            } else if (count == 1) {
                this.statusMessage.innerHTML = `1 Hayeren word extracted.`
            } else {
                this.statusMessage.innerHTML = `${count} Hayeren words extracted.`
            }
        },

        onPersistenceButtonClicked: function(e) {
            this.statusMessage.innerHTML = "Persistence not implemented yet."
        }
    });
});