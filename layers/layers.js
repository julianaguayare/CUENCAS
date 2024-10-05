var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CABA_1 = new ol.format.GeoJSON();
var features_CABA_1 = format_CABA_1.readFeatures(json_CABA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABA_1.addFeatures(features_CABA_1);
var lyr_CABA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CABA_1, 
                style: style_CABA_1,
                popuplayertitle: "CABA",
                interactive: true,
                title: '<img src="styles/legend/CABA_1.png" /> CABA'
            });
var format_RMBA_2 = new ol.format.GeoJSON();
var features_RMBA_2 = format_RMBA_2.readFeatures(json_RMBA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RMBA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RMBA_2.addFeatures(features_RMBA_2);
var lyr_RMBA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RMBA_2, 
                style: style_RMBA_2,
                popuplayertitle: "RMBA",
                interactive: true,
                title: '<img src="styles/legend/RMBA_2.png" /> RMBA'
            });
var format_Lmiteinterprovincial_3 = new ol.format.GeoJSON();
var jsonSource_Lmiteinterprovincial_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_Lmiteinterprovincial_3
});var lyr_Lmiteinterprovincial_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Lmiteinterprovincial_3, 
    style: style_Lmiteinterprovincial_3,
    interactive: true,
    title: "Límite interprovincial"
});

function getLmiteinterprovincial_3Json(geojson) {
    var features_Lmiteinterprovincial_3 = format_Lmiteinterprovincial_3.readFeatures(geojson);
    jsonSource_Lmiteinterprovincial_3.addFeatures(features_Lmiteinterprovincial_3);
}
var format_Cuencas_4 = new ol.format.GeoJSON();
var features_Cuencas_4 = format_Cuencas_4.readFeatures(json_Cuencas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_4.addFeatures(features_Cuencas_4);
var lyr_Cuencas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuencas_4, 
                style: style_Cuencas_4,
                popuplayertitle: "Cuencas",
                interactive: true,
                title: '<img src="styles/legend/Cuencas_4.png" /> Cuencas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CABA_1.setVisible(true);lyr_RMBA_2.setVisible(true);lyr_Lmiteinterprovincial_3.setVisible(true);lyr_Cuencas_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CABA_1,lyr_RMBA_2,lyr_Lmiteinterprovincial_3,lyr_Cuencas_4];
lyr_CABA_1.set('fieldAliases', {'link': 'link', 'codpcia': 'codpcia', 'departamen': 'departamen', 'provincia': 'provincia', 'mujeres': 'mujeres', 'varones': 'varones', 'personas': 'personas', 'hogares': 'hogares', 'viv_part': 'viv_part', 'viv_part_h': 'viv_part_h', });
lyr_RMBA_2.set('fieldAliases', {'link': 'link', 'codpcia': 'codpcia', 'departamen': 'departamen', 'provincia': 'provincia', 'mujeres': 'mujeres', 'varones': 'varones', 'personas': 'personas', 'hogares': 'hogares', 'viv_part': 'viv_part', 'viv_part_h': 'viv_part_h', });
lyr_Lmiteinterprovincial_3.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'nam': 'nam', 'gna': 'gna', 'vlj': 'vlj', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Cuencas_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Descripci_': 'Descripci_', 'superficie': 'superficie', 'ha': 'ha', });
lyr_CABA_1.set('fieldImages', {'link': 'TextEdit', 'codpcia': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'mujeres': 'TextEdit', 'varones': 'TextEdit', 'personas': 'TextEdit', 'hogares': 'TextEdit', 'viv_part': 'TextEdit', 'viv_part_h': 'TextEdit', });
lyr_RMBA_2.set('fieldImages', {'link': 'TextEdit', 'codpcia': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'mujeres': 'TextEdit', 'varones': 'TextEdit', 'personas': 'TextEdit', 'hogares': 'TextEdit', 'viv_part': 'TextEdit', 'viv_part_h': 'TextEdit', });
lyr_Lmiteinterprovincial_3.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'nam': 'TextEdit', 'gna': 'TextEdit', 'vlj': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Cuencas_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Descripci_': 'TextEdit', 'superficie': 'TextEdit', 'ha': 'TextEdit', });
lyr_CABA_1.set('fieldLabels', {'link': 'no label', 'codpcia': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'mujeres': 'no label', 'varones': 'no label', 'personas': 'no label', 'hogares': 'no label', 'viv_part': 'no label', 'viv_part_h': 'no label', });
lyr_RMBA_2.set('fieldLabels', {'link': 'no label', 'codpcia': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'mujeres': 'no label', 'varones': 'no label', 'personas': 'no label', 'hogares': 'no label', 'viv_part': 'no label', 'viv_part_h': 'no label', });
lyr_Lmiteinterprovincial_3.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'nam': 'no label', 'gna': 'no label', 'vlj': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Cuencas_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Descripci_': 'no label', 'superficie': 'no label', 'ha': 'no label', });
lyr_Cuencas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});