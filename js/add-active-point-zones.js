function init(){
	console.log("add-active-point-zones.js init");
	var svg, pt, cursorPoint;
	svg = document.querySelector("#SVG_let_og_finn");
	s = Snap("#SVG_let_og_finn");
	pt = svg.createSVGPoint();

	cursorPoint = function (e) {
		pt.x = e.clientX; 
		pt.y = e.clientY;
		return pt.matrixTransform(svg.getScreenCTM().inverse());
	}

	function makeFunc_svg_point_zones() {
		var svgPointZones = {};
		svgPointZones.lastID = "";
		svgPointZones.zones = [];
		
		svgPointZones.getTargetZoneID = function(e) {
			//console.log("svgPointZones.getTargetZoneID");
			svgPointZones.lastID = e.target.id;
			console.log(svgPointZones.lastID);
		}
	
		svgPointZones.getInternalCoordinate = function(e) {
			//console.log("svgPointZones.getInternalCoordinate");
			var cursorpt = cursorPoint(e,e.target);
			var zone = {
				targetID : svgPointZones.lastID,
				x: cursorpt.x,
				y: cursorpt.y
			}
			svgPointZones.zones.push(zone);
			//console.log(JSON.stringify(zone));
		}
	
		var svgPointZonesFunc = function(e) {
			//console.log("function svgPointZones(e)");
			//console.log(e.target);
			switch(e.which) {
				case 1:
					svgPointZones.getTargetZoneID(e);
				break;
				case 2:
					svgPointZones.getInternalCoordinate(e);
				break;
				case 3:
					console.log(JSON.stringify(svgPointZones.zones));
				break;
				default:
				break;
			}
		}
	
		return svgPointZonesFunc;
	}

	var svgPointZones = makeFunc_svg_point_zones();
	svg.addEventListener("mousedown",svgPointZones, false);
	s.select("#g_active_zones path").mousedown(svgPointZones);
}

window.addEventListener("load", init, false);