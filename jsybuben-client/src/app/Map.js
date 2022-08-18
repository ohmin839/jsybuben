define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Map.html",
    "leaflet/leaflet"
], function(declare, _WidgetBase, _TemplatedMixin, template,
            leaflet) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        startup: function() {
            var mymap = leaflet.map('mapArea', {center:[40.159167,44.509167], zoom: 10});
            var lyrOSM = leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
            mymap.addLayer(lyrOSM);
        }
    });
});