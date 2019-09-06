var classTmsLayers = {2018: 'http://geoapps.icimod.org/icimodarcgis/rest/services/Nepal/NLCMS/MapServer/'}

var compTmsLayers = {2018: 'http://geoapps.icimod.org/icimodarcgis/rest/services/Nepal/NepalComposite2018/MapServer/'}

function _getMapURL (year){
  return [classTmsLayers[year],compTmsLayers[year]];
}

function _setupMap(){
  var southWest = L.latLng(25.179286341268874, 79.28012528406266),
      northEast = L.latLng(31.704049614274282, 88.87118973718765),
      bounds = L.latLngBounds(southWest, northEast);

  var map = L.map('map',{
    maxBounds: bounds,
    // minZoom:7,
  }).setView([28.44166797777158, 84.07565751062515], 7);

  var osmbg = L.tileLayer.wms('http://full.wms.geofabrik.de/std/demo_key?').addTo(map);
  map.attributionControl.addAttribution('<a href="https://www.openstreetmap.org/">OpenStreetMap</a>');

  return map;
}

function _addLegend(map){
  L.Control.Legend = L.Control.extend({
    onAdd: function(map){
      var legend = L.DomUtil.create('div','legend');
      $.ajax({
        url:'http://geoapps.icimod.org/icimodarcgis/rest/services/Nepal/NLCMS/MapServer/legend?f=json',
        success:function(response){
          response = JSON.parse(response);
          var legendObj = response.layers[0].legend;
          var legendTxt = '<h6><b>Land Cover</b></h6>'
          var table = '<table class=f90>';
          for (var i=0; i<legendObj.length; i++){
            table += '<tr valign="middle"><td><img src="data:/image/png;base64,'+legendObj[i].imageData+'" alt="'+legendObj[i].label+'"></td>';
            table += '<td>'+legendObj[i].label+'</td></tr>'
          }
          table+='</table>';
          $(legend).html(legendTxt+table);
        }
      })
  		return legend;
    },
    onRemove: function(map) {
  		console.log('Legend removed from map');
  	}
  });
  L.control.legend = function(opts) {
  	return new L.Control.Legend(opts);
  }

  L.control.legend({ position: 'bottomleft' }).addTo(map);
}


function _timeChanged(e){
  var year = 2018;
  var mapurl = _getMapURL(year);
  var layers = {
    "Land Cover" : L.esri.dynamicMapLayer({
                      url: mapurl[0]
                    }),
    "Composite" : L.esri.dynamicMapLayer({
                      url: mapurl[1]
                    }),
    "Districts" : L.esri.dynamicMapLayer({
                      url:'http://geoapps.icimod.org/icimodarcgis/rest/services/Nepal/Admin/MapServer',
                      dynamicLayers:[{
                        "id": 1,
                        "source":{"type":"mapLayer","mapLayerId":1},
                        "drawingInfo":{
                          "renderer":{
                            "type":"simple",
                            "symbol":{
                              "type":"esriSFS",
                              "outline":{
                                "type":"esriSLS",
                                "style":"esriSLSSolid",
                                "color":[0,0,0,255],
                                "width":2
                              }
                            },
                            "label":"DNM",
                            "description":''
                          }
                        }
                      }]
                    }),

  };
  L.control.layers({},layers).addTo(map);
  layers["Land Cover"].addTo(map);
}

function _updateMarker(e){
  if (marker) {
    marker.setLatLng(e.latlng).update();
  }else {
    var blackIcon = L.icon({
    	iconUrl: 'map-marker.png',
    	iconSize:     [30, 30], // size of the icon
    	iconAnchor:   [15, 30], // point of the icon which will correspond to marker's location
    });
    marker =  L.marker(e.latlng,{
      icon: blackIcon,
      draggable:'true'
    }).addTo(map);
  }
}

// steps to initiate
var map = _setupMap();
var marker = false;
_timeChanged();
_addLegend(map);


map.on('click', _updateMarker);


$("#feedbackForm").on('submit',function(e){
  e.preventDefault();
  if (!marker){
    $('#alertmodal p').html("Please click at the location in map where you want to make your comment!");
    $('#alertmodal').modal();
    return;
  }
  var data = {
    lat : marker._latlng.lat,
    lon : marker._latlng.lng,
    year : 2018,
    comments : $("#comments").val(),
    suggestedClass : $("#suggestedClass").val(),
    source : $("#source").val(),
    name : $("#name").val(),
    email : $("#email").val()
  }

  var table = '<table>';
  table +='<tr><th>Comments </th><td>'+data.comments+'</td></tr>';
  table +='<tr><th>Suggested Class </th><td>'+data.suggestedClass+'</td></tr>';
  table +='<tr><th>Source of information</th><td>'+data.source+'</td></tr>';
  table +='<tr><th>Name</th><td>'+(data.name || '<span class="gray">unspecified</span>')+'</td></tr>';
  table +='<tr><th>eMail address</th><td>'+(data.email || '<span class="gray">unspecified</span>')+'</td></tr>';
  table +='<tr><th>for year </th><td>'+data.year+'</td></tr>';
  table +='<tr><th>for location </th><td>'+data.lat+','+data.lon+'</td></tr>';
  table +='</table>';

  $('#confirmmodal p').html(table);
  $('#confirmmodal').modal();
  $('#confirmSubmit').on('click',submitData);

  function submitData(e){
    $('#confirmSubmit').off('click',submitData);
    $('#confirmmodal').modal('hide');
    $('#alertmodal p').html("Submitting your feedback!");
    $('#alertmodal').modal({backdrop:'static',keyboard:false});
    $.ajax({
      url:'http://192.168.11.57/feedback/api/feedbacks',
      data:data,
      dataType:'text',
      type:'POST',
      success:function(resp){
        $('#alertmodal').modal('hide');
        $('#alertmodal p').html("Your feedback was successfully submitted!");
        $('#alertmodal').modal({backdrop:true,keyboard:true});
      }
    })
  }

})
