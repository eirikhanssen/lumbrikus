// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    function quizInit() {

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
                    riktige_svar: ["Herr Høne", "Jenny"],
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
                    bilde: "",
                    bildetekst: "",
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
                ,
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
                    bilde: "/media/img/kviss_selje.jpg",
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
                    bilde: "/media/img/kviss_undring.svg",
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
                    bilde: "/media/img/kviss_seljerakle.jpg(Eirik9104)",
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
                    bilde: "/media/img/kviss_pollenbarere.jpg(Eirik9099)",
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
                    bilde: "/media/img/kviss_selje_hunnblomst.jpg(8976)",
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
                    bilde: "/media/img/kviss_aarstid.jpg",
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



        quizzies[1] = quiz01;

        var app = $("#kviss");
        var quiznum = parseInt(app.attr('data-quiz-number'));
        var quiztitle = quizzies[quiznum].title;
        var quiz = quizzies[quiznum].q_and_a;
        var quiz_len = quiz.length;

       