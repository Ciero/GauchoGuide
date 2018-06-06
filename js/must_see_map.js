
	(function(A) {
	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Mustsee': [
		{
			type_point: 'Natur',
			location_latitude: -50.4833314 , 
			location_longitude: -73.0499998,
			map_image_url: 'img/thumb_map_must_1.jpg',
			rate: 'Superb | 7.5',
			name_point: 'Perito Moreno Glacier',
			description_point: 'Lago Argentino, Santa Cruz, Argentína',
			get_directions_start_address: '',
			phone: '',
			url_detail: 'perito.html'
		},
		{
			type_point: 'Natur',
			location_latitude: -49.2694322556 , 
			location_longitude:-73.0392665096,
			map_image_url: 'img/thumb_map_must_5.jpg',
			rate: 'Superb | 7.5',
			name_point: 'Fitz Roy',
			description_point: 'El Chalten, Argentina',
			get_directions_start_address: '',
			phone: '',
			url_detail: 'fitz.html'
		},
		{
			type_point: 'Natur',
			location_latitude: -54.7999968, 
			location_longitude:-68.2999988,
			map_image_url: 'img/thumb_map_must_6.jpg',
			rate: 'Superb | 7.5',
			name_point: 'Cabo Polonio',
			description_point: 'Cabo Polonio 27202, Uruguay',
			get_directions_start_address: '',
			phone: '',
			url_detail: 'polonio.html'
		},
		{
			type_point: 'Natur',
			location_latitude: -54.7999968, 
			location_longitude:-68.2999988,
			map_image_url: 'img/thumb_map_must_2.jpg',
			rate: 'Superb | 7.5',
			name_point: 'Ushuaia',
			description_point: 'Avenida Gral San Martin, 674, Ushuaia V9410BFT, Argentina',
			get_directions_start_address: '',
			phone: '',
			url_detail: 'ushuaia.html'
		},		
		
		],
	
		
		'Restaurants': [
		{
			type_point: 'Food',
			location_latitude: -34.588918, 
			location_longitude:-58.392197,
			map_image_url: 'img/thumb_map_restaurant_1.jpg',
			rate: 'Superb | 9.5',
			name_point: 'Buller Pub',
			description_point: 'Junin 1747, C.A.B.A.',
			get_directions_start_address: '',
			phone: '+54 11 4806 0556',
			url_detail: 'http://www.bullerpub.com/'
		}
	
		]
	};
			var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng(-46.53749785, -71.71999712),
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				mapTypeControl: false,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				scrollwheel: false,
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.TOP_LEFT
				},
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				styles: [
							 {
					"featureType": "landscape",
					"stylers": [
						{
							"hue": "#FFBB00"
						},
						{
							"saturation": 43.400000000000006
						},
						{
							"lightness": 37.599999999999994
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.highway",
					"stylers": [
						{
							"hue": "#FFC200"
						},
						{
							"saturation": -61.8
						},
						{
							"lightness": 45.599999999999994
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.arterial",
					"stylers": [
						{
							"hue": "#FF0300"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 51.19999999999999
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.local",
					"stylers": [
						{
							"hue": "#FF0300"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 52
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{
							"hue": "#0078FF"
						},
						{
							"saturation": -13.200000000000003
						},
						{
							"lightness": 2.4000000000000057
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "poi.business",
					"stylers": [
						  { visibility: "off" }
					]
				}
				]
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: 'img/pins/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

	});
		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};
		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
				'<div class="marker_info" id="marker_info">' +
				'<img src="' + item.map_image_url + '" alt=""/>' +
				'<span>'+ 
					'<span class="infobox_rate">'+ item.rate +'</span>' +
					'<h3>'+ item.name_point +'</h3>' +
				'<em>'+ item.type_point +'</em>' +
				'<strong>'+ item.description_point +'</strong>' +
				'<a href="'+ item.url_detail + '" class="btn_infobox_detail"></a>' +
				'<form action="http://maps.google.com/maps" method="get" target="_blank"><input name="saddr" value="'+ item.get_directions_start_address +'" type="hidden"><input type="hidden" name="daddr" value="'+ item.location_latitude +',' +item.location_longitude +'"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Get directions</button></form>' +
					'<a href="tel://'+ item.phone +'" class="btn_infobox_phone">'+ item.phone +'</a>' +
					'</span>' +
				'</div>',
				disableAutoPan: false,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(10, 115),
				closeBoxMargin: '5px -28px 0 0',
				closeBoxURL: "img/close_infobox.png",
				isHidden: false,
				alignBottom: true,
				pane: 'floatPane',
				enableEventPropagation: true
			});
		};
		function onHtmlClick(location_type, key){
     google.maps.event.trigger(markers[location_type][key], "click");
}
