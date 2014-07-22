// JavaScript Document
	var submitting = false;
	var xmlRequestObj;
	var type = "psds";
	
	function RollOntoStar( star ){
		if( submitting ) return false;
		for( var i = 1; i <= 5; i++ ){
			//alert( i <= star );
			if( i <= star ){
				document.getElementById( "ratingStar" + i ).src = "/images/starOn.gif";
			}else{
				document.getElementById( "ratingStar" + i ).src = "/images/starOff.gif";
			}
		}
	}
	
	function RollOffStar( star ){
		if( submitting ) return false;
		for( i = 1; i <= 5; i++ ){
			document.getElementById( "ratingStar" + i ).src = "/images/starOff.gif";
		}
	}
	
	function submitRating( id, rating ){
		if( submitting ) return false;
		submitting = true;
		document.getElementById( "ratingText" ).innerHTML = "Submitting Your Rating...";

		// submit and wait
		xmlRequestObj = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xmlRequestObj.onreadystatechange = updateRating;
		xmlRequestObj.open("POST", "/" + type + "-process.php?cmd=rate&id=" + id + "&rating=" + rating, true);
		xmlRequestObj.send(null);

		return false;
	}
	
	function updateRating(){
		if ( xmlRequestObj.readyState == 4 && (xmlRequestObj.status == 200 || xmlRequestObj.status == 304) ){
			var resultXML = xmlRequestObj.responseXML;
	
			var nodes = resultXML.getElementsByTagName( "status" );
			var node = nodes.item(0);
			var newrating = node.getAttribute( "rating" );
			
			// confirmation
			alert( "Your rating has been submitted!" );
			
			//hide the container
			document.getElementById( "ratingContainer" ).style.visibility = "hidden";
			document.getElementById( "ratingContainer" ).style.display = "none";
			
			// lets update the stars
			document.getElementById( "starsContainer" ).innerHTML = "";
			var html = "";
			for( var i = 1; i <= 5; i++ ){
				if( i <= newrating ){
					html += "<img src=\"/images/starOn.gif\" width=\"13\" height=\"13\" class=\"star\" />&nbsp;";
				}else{
					html += "<img src=\"/images/starOff.gif\" width=\"13\" height=\"13\" class=\"star\" />&nbsp;";
				}
			}
			document.getElementById( "starsContainer" ).innerHTML = html;
			
		}
		
	}
