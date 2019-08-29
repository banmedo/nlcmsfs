var classTmsLayers = {2000: 'https://earthengine.googleapis.com/map/7c53049812705b86eb923bc80811c73f/{z}/{x}/{y}?token=6de1d1052c281ee9784ee43ba5582f0d',
  2001: 'https://earthengine.googleapis.com/map/98cf4b4ddda37ffe9558eb57ef5d755a/{z}/{x}/{y}?token=953904fcfc8bfe5896c9d3c025dbe823',
  2002: 'https://earthengine.googleapis.com/map/f7439513cc4cbaf4781a2bce3b6546db/{z}/{x}/{y}?token=816c21986711c00e3e0c05d9206e164a',
  2003: 'https://earthengine.googleapis.com/map/35137984d679bcd1aea6683805bb3fbf/{z}/{x}/{y}?token=69c3654d8e7da684d5ecf1ee4daaed01',
  2004: 'https://earthengine.googleapis.com/map/e12f9d03d67951e44d5184ab6b377fff/{z}/{x}/{y}?token=0794fd00482a78c2f2f8fc9a7fdb7ee7',
  2005: 'https://earthengine.googleapis.com/map/45fc6aa0352d471fdae7beca71213827/{z}/{x}/{y}?token=6eb2408399178f3f02233328ccb67b08',
  2006: 'https://earthengine.googleapis.com/map/20cdc2b9624b502f8297de71884904dc/{z}/{x}/{y}?token=82055f2b84d16dbbc7c1b6b1542c52be',
  2007: 'https://earthengine.googleapis.com/map/4cb67d6c1a7f92fc7f3df69880f2ae89/{z}/{x}/{y}?token=c63fd1280ca3c18fef3a7e245cd62750',
  2008: 'https://earthengine.googleapis.com/map/4bba978748faf0462c2101e9a4c7c67e/{z}/{x}/{y}?token=ea903622cdd8d85d8fc3481da981c39e',
  2009: 'https://earthengine.googleapis.com/map/e2ac9e24da2210236372e29215cc5db4/{z}/{x}/{y}?token=7b31976550f03a73d96ced30eac69747',
  2010: 'https://earthengine.googleapis.com/map/3001f8d86b51ba5d9ef2c92193e4748a/{z}/{x}/{y}?token=697d5e6717d3c9497865c9905a9e6496',
  2011: 'https://earthengine.googleapis.com/map/166f5c408b9d16181cc1941c4439a987/{z}/{x}/{y}?token=a352650fb6039cf8b1e90c7063ec617b',
  2013: 'https://earthengine.googleapis.com/map/3ce7f1cb2a90ebee98a5e18194dafeae/{z}/{x}/{y}?token=afc7c59baa18ad576449e73bd7127d83',
  2014: 'https://earthengine.googleapis.com/map/5b39353e51e6bc07dc8d48d0ca82629e/{z}/{x}/{y}?token=3ff941ef5e1b37f742be52a766cc9892',
  2015: 'https://earthengine.googleapis.com/map/59fe5aefc1a3a1aba9f3fa5607ed65a5/{z}/{x}/{y}?token=703ff6949bfd73875e21b4dd1999d30b',
  2016: 'https://earthengine.googleapis.com/map/e8569644015cb85a41b1a12053b35920/{z}/{x}/{y}?token=79cfa9814d297f5295ede15ccad24066',
  2017: 'https://earthengine.googleapis.com/map/06625d8d6f58a5a822f648b36fd7e345/{z}/{x}/{y}?token=088f2e60301011c4ea30f30bdb9be0d8',
  2018: 'https://earthengine.googleapis.com/map/bbe3cd2b03643b28a987e71b09163fb0/{z}/{x}/{y}?token=62d91726110c792867b7f47f0e05745c'}

var compTmsLayers = {2000: 'https://earthengine.googleapis.com/map/35cc2583c0aa21264a3b6f9491ba4572/{z}/{x}/{y}?token=21e7082daeaa46c3e3eba0cf4c9e9a6b',
  2001: 'https://earthengine.googleapis.com/map/62fa54f9423561a5c3a4461f18bf2b74/{z}/{x}/{y}?token=d8bef8fafbb89b7e5c1660a1ce93cbbe',
  2002: 'https://earthengine.googleapis.com/map/2fce26b5cc94410d9e51237814e2d70d/{z}/{x}/{y}?token=9c281d7d60e0eae36fdd44ccc1f445dc',
  2003: 'https://earthengine.googleapis.com/map/6100c9f7e1fcc3b32df329d1a13cec58/{z}/{x}/{y}?token=cccd5afe5e261c8c2376e22c97438121',
  2004: 'https://earthengine.googleapis.com/map/c9c92879f50fc209ee1686cd7d4aa63e/{z}/{x}/{y}?token=c0d15a6fc3887962221fb56287b646ea',
  2005: 'https://earthengine.googleapis.com/map/2a62d9773646ec044e044c870325b18b/{z}/{x}/{y}?token=56618046bde7d8995a781d5341ae1e42',
  2006: 'https://earthengine.googleapis.com/map/24360855a77591010735b96bf1c8ec98/{z}/{x}/{y}?token=8808af7e1175e184e87cbeb56d6245fc',
  2007: 'https://earthengine.googleapis.com/map/d14b14d179d6e69af553689b4431f531/{z}/{x}/{y}?token=f3334829177396797dc399224089067f',
  2008: 'https://earthengine.googleapis.com/map/734bbe8e4180e86115cfc25f1a43b9a1/{z}/{x}/{y}?token=bfa3016cb968a535f8d3798d5f6b5668',
  2009: 'https://earthengine.googleapis.com/map/134404eeebcb0102f123f1f2cf282827/{z}/{x}/{y}?token=72a02658a79e8da64705efc6cc4e1e1b',
  2010: 'https://earthengine.googleapis.com/map/60e3492d1f222f7807fc3c2d9cb51f99/{z}/{x}/{y}?token=04ca47b8d94cc8d83068408f3b022fad',
  2011: 'https://earthengine.googleapis.com/map/37bb7d4cc1d694492bd20953440d3d6b/{z}/{x}/{y}?token=f22c9982783bb6be487d3f269fdbc586',
  2013: 'https://earthengine.googleapis.com/map/49d72b8e4e705e13fe9ed5a243aef88f/{z}/{x}/{y}?token=a0b50f80ab7c4d268555c46a60ecc9bd',
  2014: 'https://earthengine.googleapis.com/map/83e3ab6639604a77e3a634064b254353/{z}/{x}/{y}?token=922653a5e285d0147df49b3c387eb84b',
  2015: 'https://earthengine.googleapis.com/map/479b19a0cc0895a47ee6e7d23e352251/{z}/{x}/{y}?token=c43a892e34ddfae79ca508a7ed7a70f9',
  2016: 'https://earthengine.googleapis.com/map/f2cf76a1aafe8b8c711bd2976b355a20/{z}/{x}/{y}?token=1592c323f4c2ca8852ec656eadbf5006',
  2017: 'https://earthengine.googleapis.com/map/48b13b9a1cd33457d05d7e2404b55baf/{z}/{x}/{y}?token=b3d2e27b08d4eaa30cf9e64f7ced68ac',
  2018: 'https://earthengine.googleapis.com/map/c060dde6c6470e6355c8da5b26b130dc/{z}/{x}/{y}?token=cf41ba7e98520ea1e2c8df3b4fddd4bf'}

function _getMapURL (year){
  return [classTmsLayers[year],compTmsLayers[year]];
}

function _setupMap(){
  var southWest = L.latLng(25.179286341268874, 79.28012528406266),
      northEast = L.latLng(31.704049614274282, 88.87118973718765),
      bounds = L.latLngBounds(southWest, northEast);

  var map = L.map('map',{
    maxBounds: bounds,
    minZoom:7
  }).setView([28.44166797777158, 84.07565751062515], 7);

  return map;
}


function _timeChanged(e){
  var year = 2018;
  var mapurl = _getMapURL(year);
  var layers = {
    "Land Cover" : L.tileLayer(mapurl[0]),
    "Composite" : L.tileLayer(mapurl[1])
  };
  L.control.layers(layers).addTo(map);
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



map.on('click', _updateMarker);

$("#feedbackForm").on('submit',function(e){
  e.preventDefault();
  if (!marker){
    $('.modal-body p').html("Please click at the location in map where you want to make your comment!");
    $('.modal').modal();
    return;
  }
  var data = {
    comments : $("#comments").val(),
    suggestedClass : $("#suggestedClass").val(),
    source : $("#source").val(),
    name : $("#name").val(),
    email : $("#email").val()
  }
  console.log(data);
})
