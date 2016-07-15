// Silhouette DB
var silDb = [
	["Tangram Silhouettes Project", "20160705"],
	["_", "Tangram set", "seven flat shapes, called tans", 400, 100, 0, 100, 100, 0, 100, 400, 0, 500, 400, 0, 300, 400, 0, 100, 600, 0, 300, 600, 0, 0],
	["a001", "Sqare", "shape", 360, 360, 225, 360, 360, 135, 500, 500, 180, 290, 430, 45, 360, 360, 315, 360, 360, 45, 500, 220, 90, 0], 
	["a002", "3 Fish", "fish", 400, 500, 180, 200, 300, 0, 400, 500, 0, 600, 300, 135, 330, 170, 315, 670, 230, 45, 120, 100, 0, 0],
	["a003", "Animal head 001", "animal", 360, 440, 225, 420, 300, 180, 500, 300, 45, 360, 440, 135, 400, 500, 180, 420, 200, 0, 220, 300, 0, 1],
	["a004", "Animal head 002", "animal", 545, 400, 180, 275, 190, 45, 505, 500, 135, 305, 400, 90, 505, 400, 90, 305, 400, 0, 415, 330, 90, 1],
	["a005", "Animal head 003", "animal", 400, 300, 180, 200, 400, 0, 400, 160, 0, 300, 300, 0, 440, 260, 45, 200, 300, 0, 510, 330, 90, 1],
	["a006", "Animal head 004", "animal", 300, 400, 270, 300, 500, 180, 530, 430, 225, 400, 400, 0, 170, 570, 225, 300, 400, 0, 400, 500, 270, 1],
	["a007", "Anvil", "object", 400, 500, 180, 200, 300, 0, 400, 500, 45, 400, 300, 0, 500, 400, 180, 400, 400, 0, 400, 500, 135, 0],
	["a008", "Bart Simpson", "human", 500, 300, 180, 300, 500, 270, 400, 600, 135, 400, 300, 90, 470, 470, 225, 400, 300, 0, 500, 600, 135, 1],
	["a009", "Bud", "object", 355, 540, 224, 350, 60, 45, 400, 300, 225, 200, 400, 270, 500, 400, 180, 300, 300, 0, 400, 300, 135, 1],
	["a010", "Coach", "human", 500, 500, 180, 300, 300, 0, 455, 200, 45, 592, 550, 135, 450, 550, 315, 275, 475, 45, 455, 200, 135, 0],
	["a011", "Coocking pot", "object", 400, 300, 0, 400, 300, 90, 330, 570, 270, 470, 430, 315, 400, 300, 225, 470, 430, 45, 330, 570, 180, 1],
	["a012", "Crawfish 01", "animal", 540, 360, 45, 375, 675, 270, 295, 185, 180, 330, 430, 315, 470, 430, 135, 330, 290, 45, 330, 150, 90, 0],
	["a013", "Crawfish 02", "animal", 400, 200, 90, 260, 540, 225, 600, 200, 225, 300, 400, 270, 300, 300, 90, 400, 300, 0, 600, 200, 45, 1],
	["a014", "Crawfish 03", "animal", 300, 300, 90, 130, 605, 238, 600, 200, 300, 600, 300, 180, 500, 200, 0, 300, 400, 0, 400, 500, 225, 1],
	["a015", "Crawfish 04", "animal", 585, 300, 46, 540, 610, 239, 200, 200, 180, 300, 200, 90, 300, 300, 135, 440, 300, 45, 440, 300, 90, 1],
	["a016", "Crawfish 05", "animal", 635, 225, 45, 595, 540, 239, 160, 200, 180, 260, 200, 90, 460, 300, 360, 360, 300, 0, 260, 200, 45, 0],
	["a017", "Crawfish 06", "animal", 400, 200, 0, 540, 540, 225, 200, 200, 225, 200, 300, 270, 300, 300, 90, 300, 300, 0, 610, 330, 90, 1],
	["a018", "Crawfish 07", "animal", 245, 660, 214, 215, 355, 45, 605, 245, 314, 535, 215, 0, 495, 355, 315, 355, 355, 45, 355, 355, 0, 0],
	["a019", "Crawfish 08", "animal", 595, 495, 90, 300, 670, 300, 260, 160, 251, 400, 400, 180, 330, 230, 135, 330, 230, 45, 500, 500, 135, 1],
	["a020", "Creeping", "animal", 400, 600, 270, 300, 400, 90, 610, 470, 270, 540, 540, 225, 540, 400, 315, 300, 400, 0, 400, 400, 0, 0],
	["a021", "Crown 01", "object", 538, 459, 135, 256, 460, 315, 609, 530, 180, 325, 530, 44, 255, 460, 134, 256, 460, 45, 398, 600, 270, 1],
	["a022", "Crown 02", "object", 600, 600, 180, 200, 600, 270, 500, 500, 135, 400, 400, 181, 400, 500, 90, 300, 400, 0, 400, 300, 45, 0],
	["a023", "Crown 03", "object",  600, 600, 180, 200, 600, 270, 260, 460, 270, 400, 320, 45, 470, 390, 314, 400, 460, 45, 330, 390, 0, 0],
	["a024", "Crown 04", "object", 600, 600, 180, 200, 600, 270, 400, 460, 90, 330, 390, 45, 540, 460, 135, 400, 320, 45, 470, 390, 90, 0],
	["a025", "Cupola", "shape", 400, 500, 315, 400, 500, 135, 400, 500, 45, 500, 400, 180, 400, 400, 0, 400, 260, 45, 400, 500, 225, 0],
	["a026", "Disappointed", "person", 400, 500, 315, 541, 358, 135, 642, 620, 135, 270, 100, 0, 400, 642, 45, 355, 115, 45, 400, 500, 0, 1],
	["a027", "Empty Square", "shape", 398, 62, 45, 398, 648, 225, 640, 404, 135, 255, 305, 180, 255, 405, 90, 155, 305, 0, 540, 204, 45, 0],
	["a028", "Engine driver", "person", 600, 600, 180, 215, 445, 0, 115, 545, 315, 400, 345, 90, 400, 600, 0, 600, 260, 45, 495, 505, 90, 1],
	["a029", "Falcon 01", "bird", 400, 500, 225, 500, 600, 180, 300, 400, 45, 543, 358, 270, 400, 600, 45, 443, 258, 0, 400, 500, 90, 1],
	["a030", "Falcon 02", "bird", 405, 540, 270, 265, 400, 315, 505, 440, 225, 555, 610, 44, 265, 400, 135, 265, 260, 45, 405, 540, 0, 0],
	["a031", "Falcon 03", "bird", 400, 600, 270, 400, 400, 90, 300, 300, 45, 200, 400, 134, 400, 700, 180, 200, 260, 45, 525, 530, 0, 0],
	["a032", "Falcon 04", "bird", 608, 412, 135, 256, 200, 45, 396, 342, 90, 396, 482, 315, 466, 554, 135, 396, 200, 45, 466, 270, 90, 0],
	["a033", "Falcon 05", "bird", 510, 435, 135, 370, 530, 180, 540, 325, 90, 540, 465, 0, 410, 530, 45, 540, 365, 0, 370, 530, 90, 1],
	["a034", "Falling 01", "person", 290, 320, 44, 415, 600, 225, 535, 360, 45, 625, 530, 225, 575, 230, 135, 270, 210, 53, 505, 250, 90, 0],
	["a035", "Falling 02", "person", 500, 300, 90, 380, 430, 90, 300, 300, 45, 600, 200, 0, 400, 200, 270, 555, 55, 45, 600, 200, 134, 0],
	["a036", "Fish with Bubble", "fish", 398, 342, 225, 398, 358, 45, 440, 300, 315, 328, 272, 135, 328, 428, 135, 146, 284, 45, 440, 300, 45, 0],
	["a037", "Flowerpot", "object", 500, 500, 180, 300, 300, 0, 455, 600, 225, 500, 400, 0, 600, 500, 180, 200, 400, 0, 455, 600, 135, 1],
	["a038", "Fortress", "building", 565, 600, 180, 225, 400, 0, 355, 470, 0, 400, 300, 270, 400, 300, 180, 355, 300, 0, 565, 400, 90, 1],
	["a039", "Gentleman 01", "person", 300, 400, 270, 300, 400, 0, 235, 65, 0, 425, 615, 45, 230, 605, 314, 340, 100, 45, 425, 475, 90, 0],
	["a040", "Gentleman 02", "person", 300, 400, 270, 300, 400, 0, 200, 555, 315, 420, 580, 45, 255, 85, 360, 340, 100, 45, 450, 450, 45, 1],
	["a041", "Gentleman 03", "person", 440, 290, 45, 300, 500, 0, 370, 140, 0, 370, 630, 315, 580, 430, 225, 470, 180, 44, 510, 430, 90, 1],
	["a042", "Gentleman 04", "person", 400, 100, 45, 405, 775, 225, 300, 415, 315, 475, 240, 45, 330, 240, 45, 355, 535, 0, 400, 315, 0, 1],
	["a043", "Gentleman with Hat 01", "person", 500, 400, 180, 300, 200, 0, 500, 540, 45, 500, 540, 135, 430, 470, 315, 330, 470, 0, 500, 400, 90, 1],
	["a044", "Gentleman with Hat 02", "person", 510, 410, 135, 500, 200, 90, 340, 100, 45, 298, 343, 315, 368, 412, 135, 300, 200, 45, 540, 200, 135, 1],
	["a045", "Gentleman with Hat 03", "person", 300, 300, 0, 400, 160, 45, 500, 300, 45, 500, 160, 90, 300, 160, 0, 300, 500, 0, 500, 400, 135, 0],
	["a04", "", "", ]
	];



// Tangram Silhouettes Project
// Config Section	
	var silVisBorder = "black";
	var silBorder = "#f4511e";
	var silColour = "#f4511e";
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
	var hideB = 0; //Hide sil border
	var silString = "";

// set default movement - Move
	var flip=0; // flip romboid
	var action = 0;
	var gridWidth = 2;
	var gridHeight = 2;
	var lSnap = true;
	var currentTan = 1;
	Draggable.create("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f", {type:"x,y", edgeResistance:0.65, bounds:"#grid", throwProps:true, liveSnap:lSnap,
		snap: {
			x: function(endValue) {
				return Math.round(endValue / gridWidth) * gridWidth;
			},
				y: function(endValue) {
				return Math.round(endValue / gridHeight) * gridHeight;
			}
    }});


//Info Silhouette
	function infoSil() {
		var t1Rot=document.getElementById("tan1")._gsTransform.rotation.toFixed(0);
		var t2Rot=document.getElementById("tan2")._gsTransform.rotation.toFixed(0);
		var t3Rot=document.getElementById("tan3")._gsTransform.rotation.toFixed(0);
		var t4Rot=document.getElementById("tan4")._gsTransform.rotation.toFixed(0);
		var t5Rot=document.getElementById("tan5")._gsTransform.rotation.toFixed(0);
		var t6Rot=document.getElementById("tan6")._gsTransform.rotation.toFixed(0);
		//simple overlap test
		
		if (flip==0){
			var t7Rot=document.getElementById("tan7")._gsTransform.rotation.toFixed(0);
			silString = "-, -, -, "+
			document.getElementById("tan1")._gsTransform.x +", " +document.getElementById("tan1")._gsTransform.y +", "+t1Rot + ", " +
			document.getElementById("tan2")._gsTransform.x +", " +document.getElementById("tan2")._gsTransform.y +", "+t2Rot + ", " +
			document.getElementById("tan3")._gsTransform.x +", " +document.getElementById("tan3")._gsTransform.y +", "+t3Rot + ", " +
			document.getElementById("tan4")._gsTransform.x +", " +document.getElementById("tan4")._gsTransform.y +", "+t4Rot + ", " +
			document.getElementById("tan5")._gsTransform.x +", " +document.getElementById("tan5")._gsTransform.y +", "+t5Rot + ", " +
			document.getElementById("tan6")._gsTransform.x +", " +document.getElementById("tan6")._gsTransform.y +", "+t6Rot + ", " +
			document.getElementById("tan7")._gsTransform.x +", " +document.getElementById("tan7")._gsTransform.y +", "+t7Rot + ", " + flip;
		}
		else {
			var t7Rot=document.getElementById("tan7f")._gsTransform.rotation.toFixed(0);
			silString = "-, -, -, "+
			document.getElementById("tan1")._gsTransform.x +", " +document.getElementById("tan1")._gsTransform.y +", "+t1Rot + ", " +
			document.getElementById("tan2")._gsTransform.x +", " +document.getElementById("tan2")._gsTransform.y +", "+t2Rot + ", " +
			document.getElementById("tan3")._gsTransform.x +", " +document.getElementById("tan3")._gsTransform.y +", "+t3Rot + ", " +
			document.getElementById("tan4")._gsTransform.x +", " +document.getElementById("tan4")._gsTransform.y +", "+t4Rot + ", " +
			document.getElementById("tan5")._gsTransform.x +", " +document.getElementById("tan5")._gsTransform.y +", "+t5Rot + ", " +
			document.getElementById("tan6")._gsTransform.x +", " +document.getElementById("tan6")._gsTransform.y +", "+t6Rot + ", " +
			document.getElementById("tan7f")._gsTransform.x +", " +document.getElementById("tan7f")._gsTransform.y +", "+t7Rot + ", " + flip;
		}
		
		var mymodal = $('#infoSilModal');
		mymodal.find('.modal-body').text(silString);
		mymodal.modal('show');
	}

// Send silString to the site
	function sendSil() {
		console.log(silString);
		var url = "script/newsil.php"
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		xhr.send(silString);
	}


// Draw silhouette
	function drawSil() {document.getElementById("silName").innerHTML = silDb[indx][1] + ' (' + silDb[indx][2] + ')';
		document.getElementById("silNo").innerHTML = 'No: ' + silDb[indx][0];
		
		TweenLite.to(document.getElementById("tan1"), dur, {x:silDb[indx][3], y:silDb[indx][4], rotation:silDb[indx][5]});
		TweenLite.to(document.getElementById("tan2"), dur, {x:silDb[indx][6], y:silDb[indx][7], rotation:silDb[indx][8]});
		TweenLite.to(document.getElementById("tan3"), dur, {x:silDb[indx][9], y:silDb[indx][10], rotation:silDb[indx][11]});
		TweenLite.to(document.getElementById("tan4"), dur, {x:silDb[indx][12], y:silDb[indx][13], rotation:silDb[indx][14]});
		TweenLite.to(document.getElementById("tan5"), dur, {x:silDb[indx][15], y:silDb[indx][16], rotation:silDb[indx][17]});
		TweenLite.to(document.getElementById("tan6"), dur, {x:silDb[indx][18], y:silDb[indx][19], rotation:silDb[indx][20]});
		if (silDb[indx][24]==0){
			flip=0;
			document.getElementById("tan7").setAttribute("fill", silColour);
			document.getElementById("tan7").setAttribute("stroke", silBorder);
			document.getElementById("tan7f").setAttribute("fill", "none");
			document.getElementById("tan7f").setAttribute("stroke", "none");
			TweenLite.to(document.getElementById("tan7"), dur, {x:silDb[indx][21], y:silDb[indx][22], rotation:silDb[indx][23]});
		} else {
			flip=1;
			document.getElementById("tan7f").setAttribute("fill", silColour);
			document.getElementById("tan7f").setAttribute("stroke", silBorder);
			document.getElementById("tan7").setAttribute("fill", "none");
			document.getElementById("tan7").setAttribute("stroke", "none");
			TweenLite.to(document.getElementById("tan7f"), dur, {x:silDb[indx][21], y:silDb[indx][22], rotation:silDb[indx][23]});
		}
		
	}

// Hide	- Show border
	function hideBorder() {
		if ( hideB==0){
			silBorder = silVisBorder;
			hideB=1;
		}
		else {
			silBorder = "#f4511e";
			hideB=0;
		}
		document.getElementById("tan1").setAttribute("stroke" , silBorder);
		document.getElementById("tan2").setAttribute("stroke" , silBorder);
		document.getElementById("tan3").setAttribute("stroke" , silBorder);
		document.getElementById("tan4").setAttribute("stroke" , silBorder);
		document.getElementById("tan5").setAttribute("stroke" , silBorder);
		document.getElementById("tan6").setAttribute("stroke" , silBorder);
		if (flip==0){
			document.getElementById("tan7").setAttribute("stroke" , silBorder);
			document.getElementById("tan7").setAttribute("fill", silColour);
		} else {
			document.getElementById("tan7f").setAttribute("stroke" , silBorder);
			document.getElementById("tan7f").setAttribute("fill", silColour);
		}
		document.getElementById("tan1").setAttribute("fill", silColour);
		document.getElementById("tan2").setAttribute("fill", silColour);
		document.getElementById("tan3").setAttribute("fill", silColour);
		document.getElementById("tan4").setAttribute("fill", silColour);
		document.getElementById("tan5").setAttribute("fill", silColour);
		document.getElementById("tan6").setAttribute("fill", silColour);
		
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
	// console.log("SilNo-"+indx)
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

// Start slideshow on load
		function startMe() {
			nextSil();
			sld = 1;
			slideShow();
		}
	
// Move - Rotate tans
		function moveRotate() {
			if (action==1) {
				// Move
				action=0;
				document.getElementById("actBtn").innerHTML='<i class="glyphicon glyphicon-move"></i>';
				Draggable.get("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f").disable();
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
				Draggable.get("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f").disable();
				Draggable.create("#tan1,#tan2,#tan3,#tan4,#tan5,#tan6,#tan7,#tan7f", {type: "rotation", bounds:{minRotation:0, maxRotation:360}, throwProps: true});
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
		document.getElementById("tan7f").setAttribute("fill", document.getElementById("tan7").getAttribute("fill"));
		document.getElementById("tan7f").setAttribute("stroke", document.getElementById("tan7").getAttribute("stroke"));
		document.getElementById("tan7").setAttribute("fill", "none");
		document.getElementById("tan7").setAttribute("stroke", "none");
	} else{
		// hide tan7f, show tan7
		flip=0;
		document.getElementById("tan7").setAttribute("fill", document.getElementById("tan7f").getAttribute("fill"));
		document.getElementById("tan7").setAttribute("stroke", document.getElementById("tan7f").getAttribute("stroke"));
		document.getElementById("tan7f").setAttribute("fill", "none");
		document.getElementById("tan7f").setAttribute("stroke", "none");
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
	}
	else {
		document.getElementById("actBtn").className += " disabled";
		document.getElementById("actBtn").removeAttribute('onclick');
		document.getElementById("flipBtn").className += " disabled";
		document.getElementById("flipBtn").removeAttribute('onclick');
	}
}

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
	}
	else {
		document.getElementById("hideBtn").className += " disabled";
		document.getElementById("hideBtn").removeAttribute('onclick');
		hideB = 1; 
		hideBorder();
	}
}

// Keyboard	
window.addEventListener("keydown", checkKeys, false);
function checkKeys(e) {
    switch(e.keyCode) {
        case 37:
			// left key pressed
			prevSil();
            break;
        case 38:
            // up key pressed
			infoSil();
            break;
        case 39:
            // right key pressed
			nextSil();
            break;
        case 70:
            // f key pressed
			flipRomboid();
            break;
		case 88:
            // x key pressed
			moveRotate();
            break;
		case 65:
            // a key pressed
			TweenLite.to(currentTan, 0.5, {x:"+=1px"});
            break;
		case 83:
            // s key pressed
			TweenLite.to(currentTan, 0.5, {y:"+=1px"});
            break;
		case 97:
            // Numpad - 1 key pressed
			currentTan = document.getElementById("tan1");
            break;
		case 98:
            // Numpad - down key pressed
			currentTan = document.getElementById("tan2");
            break;
		case 99:
            // Numpad - 3 key pressed
			currentTan = document.getElementById("tan3");
            break;
		case 100:
            // Numpad - left key pressed
			currentTan = document.getElementById("tan4");
            break;
		case 101:
            // Numpad - 5 key pressed
			currentTan = document.getElementById("tan5");
            break;
		case 102:
            // Numpad - right key pressed
			currentTan = document.getElementById("tan6");
            break;
		case 103:
            // Numpad - 7 key pressed
			currentTan = document.getElementById("tan7");
            break;
		case 104:
            // Numpad - up key pressed
			currentTan = document.getElementById("tan7f");
            break;
		case 191:
            // question key pressed
			hideBorder();
            break;  
    }   
}
