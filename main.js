var tmsLayers = {2000: 'https://earthengine.googleapis.com/map/7c53049812705b86eb923bc80811c73f/{z}/{x}/{y}?token=6de1d1052c281ee9784ee43ba5582f0d',
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

function _getMapURL (year){
  return tmsLayers[year]
}

var southWest = L.latLng(25.179286341268874, 79.28012528406266),
    northEast = L.latLng(31.704049614274282, 88.87118973718765),
    bounds = L.latLngBounds(southWest, northEast);


var map = L.map('map',{
  maxBounds: bounds,
  minZoom:7
}).setView([28.44166797777158, 84.07565751062515], 7);

var mapurl = _getMapURL(2018);

// var tileLayer = L.tileLayer('https://earthengine.googleapis.com/map/729f15c529ff08186c68effe0feb8716/{z}/{x}/{y}?token=1e70af84676a7ffb06cc5dd6e5ac39c5')

var tileLayer = L.tileLayer(mapurl)

tileLayer.addTo(map);

$("#feedbackForm").on('submit',function(e){
  e.preventDefault();
  var data = {
    comments : $("#comments").val(),
    suggestedClass : $("#suggestedClass").val(),
    source : $("#source").val(),
    name : $("#name").val(),
    email : $("#email").val()
  }
  console.log(data);
})
