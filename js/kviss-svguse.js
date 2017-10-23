// A $( document ).ready() block.
$( document ).ready(function() {
    function quiz() {
        console.log("quiz()");
        var quizzies = [];
        
        var quiz01 = {
            title: "Kapittel 1 kviss",
            q_and_a: [
                {
                    spm: "Hvem er dette?",
                    bilde: "/media/img/kviss_jenny_hode.jpg",
                    bildetekst: "Ei jente med blondt hår. Hun har en hodelykt på seg.",
                    svaralternativer: [
                        "Herr Høne",
                        "Jenny",
                        "Sobia"
                    ],
                    riktige_svar: ["Jenny"],
                    forklaring: "Jenny er jenta med blondt hår."
                },
                {
                    spm: "Hvem er dette <em>ikke</em>?",
                    bilde: "/media/img/kviss_jenny_hode.jpg",
                    bildetekst: "Ei jente med blondt hår. Hun har en hodelykt på seg.",
                    svaralternativer: [
                        "Herr Høne",
                        "Jenny",
                        "Sobia"
                    ],
                    riktige_svar: ["Herr Høne", "Sobia"],
                    forklaring: "Jenny er jenta med blondt hår. Har du sett de andre i fortellingen?"
                },
                {
                    spm: "Hvem er dette?",
                    bilde: "/media/img/kviss_samir_hode.jpg",
                    bildetekst: "En gutt med brunt, krøllete hår. Han har en hodelykt på seg.",
                    svaralternativer: [
                        "Ivar",
                        "Kattepus",
                        "Samir"
                    ],
                    riktige_svar: ["Samir"],
                    forklaring: "Samir er gutten med de brune krøllene."
                },
                {
                    spm: "Hvem er dette?",
                    bilde: "/media/img/kviss_hen.jpg",
                    bildetekst: "Hvem har rødt hår, lilladrakt, grønt ansikt og katte-ører. ",
                    svaralternativer: [
                        "Afrika",
                        "Hen",
                        "Kim"
                    ],
                    riktige_svar: ["Hen"],
                    forklaring: "Hen er hun som kan gjøre alle små."
                },
                {
                    spm: "Hvem er dette?",
                    bilde: "/media/img/kviss_katt.jpg",
                    bildetekst: "En gul og orangestripete katt med belte og sko.",
                    svaralternativer: [
                        "Tiger",
                        "Den farlige løven",
                        "Katt"
                    ],
                    riktige_svar: ["Katt"],
                    forklaring: "Katten heter ganske riktig Katt!"
                },
                {
                    spm: "Hvor kommer romskipet fra?",
                    bilde: "/media/img/kviss_romskip.jpg",
                    bildetekst: "Ei kule. Den likner på ei gigantisk perle.",
                    svaralternativer: [
                        "Sverige",
                        "En planet ved Proxima Centauri",
                        "Kairo"
                    ],
                    riktige_svar: ["En planet ved Proxima Centauri"],
                    forklaring: "En planet ved Proxima Centauri"
                },
                {
                    spm: "Hvorfor kom romskipet til jorda?",
                    bilde: "/media/img/kviss_romskip.jpg",
                    bildetekst: "Ei kule. Den likner på ei gigantisk perle.",
                    svaralternativer: [
                        "Katt og Hen vil spise fisk",
                        "De vil gå på kino",
                        "Vi veit ikke"
                    ],
                    riktige_svar: ["Vi veit ikke"],
                    forklaring: "Kanskje du får vite senere?"
                },
                {
                    spm: "Hvor mange språk kan Hen og Katt forstå?",
                    bilde: "/media/svg/lumbrikus-icons.svg#undring",
                    bildetekst: "Det gule smilehodet lurer på noe.",
                    svaralternativer: [
                        "Engelsk og norsk",
                        "Arabisk og norsk",
                        "Alle språk i hele verden"
                    ],
                    riktige_svar: ["Alle språk i hele verden"],
                    forklaring: "De har avansert teknologi med seg fra der de kommer fra."
                },
                {
                    spm: "Hva er det gule støvet?",
                    bilde: "/media/img/kviss_krokus_eystein_ness.jpg",
                    bildetekst: "En lilla krokus. Inne i blomsten er det gult støv. Foto: Eystein Ness",
                    svaralternativer: [
                        "Maling",
                        "Mel",
                        "Blomsterstøv (pollen)"
                    ],
                    riktige_svar: ["Blomsterstøv (pollen)"],
                    forklaring: "Støvet kommer fra blomsten og setter seg på humla."
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/media/img/kviss_humle.jpg",
                    bildetekst: "Et loddent insekt med hvite, gule og svarte hår. Det har 6 bein og to par vinger",
                    svaralternativer: [
                        "Ei mus",
                        "En fugl",
                        "Ei humle"
                    ],
                    riktige_svar: ["Ei humle"],
                    forklaring: "Det er ei humle. Humla likner litt på ei bie, men den er rundere og har lang pels."
                },
                {
                    spm: "Hva er en gul hestehov?",
                    bilde: "/media/img/kviss_gul_hestehov.jpg",
                    bildetekst: "Gul som ei sol og liten der den vokser opp fra bakken",
                    svaralternativer: [
                        "En hest",
                        "Et hode",
                        "En gul blomst"
                    ],
                    riktige_svar: ["En gul blomst"],
                    forklaring: "Hestehov kan bety hoven til en hest, men her er det navnet på en blomst."
                },
                {
                    spm: "Selja har noe som humla liker. Hva er det?",
                    bilde: "/media/img/kviss_selje_hannblomst.jpg",
                    bildetekst: "En blomst som vokser på et seljetre.",
                    svaralternativer: [
                        "Pent hår",
                        "Nektar og pollen",
                        "Den sier ja ja"
                    ],
                    riktige_svar: ["Nektar og pollen"],
                    forklaring: "I blomstene til selja finner humla det den liker. Noe som er søtt, og noe som er gult."
                },
                {
                    spm: "Hva er nektar",
                    bilde: "/media/svg/lumbrikus-icons.svg#undring",
                    bildetekst: "Et smileansikt som lurer på hva dette kan være.",
                    svaralternativer: [
                        "Søt saft som humla spiser",
                        "En gutt som nekter å spise is",
                        "En avatar"
                    ],
                    riktige_svar: ["Søt saft som humla spiser"],
                    forklaring: "En person som nekter å gjøre noe kan kalles 'en nekter', på noen dialekter kan det blir 'ein nektar'. Men her mener vi ikke det. Nektar er navnet på noe søtt."
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/media/img/kviss_selje_hannblomst.jpg",
                    bildetekst: "Grønt inni, med lange hvite stilker som stikker ut. Så er det noen dråper inni også.",
                    svaralternativer: [
                        "Godteri for Jenny og Samir",
                        "En kost til å feie med",
                        "En hannblomst fra selja"
                    ],
                    riktige_svar: ["En hannblomst fra selja"],
                    forklaring: "En hannblomst fra selja. En hunn-selje har blomster som ser annerledes ut."
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/media/img/kviss_pollenbarere.jpg",
                    bildetekst: "Lange hvite stilker stikker ut. På tuppene har de gule knopper.",
                    svaralternativer: [
                        "Pollen-bærere",
                        "Hockey-køller",
                        "Kjærlighet på pinne"
                    ],
                    riktige_svar: ["Pollen-bærere"],
                    forklaring: "Det er noe som vokser på blomsten til hann-selja, som vi ser bedre hvis vi ser på den med forstørrelsesglass."
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/media/img/kviss_selje_hunnblomst.jpg",
                    bildetekst: "En blomst som er delt i to på langs. Grønt og hårete. Det ser ut som mange små grønne bananer vokser her.",
                    svaralternativer: [
                        "Små grønne bananer",
                        "Hunnblomstene til selja",
                        "En tannbørste"
                    ],
                    riktige_svar: ["Hunnblomstene til selja"],
                    forklaring: "Dette er hunnblomstene, de er annerledes enn hannblomstene til selja."
                },
                {
                    spm: "Hvilken årstid er det hos Jenny og Samir",
                    bilde: "/media/img/kviss_vaar.jpg",
                    bildetekst: "Det er ikke blader på greinene til trærne enda. Det begynner å bli grønt ute.",
                    svaralternativer: [
                        "Vinter",
                        "Vår",
                        "Sommer"
                    ],
                    riktige_svar: ["Vår"],
                    forklaring: "Årstiden når det skifter fra kaldt til litt varmere og begynner å spire og gro begynner på 'v' og heter..."
                }
            ]
        };

        var quiz06 = {
            title: "Kapittel 6 kviss",
            q_and_a: [
                {
                    spm: "Hva er meitemark?",
                    bilde: "/media/img/kviss_meitemark_ruller_seg.jpg",
                    bildetekst: "Tegning av en rosa meitemark som krøller seg sammen",
                    svaralternativer: [
                        "Et insekt",
                        "Et dyr",
                        "En fisk"
                    ],
                    riktige_svar: ["Et dyr"],
                    forklaring: "Meitemarken er et ledd-dyr. Leddene gjør at den kan strekke seg ut og krype sammen. På den måten kan den bevege seg i jorda."
                },
                {
                    spm: "Hvordan puster meitemark?",
                    bilde: "/media/img/kviss_meitemark_innmat.jpg",
                    bildetekst: "Tegning av hvordan enden på en maitemark ser ut inni",
                    svaralternativer: [
                        "Med lunger som mennesker",
                        "Med huden",
                        "Med munnen"
                    ],
                    riktige_svar: ["Med huden"],
                    forklaring: "Meitemarken puster med huden, og tar oksygen fra vann. Meitemarken kan derfor ikke leve uten vann."
                },
                {
                    spm: "Hva spiser grå-meitemarken?",
                    bilde: "/media/img/kviss_meitemark_graameitemark.jpg",
                    bildetekst: "Tegning av en rosa meitemark",
                    svaralternativer: [
                        "Mest jord",
                        "Bananer",
                        "Fluer"
                    ],
                    riktige_svar: ["Mest jord"],
                    forklaring: "Grå-meitemarken spiser jord. De lager mange ganger i jorda."
                },
                {
                    spm: "Hvem vil spise meitemark?",
                    bilde: "/media/img/kviss_trost.jpg",
                    bildetekst: "Tegning av et dyr med grå og brune fjær",
                    svaralternativer: [
                        "Piggsvin og frosk",
                        "Skolopenderne",
                        "Fugler"
                    ],
                    riktige_svar: ["Piggsvin og frosk", "Skolopenderne", "Fugler"],
                    forklaring: "Meitemark er god mat for piggsvin, frosk, skolopendere og fugler. Padder, store biller og rever liker også å spise meitemark "
                },
                {
                    spm: "Hvor lang er skolopenderen?",
                    bilde: "/media/img/kviss_skolopender_oppdager.jpg",
                    bildetekst: "Tegning av en oransje skolopender med mange bein",
                    svaralternativer: [
                        "Som en ny blyant",
                        "En meter",
                        "Som en lillefinger"
                    ],
                    riktige_svar: ["Som en lillefinger"],
                    forklaring: "En skolopender er lang og tynn, og vanligvis omtrent like stor som en lillefinger. Selv om den bare er like stor som en lillefinger, har den 15 ledd og 30 bein."
                },
                {
                    spm: "Hvem er Lumbricus terrestris?",
                    bilde: "/media/img/kviss_meitemark_graameitemark.jpg",
                    bildetekst: "Den er rosa og ganske lang.",
                    svaralternativer: [
                        "Ei høne som legger egg",
                        "En hund som heter terrier",
                        "Stor-meitemarken"
                    ],
                    riktige_svar: ["Stor-meitemarken"],
                    forklaring: "Lumbricus terrestris er det latinske navnet til stor-meitemarken. Det er den største marken i Norge."
                },
                {
                    spm: "Hvor lang kan stor-meitemarken bli?",
                    bilde: "/media/img/kviss_samir_holder_ut_hendene_sine.jpg",
                    bildetekst: "Tegning av Samir som strekker ut armene sine",
                    svaralternativer: [
                        "Som halve armen min",
                        "Som nesa mi",
                        "Som hele meg"
                    ],
                    riktige_svar: ["Som halve armen min"],
                    forklaring: "Stor-meitemarken kan bli 30 cm lang. Det er like langt som halve armen din. Stor-meitemarken kan lage ganger som går to til tre meter nedover."
                },
                {
                    spm: "Hva spiser stor-meitemarken?",
                    bilde: "/media/img/kviss_ekorn.jpg",
                    bildetekst: "Tegning av et brunt dyr med bustete hale",
                    svaralternativer: [
                        "Ekorn",
                        "Gammelt løv",
                        "Epler i trærne"
                    ],
                    riktige_svar: ["Gammelt løv"],
                    forklaring: "Det er bilde av et ekorn. Men det spiser ikke meitemarken! Stor-meitemarken kan spise jord, men den liker best å finne mat på bakken. Der ligger det bløtt løv som er begynt å råtne litt."
                },
                {
                    spm: "Bæsjen til meitemarken er:",
                    bilde: "/media/img/kviss_meitemark_kast.jpg",
                    bildetekst: "Tegning av mange svarte klumper so ligger tett sammen",
                    svaralternativer: [
                        "Giftig",
                        "Fin for planter som vokser",
                        "God i suppa"
                    ],
                    riktige_svar: ["Fin for planter som vokser"],
                    forklaring: "Meitemark kan spise 25 tusen kilo med jord på ett år. Så bæsjer den ut jorda igjen. Da er jorda enda finere. Meitemark kan forandre jorda fordi de er så mange.  "
                },
                {
                    spm: "Et annet ord for meitemarkens bæsj, er:",
                    bilde: "/media/img/kviss_meitemark_spiser_og_driter.jpg",
                    bildetekst: "Tegning av en meitemark som spiser et blad. Bak meitemarken er det bæsj.",
                    svaralternativer: [
                        "Kast",
                        "Rosa rugosa",
                        "Brun-bjørn"
                    ],
                    riktige_svar: ["Kast"],
                    forklaring: "Kast er det riktige svaret."
                },
                {
                    spm: "Hva gjør store meitemarker om vinteren?",
                    bilde: "/media/img/kviss_meitemark_ruller_seg.jpg",
                    bildetekst: "Tegning av en rosa meitemark som krøller seg sammen",
                    svaralternativer: [
                        "De dør",
                        "De ligger i dvale nede i jorda",
                        "De kryper til varme land om høsten"
                    ],
                    riktige_svar: ["De ligger i dvale nede i jorda"],
                    forklaring: "Når det blir kaldt, tetter meitemarken åpningen sin med løv, småstein og barnåler. Så krøller den seg sammen i hvilerommet sitt og sover til våren kommer."
                },
                {
                    spm: "Hvor lang tid tar det å lage 10 centimeter med jord?",
                    bilde: "/media/img/kviss_linjal_10cm.jpg",
                    bildetekst: "Bilde av en gul linjal",
                    svaralternativer: [
                        "10 år",
                        "100 år",
                        "1000 år"
                    ],
                    riktige_svar: ["1000 år"],
                    forklaring: "Det tar ca 10 år å lage en millimeter med jord, eller 100 år å lage 1cm med jord."
                },
                {
                    spm: "Er meitemarken jente eller gutt?",
                    bilde: "/media/img/kviss_to_meitemarker_parer_seg.jpg",
                    bildetekst: "Tegning av to meitemark",
                    svaralternativer: [
                        "Den er jente",
                        "Den er gutt",
                        "Den er begge deler"
                    ],
                    riktige_svar: ["Den er begge deler"],
                    forklaring: "En meitemark er både jente og gutt. Både hunn og hann. Alle har egg-celler. Alle har sæd-celler."
                },
                {
                    spm: "Hva kan meitemarken lage med det rosa beltet?",
                    bilde: "/media/img/kviss_meitemark_graameitemark.jpg",
                    bildetekst: "Tegning av en rosa meitemark",
                    svaralternativer: [
                        "En pose for babyer som heter kokong",
                        "Pynt til meitemarkenes konge",
                        "Lue til gjøken som synger ko-ko"
                    ],
                    riktige_svar: ["En pose for babyer som heter kokong"],
                    forklaring: "Inni posen smelter sædceller sammen med eggveller. Det betyr befruktning. Da kan det bli små mark i eggene. Marken lever i kokongen til de kommer ut."
                },
                {
                    spm: "Tåler meitemark lys fra sola?",
                    bilde: "/media/img/kviss_sun.jpg",
                    bildetekst: "Sola er varm",
                    svaralternativer: [
                        "Nei",
                        "Ja, litt sol",
                        "Ja, veldig mye sol"
                    ],
                    riktige_svar: ["Nei"],
                    forklaring: "Den liker at det er fuktig."
                },
                {
                    spm: "Hvor lenge har meitemarken laget jord på jordkloden?",
                    bilde: "/media/img/kviss_earth.jpg",
                    bildetekst: "Fra verdensrommet ser vi den blå jordkloden vår.",
                    svaralternativer: [
                        "I tusen år",
                        "En million år",
                        "150 millioner år"
                    ],
                    riktige_svar: ["150 millioner år"],
                    forklaring: "Meitemarken har laget jord på jordkloden i 150 millioner år. Den har spist jorda på jordkloden flere ganger. Helt siden dinosaurene gikk omkring."
                }
            ]
        };
        

        /* Add the different quizzies in one array */
        quizzies[1] = quiz01;
        quizzies[6] = quiz06;

        /* shared variables to the quiz script */
        var app,
        quiz_num,
        quiz_title,
        quiz_bank,
        quiz_len = 10,
        quiz_sample;

        /**
        * Shuffles a copy of an, returns the copy. 
        * @param {Array} src items An array containing the items.
        */
        function shuffle(src) {
            var a = src.slice();
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

        function kviss_start_knapp() {
            var button = $('<button class="kviss_start">Start kviss!</button>').click(function(e){
                quiz_init("#kviss");
            });
            return button;
        }

        /**
         * Clears out old quiz
         */
        function clear_quiz(sel) {
            $(sel).empty();
        }

        /**
         * return a quiz-array with 10 questions drawn randomly from source quiz-array
         * @param {array} source An array with question-objects
         * @param {int} len Integer, how many questions to draw
         */
        function make_quiz_selection(source, len) {
            var copy = shuffle(source.slice());
            var quiz_sample = copy.slice(0,len);
            return quiz_sample;
        }

        function start_new_quiz(domcontainer,title, quiz_source, quiz_len) {
            
            function determine_input_type(num) {
                if(num > 1) {
                    return "checkbox";
                } else {
                    return "radio";
                }
            }

            function generate_figure_markup(obj) {
                if(obj.bilde !== undefined && obj.bilde !== "") {
                    return '<figure>\
                    <div class="img_container">\
                        <img src="' + obj.bilde + '" alt=""/>\
                    </div>\
                    <figcaption>' + obj.bildetekst + '</figcaption>\
                </figure>';
                } else {
                    return '<div class="mangler_bilde"></div><p class="mangler_bilde">Mangler bildereferanse.</p>';
                }
            }

            function generate_input_name(index, input_type, spm_nr) {
                switch (input_type) {
                    case "checkbox":
                        return 'choice-' + spm_nr + '-' + index;
                    break;
                    default:/* default is radio */
                        return 'choice-' + spm_nr;
                    break;
                }
            }

            function getAncestor(el, selector) {
                var max = 100;
                var p = $(el).parent();
                var iteration = 0;
                do {
                    iteration = iteration +1;
                    if( p.is(selector) === true ) {
                        return p;
                    }
                    if( p.is('html') ) {
                        console.log( "'" + selector + "'" + ' not found, reached \'html\' at iteration: ' + iteration + '. Terminating loop.');
                        return null;
                    }
                    if(iteration > max) {
                        console.log('Max iterations reached ( ' + iteration + ' ), exit loop');
                        return null;
                    }
                    p = p.parent();
                } while (true);
            }

            function activate_check_button(src_el) {
                var targetbutton = getAncestor(src_el, 'fieldset').find('.sjekk')[0];
                console.log(targetbutton);
                $(targetbutton).prop('disabled',false);
                var inputs = getAncestor(src_el, 'fieldset').find('input');
                inputs.unbind("click");
            }

            function generate_svaralternativ_markup(index, value, input_type, spm_nr) {
                var input_name = generate_input_name(index, input_type, spm_nr);
                var label = $('<label></label>');
                var feedback = $('<span class="feedback"></span>');
                var span = $('<span class="alternativ">' + value + '</span>');
                var input = $('<input name="' + input_name + '" type="' + input_type + '" value="' + value + '"/>');
                input.click(function(e) {
                    var target = e.target;
                    activate_check_button(target);
                });

                label.append(input).append(feedback).append(span);
                return label;
                
            }

            function generate_quiz_nav_markup(spm_nr, quiz_len) {
                var prev_num = (spm_nr - 1).toString();
                var next_num = (spm_nr + 1).toString();
                var prev_id = '#kviss-spm-' + prev_num;
                var next_id = '#kviss-spm-' + next_num;
                var disabled = "";
                var prev_alt = 'Til spørsmål ' + prev_num + '.';
                var next_alt = 'Til spørsmål ' + next_num + '.';
                var result_alt = 'Se resultater';
                var neste_tekst = "Neste";
                var forrige_tekst = 'Forrige';
                var id = "";
                if(spm_nr == 1) {
                    prev_id = '#kviss-result' + (spm_nr - 1).toString();
                    disabled = ' disabled';/* disable prev link for first question */
                    prev_alt = result_alt;
                    forrige_tekst = 'Resulater';
                } if (spm_nr == quiz_len) {
                    next_id = '#kviss-scoreboard';
                    next_alt = result_alt;
                    neste_tekst = 'Resultater';
                    id='id="til_resultater" ';
                }
                var markup = '<nav class="quiz-nav">\n\
    <a' + disabled + ' href="' + prev_id + '" class="forrige" title="' + prev_alt + '"><span>' + forrige_tekst + '</span></a>\n\
    <a ' + id + 'disabled href="' + next_id + '" title="' + next_alt + '" class="neste"><span>' + neste_tekst + '</span></a>\n\
</nav>';
                return markup;
            }

            function get_SVG_status_icon(el) {
                var icon = null;
                if($(el).is(':checked') && $(el).hasClass('correct')) {
                    icon = $('<svg class="icon"><use xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-riktig-hode"></use></svg>');
                }
                if($(el).is(':checked') && $(el).hasClass('incorrect')) {
                    icon = $('<svg class="icon"><use xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-galt"></use></svg>');
                }
                if(!$(el).is(':checked') && $(el).hasClass('correct')) {
                    icon = $('<svg class="icon"><use xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-hint"></use></svg>');
                }
                console.log(icon);
                return icon;

            }

            function sjekk_svar(knapp) {
                console.log("sjekk_svar()");
                var fieldset = getAncestor(knapp, 'fieldset');
                $(knapp).attr('disabled',true);
                fieldset.addClass('answered');
                var spm_nr = parseInt(fieldset.attr('data-spm'));
                var svar_index = spm_nr - 1;
                var riktige_svar = quiz_sample[svar_index].riktige_svar;
                var antall_mulige = riktige_svar.length;
                console.log(antall_mulige);
                var antall_rette = 0;
                
                var inputs = fieldset.find('input');
                $.each(inputs, function(index, obj){
                    for(var i=0, len = riktige_svar.length; i < len; i++) {
                        if(obj.getAttribute('value') === riktige_svar[i]) {
                            getAncestor(obj, 'label').addClass('correct');
                            $(obj).addClass('correct');
                        }
                    }
                    if(!$(obj).hasClass('correct')) {
                        getAncestor(obj, 'label').addClass('incorrect');
                        $(obj).addClass('incorrect');
                    }
                    $(obj).prop('disabled',true);
                });

                // delsum
                $.each(inputs, function(index, obj){
                    var statusicon = get_SVG_status_icon(obj);
                    if(statusicon !== null) {
                        $(obj).parent().prepend(statusicon);
                    }
                    // får poeng for riktige svar
                    if($(obj).is(':checked')) {
                        getAncestor(obj, 'label').addClass('checked');
                    }
                    if($(obj).is(':checked') && $(obj).hasClass('correct')) {
                        antall_rette = antall_rette + 1;
                        // add svg icon!
                    }
                    // trekkes i poeng for gale svar for hvert delspørsmål hvis det er mer enn en mulig riktig
                    if($(obj).is(':checked') && $(obj).hasClass('incorrect') && antall_mulige > 1) {
                        antall_rette = antall_rette -1;
                    }

                });
                // dersom delsummen blir negativ, settes den til 0.
                if (antall_rette < 0) {
                    antall_rette = 0;
                }

                // lagrer mellomsum i DOM i fieldset
                fieldset.attr('data-delsum', antall_rette);
                fieldset.attr('data-mulige', antall_mulige);

                // activate next button
                $(fieldset).find('.quiz-nav a:last-child').removeAttr('disabled');
            }

            clear_quiz("#kviss"); // clear out old quiz if present

            quiz_sample = make_quiz_selection(quiz_source, quiz_len);

            domcontainer.append("<h2>" + title + "</h2>");
            $.each(quiz_sample, function( index, obj) {
                var spm_nr = index + 1;
                var figure_markup = generate_figure_markup(obj);
                var fieldset = $('<fieldset id="kviss-spm-' + spm_nr + '" class="quiz-part" data-spm="' + spm_nr + '">\
                <legend>' + spm_nr + ' av ' + quiz_len + '</legend>\
                <h3 class="question">' + obj.spm + '</h3>\
                ' + figure_markup + '\
                </fieldset>');

                var ant_riktige_svar = obj.riktige_svar.length;
                var input_type = determine_input_type(ant_riktige_svar);

                $.each(obj.svaralternativer, function( index, value) {
                    console.log(value);
                    var alternativ = generate_svaralternativ_markup(index, value, input_type, spm_nr);
                    fieldset.append(alternativ);
                });

                fieldset.append($('<p class="forklaring">' + obj.forklaring + '</p>'));

                fieldset.append($('<button disabled class="sjekk">Sjekk svar</button>').click(function(e){
                    var target = e.target;
                    sjekk_svar(target);
                }));


                fieldset.append($(generate_quiz_nav_markup(spm_nr, quiz_len)));

                domcontainer.append(fieldset);
            });

            
            function generate_scoreboard(){
                var scoreboard = $('<article id="kviss-scoreboard">\n\
    <h2>Gratulerer!</h2>\n\
    <p class="kviss-ferdig">\n\
        <span class="kviss-score">Poengsum:</br>\n\
            <span id="kviss-totalt-riktige"></span> av \n\
            <span id="kviss-totalt-mulige"></span>\n\
        </span>\n\
    </p>\n\
    <div id="kviss-poengsum-smil"></div>\n\
    <p id="kviss-poengsum-prosent"></p>\n\
    <p class="kviss-ferdig">Prøv igjen!</p>\n\
</article>');
                scoreboard.append(kviss_start_knapp());
                return scoreboard;
            }

            function calculate_total_score() {
                var grand_total = 0;
                var grand_possible = 0;
                var fieldsets = $('#kviss fieldset');
                var smileys = $('<div class="score-smileys"></div>');
                var grand_percent;
                $.each(fieldsets, function( key, el){
                    var current_possible = parseInt($(el).attr('data-mulige'));
                    var current_sum = parseInt($(el).attr('data-delsum'));
                    if (isNaN(current_possible)) {
                        current_possible = 0;
                    }
                    if (isNaN(current_sum)) {
                        current_sum = 0;
                    }

                    grand_total = grand_total + current_sum;
                    grand_possible = grand_possible + current_possible;
                    grand_percent = Math.round((grand_total / grand_possible) * 100);
                    // for each input, add a smiley
                    $.each($(el).find('input'), function( key, el){
                        var smileyclass = "smiley-correct";
                        if($(el).hasClass("incorrect")) {
                            smileyclass = "smiley-incorrect";
                        }
                        if($(el).is(':checked')) {
                            $(smileys).append($('<span style="transform:translate(0,' + (4*(-0.5 + Math.random())).toString() + 'em) scale(' + (0.5 + Math.random()) + ')" class="' + smileyclass + '"></span>'));
                        }
                    });
                });

                $('#kviss-totalt-riktige').html(grand_total.toString());
                $('#kviss-totalt-mulige').html(grand_possible.toString());
                $('#kviss-poengsum-prosent').html(grand_percent.toString() + '%');
                $('#kviss-poengsum-smil').append(smileys);
            }

            $('#til_resultater').click(function(){
                calculate_total_score();
            });
            
            $(app).append(generate_scoreboard());

            $('html, body').animate({
                scrollTop: $('#kviss').offset().top
            }, 250);

        } // start_new_quiz()

        function quiz_init(domcontainer_selector) {
            console.log("quiz_init()");
            app = $(domcontainer_selector); // the quiz dom-container
            // needs to be more robust
            var quiz_num = parseInt(app.attr('data-quiz-number'));
            quiz_title = quizzies[quiz_num].title;
            quiz_bank = quizzies[quiz_num].q_and_a;
            
            start_new_quiz(app, quiz_title, quiz_bank, quiz_len);
        }

        $('#kviss').append(kviss_start_knapp());
    }

    quiz();

});