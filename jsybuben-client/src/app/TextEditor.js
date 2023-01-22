define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/TextEditor.html",
    "dojo/request",
    "jsybuben/jsybuben"
], function(declare, lang, _WidgetBase, _TemplatedMixin, template, request, jsybuben)
{
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        onConversionButtonClicked: function(e) {
            var sourceText = this.sourceTextArea.value;
            var convertedText = jsybuben.toAybuben(sourceText);
            this.convertedTextArea.value = convertedText;
            this.statusMessage.innerHTML = `Converted into text in Aybuben.`;
        },

        onCollectionButtonClicked: function(e) {
            var targetText = this.convertedTextArea.value;
            var wordSet = jsybuben.toHayerenWordSet(targetText);
            var text = "";
            for (let word of wordSet) {
                text += word + "\n";
            }
            this.wordListArea.value = text;
            var count = wordSet.size;
            if (count == 0) {
                this.statusMessage.innerHTML = `No Hayeren words extracted.`;
            } else if (count == 1) {
                this.statusMessage.innerHTML = `1 Hayeren word extracted.`;
            } else {
                this.statusMessage.innerHTML = `${count} Hayeren words extracted.`;
            }
        },

        onPersistenceButtonClicked: function(e) {
            request.post("/rest/rawText", {
                data: this.convertedTextArea
            }).then(
                lang.hitch(this, function(response) {
                    this.statusMessage.innerHTML = "Persistence succeeded.";
                }),
                lang.hitch(this, function(error) {
                    this.statusMessage.innerHTML = "Persistence failed.";
                })
            );
        }
    });
});