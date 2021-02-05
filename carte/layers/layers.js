var wms_layers = [];

        var lyr_Fonddecarte_0 = new ol.layer.Tile({
            'title': 'Fond de carte',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });var format_Territoirefrancaisen1754_1 = new ol.format.GeoJSON();
var features_Territoirefrancaisen1754_1 = format_Territoirefrancaisen1754_1.readFeatures(json_Territoirefrancaisen1754_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territoirefrancaisen1754_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Territoirefrancaisen1754_1.addFeatures(features_Territoirefrancaisen1754_1);var lyr_Territoirefrancaisen1754_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Territoirefrancaisen1754_1, 
                style: style_Territoirefrancaisen1754_1,
                title: '<img src="styles/legend/Territoirefrancaisen1754_1.png" /> Territoire francais en 1754'
            });var format_Fortleplusproche_2 = new ol.format.GeoJSON();
var features_Fortleplusproche_2 = format_Fortleplusproche_2.readFeatures(json_Fortleplusproche_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fortleplusproche_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Fortleplusproche_2.addFeatures(features_Fortleplusproche_2);var lyr_Fortleplusproche_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fortleplusproche_2, 
                style: style_Fortleplusproche_2,
                title: '<img src="styles/legend/Fortleplusproche_2.png" /> Fort le plus proche'
            });var format_Fortsmilitaires_3 = new ol.format.GeoJSON();
var features_Fortsmilitaires_3 = format_Fortsmilitaires_3.readFeatures(json_Fortsmilitaires_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fortsmilitaires_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Fortsmilitaires_3.addFeatures(features_Fortsmilitaires_3);var lyr_Fortsmilitaires_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fortsmilitaires_3, 
                style: style_Fortsmilitaires_3,
    title: 'Forts militaires<br />\
    <img src="styles/legend/Fortsmilitaires_3_0.png" /> Militaire<br />\
    <img src="styles/legend/Fortsmilitaires_3_1.png" /> Peuplement<br />'
        });

lyr_Fonddecarte_0.setVisible(true);lyr_Territoirefrancaisen1754_1.setVisible(true);lyr_Fortleplusproche_2.setVisible(true);lyr_Fortsmilitaires_3.setVisible(true);
var layersList = [lyr_Fonddecarte_0,lyr_Territoirefrancaisen1754_1,lyr_Fortleplusproche_2,lyr_Fortsmilitaires_3];
lyr_Territoirefrancaisen1754_1.set('fieldAliases', {'id': 'id', 'annee': 'annee', });
lyr_Fortleplusproche_2.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'desc': 'desc', 'annee_d': 'annee_d', 'type': 'type', 'img': 'img', 'annee_f': 'annee_f', });
lyr_Fortsmilitaires_3.set('fieldAliases', {'id': 'id', 'nom': 'Nom', 'desc': 'desc', 'annee_d': 'Début', 'type': 'type', 'img': 'img', 'annee_f': 'Fin', });
lyr_Territoirefrancaisen1754_1.set('fieldImages', {'id': 'Hidden', 'annee': 'Hidden', });
lyr_Fortleplusproche_2.set('fieldImages', {'id': 'Hidden', 'nom': 'Hidden', 'desc': 'Hidden', 'annee_d': 'Hidden', 'type': 'Hidden', 'img': 'Hidden', 'annee_f': 'Hidden', });
lyr_Fortsmilitaires_3.set('fieldImages', {'id': 'Hidden', 'nom': 'TextEdit', 'desc': 'Hidden', 'annee_d': 'Range', 'type': 'Hidden', 'img': 'Hidden', 'annee_f': 'Range', });
lyr_Territoirefrancaisen1754_1.set('fieldLabels', {});
lyr_Fortleplusproche_2.set('fieldLabels', {});
lyr_Fortsmilitaires_3.set('fieldLabels', {'nom': 'header label', 'annee_d': 'header label', 'annee_f': 'header label', });
lyr_Fortsmilitaires_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});