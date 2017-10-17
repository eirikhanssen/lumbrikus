var svg = document.querySelector("#SVG_let_og_finn");
var pt = svg.createSVGPoint();

function cursorPoint(e) {
    pt.x = e.clientX; 
    pt.y = e.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
}

function makeFunc_svgWord() {
	var svgWords = {};
	svgWords.words = "";
	svgWords.zones = "";
	svgWords.add = function(e) {
		var cursorpt = cursorPoint(e,e.target);
		var coords_text = document.querySelector("#coords");
		var word = prompt("sett inn ord", "___");
		var idword = word.replace(/æ/gi, 'ae').replace(/ø/gi, 'oe').replace(/å/gi, 'aa').replace(/\s+/g,'_').toLocaleLowerCase();
		this.words = this.words + "\n\t" + '<text class="ord" id="t_' + idword +  '" x="' + Math.round(cursorpt.x) + '" y="' + Math.round(cursorpt.y) + '" dy="20">' + word  + '</text>';
		this.zones = this.zones + "\n\t" + '<path id="z_' + idword  + '" d=""></path>';

	}

	svgWords.list = function() {
		var output = '<g id="g_active_zones" class="active_zones">';
		output = output + this.zones + "\n</g>";
		output = output + "\n\n" + '<g id="g_ord">';
		output = output + this.words + "\n</g>";
		console.log(output);
	}

	function svgWord(e) {
		switch(e.which) {
			case 1:
				svgWords.add(e);
			break;
			case 2:
				svgWords.list();
			break;
			default:
			break;
		}
	}

	return svgWord;
}

var svgWord = makeFunc_svgWord();

svg.addEventListener("mousedown",svgWord, false);
