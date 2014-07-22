// JavaScript Document
<!--
function $( name ){
	return document.getElementById( name );
}
// Preload the tabs if possible
if (document.images){
	var imgArr = new Array( "tab_home_over.gif", "tab_news_over.gif", "tab_psds_over.gif", "tab_stocks_over.gif", "tab_tutorials_over.gif", "tab_community_over.gif" );
	var pics = new Array();
	for( var i = 1; i <= imgArr.length; i++ ){
		pics[i] = new Image(); 
		pics[i].src="/" + imgArr[i]; 
	}
}
//-->

function tabIn( img, src ){
	if( src.indexOf( "_over" ) < 0 ){
		img.src = src.replace( ".gif", "_over.gif" );
	}
}

function tabOut( img, src, active ){
	if( active ) return false;
	img.src = src.replace( "_over", "" );
}

function popPSD( id ){
	window.open( "/pop-downloadPSD.php?id=" + id , "downloadPSD", "toolbar=no,menubar=no,location=no,scrollbars=no,resizable=no,width=400,height=400,left=250,top=50");
	return false;
}

function changeLicense(){
	var indx = $("licenseSelector").selectedIndex;
	var name = $("licenseSelector")[indx].firstChild.nodeValue;
	var url = $("licenseSelector")[indx].value;
	
	$("licenseLink").href = url;
	$("licenseLink").title = "More information about the " + name + " license";
	$("licenseName").value = name;
}

function selectLicense( name ){
	for( var i = 0; i < $("licenseSelector").options.length; i++ ){
		var thisName = $("licenseSelector")[i].firstChild.nodeValue;
		if( thisName == name ){
			$("licenseSelector").selectedIndex = i;
			changeLicense();
			return;
		}
	}
}