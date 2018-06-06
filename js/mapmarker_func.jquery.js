		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "47.29175", "longitude":"8.56351", "icon": "img/map-marker.png"}
			]
		};
		
		//set up map options
		$("#map_contact").mapmarker({
			zoom	: 12,
			center	: 'Thalwil',
			markers	: myMarkers
		});

