/*jslint browser: true */
/*global window, Snap */
function init() {
    'use strict';
    console.log("let-og-finn init");
    var s = new Snap("#SVG_let_og_finn");
    var group_active_zones = s.select("#g_active_zones");
    group_active_zones.addClass('show');

    function detectIE() {
        var ua = window.navigator.userAgent;
        /* Test values;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        */
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
        // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
        // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
        // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    var msie_version = detectIE();

    // workaround for browsers not supporting paint-order, namely internet explorer and edge among newer browsers
    if (msie_version !== false) {
        // msie browser detected, apply workaround
        var words = s.selectAll('#g_ord > text, #g_ord > use');
        var wordclones_container = s.select('#g_ord_clones');
        words.forEach(function (el) {
            var use = el.use();
            use.addClass('show');
            wordclones_container.append(use);
        });
    }

    var zones = group_active_zones.selectAll('path');
    zones.forEach(function (el) {
        el.click(function () {
            el.addClass('clicked');
            var t_id = this.attr("id").replace(/^z_/, "#t_");
            var text_el = s.select(t_id);
            text_el.addClass("show action");
            window.setTimeout(function () {
                text_el.removeClass("action");
            }, 710);
        });
    });

    // these will be used to generate visible click-zones (circles) programatically
    zonetargets = [];
    zonetargets[1]  = [{"targetID":"z_romskip","x":-469.2379150390625,"y":-357.9925842285156},{"targetID":"z_katt","x":-138.8475799560547,"y":-378.90338134765625},{"targetID":"z_bjoerk","x":-456.6914367675781,"y":-88.24352264404297},{"targetID":"z_bjoerk","x":-456.6914367675781,"y":-88.24352264404297},{"targetID":"z_hen","x":-659.5260009765625,"y":74.8605728149414},{"targetID":"z_hen","x":-659.5260009765625,"y":74.8605728149414},{"targetID":"z_humle","x":-431.5985107421875,"y":329.97210693359375},{"targetID":"z_humle","x":806.3197021484375,"y":177.32339477539062},{"targetID":"z_selje","x":754.0427856445312,"y":411.5241394042969},{"targetID":"z_selje","x":-730.6226806640625,"y":472.1654052734375},{"targetID":"z_hestehov","x":-222.49069213867188,"y":342.5185546875},{"targetID":"z_krokus","x":-53.11336898803711,"y":198.2341766357422},{"targetID":"z_samir","x":275.1858825683594,"y":327.8810119628906},{"targetID":"z_jenny","x":513.5687866210938,"y":465.8921813964844}];
    zonetargets[2]  = [{"targetID":"z_linerle","x":693.4014892578125,"y":-249.25653076171875},{"targetID":"z_jenny","x":639.0335083007812,"y":233.78250122070312},{"targetID":"z_pinner","x":797.9554443359375,"y":478.4386291503906},{"targetID":"z_froepose","x":306.55206298828125,"y":493.0762023925781},{"targetID":"z_bed","x":-25.92935562133789,"y":444.98138427734375},{"targetID":"z_skilt","x":-205.76206970214844,"y":319.5166931152344},{"targetID":"z_samir","x":78.62454986572266,"y":183.5966339111328},{"targetID":"z_romskip","x":158.08551025390625,"y":-4.600397109985352},{"targetID":"z_hen","x":363.01116943359375,"y":-35.96656799316406},{"targetID":"z_epletre","x":-274.76763916015625,"y":-330.80859375},{"targetID":"z_epletre","x":-274.76763916015625,"y":-330.80859375},{"targetID":"z_blomster","x":-285.2230529785156,"y":-523.187744140625},{"targetID":"z_blomster","x":-285.2230529785156,"y":-523.187744140625},{"targetID":"z_humle","x":220.81785583496094,"y":-546.1896362304688},{"targetID":"z_humle","x":-843.5408935546875,"y":-12.964709281921387},{"targetID":"z_blomst","x":-774.5353393554688,"y":152.23045349121094},{"targetID":"z_linerle","x":-682.5278930664062,"y":223.32711791992188},{"targetID":"z_katt","x":-437.8717346191406,"y":93.6802749633789},{"targetID":"z_bjoerk","x":-774.5353393554688,"y":-456.27325439453125},{"targetID":"z_hvitveis","x":-170.2137451171875,"y":-12.964709281921387},{"targetID":"z_fuglevikke","x":-448.3271179199219,"y":-130.06507873535156},{"targetID":"z_meitemarkbaesj","x":206.18031311035156,"y":160.5947723388672},{"targetID":"z_loevetann","x":348.3736267089844,"y":93.6802749633789},{"targetID":"z_blaabaerblomster","x":-621.8865966796875,"y":413.615234375},{"targetID":"z_roedkloever","x":705.947998046875,"y":3.7639150619506836}];
    zonetargets[3]  = [{"targetID":"z_roedkloever","x":-761.9888305664062,"y":-523.187744140625},{"targetID":"z_regndraape","x":-498.51300048828125,"y":-406.08740234375},{"targetID":"z_gress","x":112.08180236816406,"y":-527.3699340820312},{"targetID":"z_gulroetter","x":680.8550415039062,"y":-347.5372009277344},{"targetID":"z_jord1","x":-122.11894989013672,"y":-159.34017944335938},{"targetID":"z_jord1","x":-122.11894989013672,"y":-159.34017944335938},{"targetID":"z_sneglehus","x":-21.74720001220703,"y":-439.5446472167969},{"targetID":"z_snegle","x":105.80856323242188,"y":-291.0780944824219},{"targetID":"z_ert3","x":91.1710205078125,"y":-136.33831787109375},{"targetID":"z_ert2","x":-327.04461669921875,"y":45.58547592163086},{"targetID":"z_ert1","x":-649.0706176757812,"y":70.67841339111328},{"targetID":"z_rot2","x":199.90707397460938,"y":91.58919525146484},{"targetID":"z_froe","x":354.6468505859375,"y":311.15240478515625},{"targetID":"z_meitemark","x":434.1078186035156,"y":547.4442138671875},{"targetID":"z_jord3","x":-71.93307495117188,"y":578.8103637695312},{"targetID":"z_katt","x":-406.50555419921875,"y":495.1672668457031},{"targetID":"z_samir","x":-584.2471923828125,"y":375.975830078125},{"targetID":"z_jenny","x":-774.5353393554688,"y":246.3289794921875},{"targetID":"z_hen","x":-849.8141479492188,"y":507.7137451171875},{"targetID":"z_romskip","x":-538.2434692382812,"y":277.6951599121094},{"targetID":"z_stein","x":-38.47582244873047,"y":187.77879333496094},{"targetID":"z_vann","x":599.302978515625,"y":290.2416076660156}];
    zonetargets[4]  = [{"targetID":"z_humle","x":-498.51300048828125,"y":-491.82159423828125},{"targetID":"z_humle","x":-291.49627685546875,"y":-184.43312072753906},{"targetID":"z_humle","x":-71.93307495117188,"y":152.23045349121094},{"targetID":"z_humle","x":496.8401794433594,"y":478.4386291503906},{"targetID":"z_humle","x":806.3197021484375,"y":51.85871124267578},{"targetID":"z_humle","x":-617.7044677734375,"y":432.4349365234375},{"targetID":"z_blomsterflue","x":-253.85687255859375,"y":493.0762023925781},{"targetID":"z_haargullbasse","x":162.26766967773438,"y":352.9739685058594},{"targetID":"z_haargullbasse","x":588.8475952148438,"y":-401.9052429199219},{"targetID":"z_prestekrage","x":555.390380859375,"y":-263.8940734863281},{"targetID":"z_geitrams","x":666.2174682617188,"y":-38.057647705078125},{"targetID":"z_blaabaerblomst","x":404.8327331542969,"y":210.7806396484375},{"targetID":"z_meitemarkbaesj","x":229.1821746826172,"y":457.5278625488281},{"targetID":"z_smoerblomst","x":-30.11151123046875,"y":536.9888305664062},{"targetID":"z_fuglevikke","x":-563.33642578125,"y":148.04830932617188},{"targetID":"z_meitemarkbaesj","x":-841.4498291015625,"y":348.79180908203125},{"targetID":"z_roedkloever","x":-730.6226806640625,"y":-297.351318359375},{"targetID":"z_roedkloever","x":-730.6226806640625,"y":-297.351318359375},{"targetID":"z_epleblomst","x":-186.94236755371094,"y":-483.457275390625}];
    zonetargets[5]  = [{"targetID":"z_blaaklokke","x":329.5539245605469,"y":-23.42009925842285},{"targetID":"z_oeye","x":-128.39218139648438,"y":-182.342041015625},{"targetID":"z_antenne","x":-71.93307495117188,"y":-261.8030090332031},{"targetID":"z_tunge","x":-74.02415466308594,"y":-90.33460235595703},{"targetID":"z_bein_med_gult_pollen","x":-322.8624572753906,"y":60.2230224609375},{"targetID":"z_hvit_pels","x":-490.148681640625,"y":-31.784412384033203},{"targetID":"z_svart_pels","x":-471.3289794921875,"y":-115.42753601074219},{"targetID":"z_gul_pels","x":-412.77880859375,"y":-167.70448303222656},{"targetID":"z_bakvinge","x":-481.7843933105469,"y":-224.16360473632812},{"targetID":"z_framvinge","x":-511.0594787597656,"y":-357.9925842285156},{"targetID":"z_pels_med_gult_pollen","x":-222.49069213867188,"y":-272.2583923339844},{"targetID":"z_brodd","x":-475.5111389160156,"y":56.04086685180664}];
    zonetargets[6]  = [{"targetID":"z_erteplante","x":-343.7732238769531,"y":-378.90338134765625},{"targetID":"z_rot","x":-316.5892028808594,"y":-119.60969543457031},{"targetID":"z_rhisobium_bor_i_denne_knollen","x":30.529752731323242,"y":-184.43312072753906},{"targetID":"z_en_gang","x":61.89592361450195,"y":235.8735809326172},{"targetID":"z_kokong","x":498.9312438964844,"y":547.4442138671875},{"targetID":"z_loepebille","x":781.226806640625,"y":478.4386291503906},{"targetID":"z_loepebille","x":-94.9349365234375,"y":476.3475646972656},{"targetID":"z_meitemark_i_hvilerom","x":-502.6951599121094,"y":403.1598205566406},{"targetID":"z_skolopenderen_spiser_en_meitemark","x":714.3123168945312,"y":43.49440002441406},{"targetID":"z_jord2","x":-281.0408935546875,"y":501.44049072265625},{"targetID":"z_jord","x":7.527894020080566,"y":62.31410217285156},{"targetID":"z_jord","x":7.527894020080566,"y":62.31410217285156}];
    zonetargets[7]  = [{"targetID":"z_piggsvin","x":597.2119140625,"y":235.8735809326172},{"targetID":"z_jord","x":482.20263671875,"y":522.3512573242188},{"targetID":"z_aapning_til_meitemarkens_ganger","x":229.1821746826172,"y":501.44049072265625},{"targetID":"z_kuler_hvor_rhisobium_bor","x":68.16915893554688,"y":516.0780639648438},{"targetID":"z_rot","x":-324.9535217285156,"y":447.0724792480469},{"targetID":"z_erteplante","x":-331.22674560546875,"y":200.32525634765625},{"targetID":"z_klatretraader","x":-680.4368286132812,"y":-217.89036560058594},{"targetID":"z_klatretraader","x":-25.92935562133789,"y":-479.2751159667969},{"targetID":"z_klatretraader","x":-113.754638671875,"y":7.946071147918701},{"targetID":"z_klatretraader","x":-634.43310546875,"y":51.85871124267578},{"targetID":"z_baesj_fra_meitemark","x":-115.84571075439453,"y":413.615234375},{"targetID":"z_hodelykt","x":80.71562957763672,"y":319.5166931152344},{"targetID":"z_stjernehimmel","x":519.842041015625,"y":-334.99072265625}]
    zonetargets[8]  = [{"targetID":"z_rakle","x":-697.1654052734375,"y":-456.27325439453125},{"targetID":"z_rakle","x":-416.9609680175781,"y":-450.0000305175781},{"targetID":"z_bjoerkefroe","x":-467.1468200683594,"y":-257.620849609375},{"targetID":"z_epletre","x":-155.57620239257812,"y":-468.8197326660156},{"targetID":"z_epletre","x":-155.57620239257812,"y":-468.8197326660156},{"targetID":"z_rognebaer","x":302.3699035644531,"y":-293.169189453125},{"targetID":"z_rognebaer","x":779.1356811523438,"y":-435.36248779296875},{"targetID":"z_rognebaer","x":266.8215637207031,"y":555.8085327148438},{"targetID":"z_roedkloever","x":149.72120666503906,"y":401.0687561035156},{"targetID":"z_roedkloever","x":549.1171264648438,"y":313.24346923828125},{"targetID":"z_mus","x":570.0278930664062,"y":528.62451171875},{"targetID":"z_blaabaer","x":789.5911254882812,"y":380.157958984375},{"targetID":"z_kast_fra_meitemark","x":91.1710205078125,"y":252.60220336914062},{"targetID":"z_eple","x":-103.29924774169922,"y":497.2583312988281},{"targetID":"z_hagesnegl","x":-281.0408935546875,"y":539.0798950195312},{"targetID":"z_fuglevikke","x":-534.0613403320312,"y":371.7936706542969},{"targetID":"z_geitrams","x":-753.62451171875,"y":135.5018310546875},{"targetID":"z_trost","x":396.4684143066406,"y":-525.2788696289062}];
    zonetargets[9]  = [{"targetID":"z_maake","x":760.3159790039062,"y":-493.91265869140625},{"targetID":"z_blaabaer","x":758.2249145507812,"y":-228.3457489013672},{"targetID":"z_gult_loev","x":731.0408935546875,"y":-27.602256774902344},{"targetID":"z_gult_loev","x":432.0167541503906,"y":246.3289794921875},{"targetID":"z_gult_loev","x":-391.8680114746094,"y":152.23045349121094},{"targetID":"z_baesj_fra_meitemark","x":-406.50555419921875,"y":-157.2490997314453},{"targetID":"z_her_kom_det_erter_boenner_og_gulroetter","x":-197.39776611328125,"y":-259.7119140625},{"targetID":"z_her_kom_det_erter_boenner_og_gulroetter","x":-197.39776611328125,"y":-259.7119140625},{"targetID":"z_ekorn","x":-603.06689453125,"y":-153.0669403076172},{"targetID":"z_geitrams","x":-766.1710205078125,"y":-196.97958374023438},{"targetID":"z_spade","x":-594.7025756835938,"y":292.33270263671875},{"targetID":"z_peanoetter","x":-736.8959350585938,"y":394.7955322265625},{"targetID":"z_skjeer","x":-389.7769470214844,"y":551.6264038085938},{"targetID":"z_suppeboller","x":-299.860595703125,"y":455.4367980957031},{"targetID":"z_sukkererter","x":-57.295528411865234,"y":555.8085327148438},{"targetID":"z_gulroetter","x":53.531612396240234,"y":474.2565002441406},{"targetID":"z_boenner","x":287.73236083984375,"y":490.985107421875},{"targetID":"z_kokeplate","x":120.44611358642578,"y":421.9795227050781},{"targetID":"z_kjele","x":-25.92935562133789,"y":352.9739685058594},{"targetID":"z_suppe","x":-34.29366683959961,"y":296.5148620605469},{"targetID":"z_hermetikkboks","x":597.2119140625,"y":352.9739685058594}];
    zonetargets[10] = [{"targetID":"z_vindu","x":561.66357421875,"y":-544.0985717773438},{"targetID":"z_visne_erteplanter","x":496.8401794433594,"y":-224.16360473632812},{"targetID":"z_mus","x":783.31787109375,"y":-182.342041015625},{"targetID":"z_ert","x":691.3104248046875,"y":-142.61155700683594},{"targetID":"z_ekorn","x":751.9517211914062,"y":196.14309692382812},{"targetID":"z_peanoetter","x":595.120849609375,"y":428.2527770996094},{"targetID":"z_doed_humle","x":434.1078186035156,"y":43.49440002441406},{"targetID":"z_jenny","x":139.26580810546875,"y":-161.43125915527344},{"targetID":"z_samir","x":-107.48139953613281,"y":-148.88478088378906},{"targetID":"z_rognebaerblad","x":-299.860595703125,"y":-113.33645629882812},{"targetID":"z_hen","x":-414.869873046875,"y":-184.43312072753906},{"targetID":"z_graagaas","x":-586.3382568359375,"y":-479.2751159667969},{"targetID":"z_graagaas","x":-170.2137451171875,"y":-523.187744140625},{"targetID":"z_hus","x":239.63755798339844,"y":-416.54278564453125},{"targetID":"z_hus","x":-820.5390625,"y":-433.2713928222656},{"targetID":"z_himmel","x":34.711910247802734,"y":-546.1896362304688},{"targetID":"z_himmel","x":34.711910247802734,"y":-546.1896362304688},{"targetID":"z_katt","x":-260.1300964355469,"y":156.41261291503906},{"targetID":"z_loev","x":-690.8922119140625,"y":64.40518188476562},{"targetID":"z_oerret","x":-230.85501098632812,"y":530.715576171875},{"targetID":"z_is","x":181.08737182617188,"y":415.706298828125},{"targetID":"z_vann","x":105.80856323242188,"y":547.4442138671875}];

}
window.addEventListener("load", init, false);