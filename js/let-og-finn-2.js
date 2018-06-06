function create_interaction_points(cp) {
    /* draw a dot at coordinates, then a line to a crontrol circle. 
     * Add text, and make it appear when user clicks.
     * Argument "cp" is an array of control points.
     * 
            x: x-coord of dot in figure
            y: y-coord of dot in figure
            txt: textual explanation/word
            d: distance in px from dot in figure to user control circle
            t: time in decimal numbers from 0-12 - the direction the control circle should be placed

            example cp array:
            var cp = [
                {x:400, y:400, txt: "bumblebee", d:200, t:11},
                {x:0, y:0, txt: "crocus", d:250, t:1}
            ]
        */
    
    // USER CONFIG
    var control_circle_radius = 36;
    var control_circle_behind_radius = 36;
    var origin_circle_radius = 5;
    var origin_circle_behind_radius = 7;
    var pad = 10;
    var enable_getcoords = true;

    // SCRIPT VARS
    var svgdoc = document.querySelector("#SVG_let_og_finn");
    var svgroot = Snap("#SVG_let_og_finn");
    var svgNS = "http://www.w3.org/2000/svg";
    var PI = Math.Pi;

    // add a <g id="controls"></g> to svg document
    var controls = svgroot.g();
    controls.attr({id: "controls"});

    // FUNCTIONS

    if(enable_getcoords == true) {
        pt = svgdoc.createSVGPoint();

        cursorPoint = function (e) {
            pt.x = e.clientX; 
            pt.y = e.clientY;
            return pt.matrixTransform(svgdoc.getScreenCTM().inverse());
        }

        function log_coords(e){
            //{x:0, y:0, txt: "sentrum", d:500, t:7}
            console.log("{x:" + Math.round(cursorPoint(e).x) + ", y:" + Math.round(cursorPoint(e).y) + ", txt:\"\", d:0, t:0}");
        }

        svgdoc.addEventListener("click",log_coords, false);
    }

    function get_x_offset(dist, time) {
        var x_multiplier = Math.cos(Math.PI * (time / 3 - 1) / 2);
        return Math.round(dist * x_multiplier);
    }

    function get_y_offset(dist, time) {
        var y_multiplier = Math.sin(Math.PI * (time / 3 - 1) / 2);
        return Math.round(dist * y_multiplier);
    }

    for (let p of cp) {
        //var offset_y = -1 * p.d * Math.sin((((p.t*4)-1)/2)*PI);
        //var offset_x = p.d * Math.cos((((p.t*4)-1)/2)*PI);
        //console.log(offset_x + " ," + offset_y);

        var offset_x = get_x_offset(p.d, p.t);
        var offset_y = get_y_offset(p.d, p.t);

        console.log(offset_x + " , " + offset_y);

        // add a new group to g#controls
        var cg = controls.g();
        //cg.attr({transform: "translate(offset_x, offset_y)"});
        cg.attr({
            class: "control-group",
            transform: "translate(" + offset_x + "," + offset_y + ")"
        });
        cg.click(function (e) {
            var target = e.target;
            console.log(target);
            this.toggleClass("show");
        });

        var control_circle_behind = cg.circle(p.x, p.y, control_circle_behind_radius);
        control_circle_behind.attr({
            class: "control_behind"
        });

        var control_circle = cg.circle(p.x, p.y, control_circle_radius);
        control_circle.attr({
            class: "control"
        });

        var textgroup = cg.g();
        textgroup.attr({
            class: "desc"
        });

        var txt_el = textgroup.text(p.x, p.y);
        var tspan_el = document.createElementNS(svgNS, 'tspan');
        tspan_el.setAttribute('dy', '.35em');
        var t = document.createTextNode(p.txt);
        tspan_el.appendChild(t);
        txt_el.append(tspan_el);
        var text_el_bbox = txt_el.getBBox();

        var text_bg = cg.rect(text_el_bbox.x - 2 * pad, text_el_bbox.y - 2*pad, text_el_bbox.w + 4 * pad, text_el_bbox.h + 4 * pad);
        text_bg.attr({
            rx: 4 * pad,
            ry: 4 * pad
        });
        txt_el.before(text_bg);

        if(p.d > control_circle_behind_radius){
            var origin_group = cg.g();
            control_circle.before(origin_group);
            origin_group.attr({
                class: "origin"
            });
    
            var origin_line = origin_group.line(p.x - get_x_offset(control_circle_radius, p.t), p.y - get_y_offset(control_circle_radius, p.t), p.x - offset_x + get_x_offset(origin_circle_radius, p.t), p.y - offset_y + get_y_offset(origin_circle_radius, p.t));
            origin_line.attr({
                class: "origin"
            });
    
            var origin_behind_circle = origin_group.circle(p.x - offset_x, p.y - offset_y, origin_circle_behind_radius);
            origin_behind_circle.attr({
                class: "origin_behind"
            });
    
            var origin_circle = origin_group.circle(p.x - offset_x, p.y - offset_y, origin_circle_radius);
            origin_circle.attr({
                class: "origin"
            });
    
            origin_group.after(control_circle_behind);
        }
        
        
    }
}
