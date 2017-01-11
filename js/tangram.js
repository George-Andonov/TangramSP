// Tangram Silhouettes Project
// Config Section	
	var dur=1;
	// TweenLite.defaultEase = Power1.easeOut;
	TweenLite.defaultEase = Back.easeOut.config(1.7);
	// TweenLite.defaultOverwrite = "none"; // TBD overlaping
	
	var indx = 0; 
	// Random silhouette =Math.floor(Math.random() * (max - min)) + min;
	// var indx = Math.floor(Math.random() * (silDb.length -1));
	var slideTime = 2500; // 2s for Slideshow
	var slideRun = "";
	var sld = 0;
	var hideB = 0; //Hide silhouette border
	var silString = "";
	
	var flip=0; // flip romboid
	var action = 0;
	var gridWidth = 2;
	var gridHeight = 2;
	var lSnap = true;
	var currentTan = 1;
	// set default movement - Move
	Draggable.create("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f", {type:"x,y", edgeResistance:0.65, bounds:"#grid", throwProps:true, liveSnap:lSnap,
		snap: {
			x: function(endValue) {
				return Math.round(endValue / gridWidth) * gridWidth;
			},
				y: function(endValue) {
				return Math.round(endValue / gridHeight) * gridHeight;
			}
    }});

	// Activate tooltip & hide some buttons
	$(function () { 
		$("[data-toggle='tooltip']").tooltip(); 
		$('#actBtn').hide();
		$('#flipBtn').hide();
		$('#hideBtn').hide();
		currentTan = document.getElementById("tan1");
	});
	
// -------------- DROPDOWN LIST
	
//Info Silhouette
	function infoSil() {
		var t1Rot=document.getElementById("tan1")._gsTransform.rotation.toFixed(0);
		var t2Rot=document.getElementById("tan2")._gsTransform.rotation.toFixed(0);
		var t3Rot=document.getElementById("tan3")._gsTransform.rotation.toFixed(0);
		var t4Rot=document.getElementById("tan4")._gsTransform.rotation.toFixed(0);
		var t5Rot=document.getElementById("tan5")._gsTransform.rotation.toFixed(0);
		var t6Rot=document.getElementById("tan6")._gsTransform.rotation.toFixed(0);
		//simple overlap test
		
		silString = "*** To be validated ***, new, "+
			document.getElementById("tan1")._gsTransform.x +", " +document.getElementById("tan1")._gsTransform.y +", "+t1Rot + ", " +
			document.getElementById("tan2")._gsTransform.x +", " +document.getElementById("tan2")._gsTransform.y +", "+t2Rot + ", " +
			document.getElementById("tan3")._gsTransform.x +", " +document.getElementById("tan3")._gsTransform.y +", "+t3Rot + ", " +
			document.getElementById("tan4")._gsTransform.x +", " +document.getElementById("tan4")._gsTransform.y +", "+t4Rot + ", " +
			document.getElementById("tan5")._gsTransform.x +", " +document.getElementById("tan5")._gsTransform.y +", "+t5Rot + ", " +
			document.getElementById("tan6")._gsTransform.x +", " +document.getElementById("tan6")._gsTransform.y +", "+t6Rot + ", " ;
		if (flip==0){
			var t7Rot=document.getElementById("tan7")._gsTransform.rotation.toFixed(0);
			silString = silString +
			document.getElementById("tan7")._gsTransform.x +", " +document.getElementById("tan7")._gsTransform.y +", "+t7Rot + ", " + flip;
		}
		else {
			var t7Rot=document.getElementById("tan7f")._gsTransform.rotation.toFixed(0);
			silString = silString +
			document.getElementById("tan7f")._gsTransform.x +", " +document.getElementById("tan7f")._gsTransform.y +", "+t7Rot + ", " + flip;
		}
		
		var mymodal = $('#infoSilModal');
		document.getElementById("sildesc").value = silString;
		mymodal.modal('show');
	}

//Show Silhouette solution
	function showSol() {
		var indxSil = 0;
		var silNumber = document.getElementById("silNo").value;
		for (var i = 1; i < (silDb.length); i++){
			if (silDb[i][0] == silNumber) {
				indxSil = i;
			}
		}
		if (indxSil == 0) {
			var mymodal = $('#silNotFoundModal');
			mymodal.modal('show');
		} 
		else {
			indx = indxSil;
			drawSil();
		}
	}
	
// Send silString to the site
	function sendSil() {
		var xhr = new XMLHttpRequest();
		var data="name="+silString;
		var mymodal = $('#thankYouModal');
		mymodal.modal('show');
	}

// Draw silhouette
	function drawSil() {
		// document.getElementById("silName").innerHTML = silDb[indx][1] + ' (' + silDb[indx][2] + ')';
		document.getElementById("silNo").value = silDb[indx][0];
		document.getElementById("groupMenu").innerHTML= silDb[indx][2] + ' <span class="caret caret-down"></span>';
		document.getElementById("silMenu").innerHTML= silDb[indx][1] + ' <span class="caret caret-down"></span>';
				
		TweenLite.to(document.getElementById("tan1"), dur, {x:silDb[indx][3], y:silDb[indx][4], rotation:silDb[indx][5]});
		TweenLite.to(document.getElementById("tan2"), dur, {x:silDb[indx][6], y:silDb[indx][7], rotation:silDb[indx][8]});
		TweenLite.to(document.getElementById("tan3"), dur, {x:silDb[indx][9], y:silDb[indx][10], rotation:silDb[indx][11]});
		TweenLite.to(document.getElementById("tan4"), dur, {x:silDb[indx][12], y:silDb[indx][13], rotation:silDb[indx][14]});
		TweenLite.to(document.getElementById("tan5"), dur, {x:silDb[indx][15], y:silDb[indx][16], rotation:silDb[indx][17]});
		TweenLite.to(document.getElementById("tan6"), dur, {x:silDb[indx][18], y:silDb[indx][19], rotation:silDb[indx][20]});
		if (silDb[indx][24]==0){
			flip=0;
			document.getElementById("tan7").setAttribute("class", "showTan");
			document.getElementById("tan7f").setAttribute("class", "hidTan");
			
			TweenLite.to(document.getElementById("tan7"), dur, {x:silDb[indx][21], y:silDb[indx][22], rotation:silDb[indx][23]});
		} else {
			flip=1;
			document.getElementById("tan7f").setAttribute("class", "showTan");
			document.getElementById("tan7").setAttribute("class", "hidTan");
			TweenLite.to(document.getElementById("tan7f"), dur, {x:silDb[indx][21], y:silDb[indx][22], rotation:silDb[indx][23]});
		}
	}

// Hide	- Show border
	function hideBorder() {
		if ( hideB==0){
			document.getElementById("silhouette").setAttribute("class", "showSil");
			if (flip==0){
				document.getElementById("tan7").setAttribute("class", "showSil");
			} else {
				document.getElementById("tan7f").setAttribute("class", "showSil");
			}
			hideB=1;
		}
		else {
			document.getElementById("silhouette").setAttribute("class", "hidSil");
			if (flip==0){
				document.getElementById("tan7").setAttribute("class", "hidSil");
			} else {
				document.getElementById("tan7f").setAttribute("class", "hidSil");
			}
			hideB=0;
		}
	}

// Navigation	
// Next sil
	function nextSil() {
		if(indx < silDb.length-1) {
			indx++;
		}
		else {
			indx=1;
		}
		drawSil();
	}
// Previous sil
	function prevSil() {
		if(indx >1 ) {
			indx--;
		}
		else {
			indx=silDb.length-1;
		}
		drawSil();
	}

// Draw random silhouette
var drawRandSil = function (){
	indx=Math.floor(Math.random() * (silDb.length -1));
	drawSil();
}
// Slideshow	
	function slideShow() {
		if (sld==1) { 
			// Start Slideshow
			document.getElementById("slideBtn").innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>';
			sld=0;
			slideRun = setInterval(drawRandSil, slideTime);
		}
		else {
			// Stop Slideshow
			document.getElementById("slideBtn").innerHTML='<i class="fa fa-play" aria-hidden="true"></i>';
			sld=1;
			clearInterval(slideRun);
		}
	}

	function drawOneSil(num) {
		indx = num;
		drawSil();
	}
	
// Start slideshow on load
	function startMe() {
		nextSil();
		sld = 1;
		slideShow();		
		// Populate drop-down list
		var silList=document.getElementById("silDropdown"); 
        for (var i = 2; i < (silDb.length); i++){
            var opt = i-1 + ": " + silDb[i][1];
            var li = document.createElement("li");
            var link = document.createElement("a");
            var text = document.createTextNode(opt);
            link.appendChild(text);
            link.href = 'javascript:drawOneSil('+ i +')';
            li.appendChild(link);
            silList.appendChild(li);
          }
	}

// Show one group
	function showGroup(grName) {
		var silList=document.getElementById("silDropdown"); 
		silList.innerHTML="";
		var firstSil=1;
		for (var i = 2; i < (silDb.length); i++){
			if (silDb[i][2]==grName || grName=="all") {
				var opt = i-1 + ": " + silDb[i][1];
				var li = document.createElement("li");
				var link = document.createElement("a");
				var text = document.createTextNode(opt);
				link.appendChild(text);
				link.href = 'javascript:drawOneSil('+ i +')';
				if (firstSil==1){
					firstSil=i;
				}
				li.appendChild(link);
				silList.appendChild(li);
			}
          }
		drawOneSil(firstSil);
	}
	
// Move - Rotate tans
		function moveRotate() {
			if (action==1) {
				// Move
				action=0;
				document.getElementById("actBtn").innerHTML='<i class="glyphicon glyphicon-move"></i>';
				// Draggable.get("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f").disable();
				Draggable.create("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f", {type:"x,y", edgeResistance:0.65, throwProps:true, liveSnap:lSnap,
					snap: {
						x: function(endValue) {
							return Math.round(endValue / gridWidth) * gridWidth;
						},
						y: function(endValue) {
							return Math.round(endValue / gridHeight) * gridHeight;
						}
				}});
			}
			else {
				// Rotation
				action=1;
				document.getElementById("actBtn").innerHTML='<i class="glyphicon glyphicon-repeat"></i>';
				Draggable.create("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f", {type: "rotation", bounds:{minRotation:0, maxRotation:360}, throwProps: true });
			}
		}

		
// Settings - modal dialogue
function settingsDialog (){
	var mymodal = $('#settingsModal');
	// mymodal.find('.modal-body').text(silString);
	mymodal.modal('show');
}

// Flip romboid
function flipRomboid() {
	if (flip==0) {
		// hide tan7, show tan7f
		flip=1;
		document.getElementById("tan7f").setAttribute("class", "showTan");
		document.getElementById("tan7").setAttribute("class", "hidTan");
	} else{
		// hide tan7f, show tan7
		flip=0;
		document.getElementById("tan7").setAttribute("class", "showTan");
		document.getElementById("tan7f").setAttribute("class", "hidTan");
	}
}
		
// Settings modal dialogue
function gameMode() {
	var x = document.getElementById("cbGameMode");
    if(x.checked){
		document.getElementById("actBtn").classList.remove("disabled");
		document.getElementById("actBtn").setAttribute("onclick", "moveRotate()");
		document.getElementById("flipBtn").classList.remove("disabled");
		document.getElementById("flipBtn").setAttribute("onclick", "flipRomboid()");
		$('#actBtn').show();
		$('#flipBtn').show();
	}
	else {
		document.getElementById("actBtn").className += " disabled";
		document.getElementById("actBtn").removeAttribute('onclick');
		document.getElementById("flipBtn").className += " disabled";
		document.getElementById("flipBtn").removeAttribute('onclick');
		$('#actBtn').hide();
		$('#flipBtn').hide();
	}
}

// Show shadow
function showShadow() {
	var x = document.getElementById("cbShadow");
    if(x.checked){
		document.getElementById("silhouette").setAttribute("filter", "url(#f3)");
	}
	else {
		document.getElementById("silhouette").setAttribute("filter", "none");
	}
}

function showHint() {
    var x = document.getElementById("cbHint");
    if(x.checked){
		document.getElementById("hideBtn").classList.remove("disabled");
		document.getElementById("hideBtn").setAttribute("onclick", "hideBorder()");
		$('#hideBtn').show();
	}
	else {
		document.getElementById("hideBtn").className += " disabled";
		document.getElementById("hideBtn").removeAttribute('onclick');
		hideB = 1; 
		hideBorder();
		$('#hideBtn').hide();
	}
}

// Keyboard	
window.addEventListener("keyup", checkKeys, false);
function checkKeys(e) {
    switch(e.which) {
        case 188:
			// < key pressed
			prevSil();
            break;
        case 190:
            // > key pressed
			nextSil();
            break;
        case 45:
            // Ins key pressed
			flipRomboid();
            break;
		case 46:
            // Del key pressed
			moveRotate();
            break;
		case 37:
            // left arrow pressed
			TweenLite.to(currentTan, 0.5, {x:"-=1px"});
            break;
		case 39:
            // right arrow pressed
			TweenLite.to(currentTan, 0.5, {x:"+=1px"});
            break;
		case 38:
            // up arrow pressed
			TweenLite.to(currentTan, 0.5, {y:"-=1px"});
            break;
		case 40:
            // down arrow pressed
			TweenLite.to(currentTan, 0.5, {y:"+=1px"});
            break;
		case 105:
            // 9 key pressed
			TweenLite.to(currentTan, 0.5, {rotation:"+=1"});
            break;
		case 104:
            // 8 key pressed
			TweenLite.to(currentTan, 0.5, {rotation:"-=1"});
            break;
		case 97:
            // Numpad - 1 key pressed
			currentTan = document.getElementById("tan1");
            break;
		case 98:
            // Numpad - 2 pressed
			currentTan = document.getElementById("tan2");
            break;
		case 99:
            // Numpad - 3 key pressed
			currentTan = document.getElementById("tan3");
            break;
		case 100:
            // Numpad - 4 pressed
			currentTan = document.getElementById("tan4");
            break;
		case 101:
            // Numpad - 5 key pressed
			currentTan = document.getElementById("tan5");
            break;
		case 102:
            // Numpad - 6 pressed
			currentTan = document.getElementById("tan6");
            break;
		case 103:
            // Numpad - 7 key pressed
			if (flip==0){
				currentTan = document.getElementById("tan7");
			}
			else {
				currentTan = document.getElementById("tan7f");
			}
            break;
		case 191:
            // question key pressed
			hideBorder();
            break;  
    }   
}
