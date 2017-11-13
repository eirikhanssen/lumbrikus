#!/usr/bin/python3
from subprocess import run, call
import subprocess
import re

html_start = """<!doctype html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>lumbrikus-symbol-icons</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <link rel="stylesheet" href="symbols.css">
</head>
<body>
<h1>lumbrikus-symbol-icons.svg</h1>
<h2>Markup for å bruke ikoner:</h2>
<p><code id="use-markup">Trykk på teksten under ikonet for å få koden til å bruke ikonet.</code></p>
"""

html_end="""
<script>
window.addEventListener("load", init, false);
function closestNodeOfType(originNode, targetNodeName) {
    var p,
    iteration,
    max = 100;
    
    if (originNode.nodeName.toLowerCase() === targetNodeName.toLowerCase()) {
        return originNode;
    }
    var p = originNode.parentNode;
    do {
        iteration = iteration + 1;
        if (p.nodeName.toLowerCase() === targetNodeName.toLowerCase()) {
            return p;
        }
        if(p.nodeName.toLowerCase() === 'html') {
            return null;
            console.log(targetNodeName + " not found. Reached 'html'.");
        }
        if(iteration >= max) {
            return null;
            console.log("Aborting loop before " + targetNodeName + " was found. Max iteration count was reached: " + max);
        }
        
        p = p.parentNode;

    } while (true);
}

function showMarkup(e) {
    var target = e.target;
    var svg = closestNodeOfType(target, 'li').querySelector('svg');
    document.querySelector("#use-markup").textContent = svg.outerHTML;
}

function init() {
    var icons = document.querySelectorAll('.icons li');
    for(var i = 0, len = icons.length; i< len; i++) {
        icons[i].setAttribute('tabindex',"0");
        icons[i].addEventListener("click", showMarkup, false);
        icons[i].addEventListener("focus", showMarkup, false);
    }
}
</script>
</body>
</html>"""

result = run(["saxon", "lumbrikus-symbol-icons.svg", "symbol-to-use.xsl"], stdout=subprocess.PIPE)
symbol_markup = result.stdout.decode('utf-8')
r_namespaces = re.compile("\s*xmlns.*?1999/xlink\"")
symbol_markup = re.sub(r_namespaces,"",symbol_markup)

call(["touch", "symbols.html"])
with open("symbols.html", "w") as output_file:
    output_file.truncate(0)
    output_file.write(html_start)
    output_file.write(symbol_markup)
    output_file.write(html_end)
print("done")

