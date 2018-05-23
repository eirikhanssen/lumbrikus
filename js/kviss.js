// A $( document ).ready() block.
$( document ).ready(function() {
    function quiz() {
        console.log("quiz()");
        var quizzies = [];
        
        
        var quiz01 = {
            title: "kapittel 1",
            q_and_a: [{
                    spm: "Hvem er dette?",
                    bilde: "/media/img/kviss_jenny_hode.jpg",
                    bildetekst: "Ei jente med blondt hår. Hun har en hodelykt på seg.",
                    svaralternativer: [
                        "Herr Høne",
                        "Jenny",
                        "Sobia"
                    ],
                    riktige_svar: ["Jenny"],
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
                },
                {
                    spm: "Hvem er dette?",
                    bilde: "/media/img/kviss_hen.jpg",
                    bildetekst: "Hvem har rødt hår, lilla drakt, grønt ansikt og katte-ører?",
                    svaralternativer: [
                        "Afrika",
                        "Hen",
                        "Kim"
                    ],
                    riktige_svar: ["Hen"],
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
                },
                {
                    spm: "Hva er nektar?",
                    bilde: "/media/svg/lumbrikus-icons.svg#undring",
                    bildetekst: "Et smileansikt som lurer på hva dette kan være.",
                    svaralternativer: [
                        "Søt saft som humla spiser",
                        "En gutt som nekter å spise is",
                        "En avatar"
                    ],
                    riktige_svar: ["Søt saft som humla spiser"],
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
                }
            ]
        };
        
        var quiz02 = {
            title: "kapittel 2",
            q_and_a: [{
                    spm: "Hvor mange blomster ser du? ",
                    bilde: "/wp-content/uploads/05.2010_löwenzahn_3.jpg",
                    bildetekst: "En gul blomst som er badet i solen. Foto:  Uwe H. Friese",
                    svaralternativer: [
                        "Ti ",
                        "En ",
                        "Veldig mange"
                    ],
                    riktige_svar: ["Veldig mange"],
        
                },
                {
                    spm: "Hvorfor har løvetann fått navnet sitt? ",
                    bilde: "/wp-content/uploads/NAT_7474.jpg",
                    bildetekst: "Grønne blader og gule blomster",
                    svaralternativer: [
                        "Fordi løvene spiser den",
                        "Fordi bladene ser ut som tennene til løvene",
                        "Fordi blomstene er farlige"
                    ],
                    riktige_svar: ["Fordi bladene ser ut som tennene til løvene"],
        
                },
                {
                    spm: "Hvor mange blomster er det her? ",
                    bilde: "/wp-content/uploads/NAT_7473.jpg",
                    bildetekst: "Grønn stilk og sett med tre grønne blader, med rosarøde blomster",
                    svaralternativer: [
                        "En",
                        "Veldig mange",
                        "Åtte"
                    ],
                    riktige_svar: ["Veldig mange"],
        
                },
                {
                    spm: "Hva er pollen? ",
                    bilde: "/wp-content/uploads/NAT_9014.jpg",
                    bildetekst: "Nærbilde av en hvit blomst med grønne tapper i midten og gule knopper som vokser fra tynne stilker",
                    svaralternativer: [
                        "En by i Polen",
                        "Små korn i hann-blomsten",
                        "En bolle med rosiner"
                    ],
                    riktige_svar: ["En bolle med rosiner"],
        
                },
                {
                    spm: "Hva er å pollinere?",
                    bilde: "/wp-content/uploads/krokus_verdal_kap1.jpg",
                    bildetekst: "En humle dekket med gult støv som sitter på et lilla begerblad inne i en blomst",
                    svaralternativer: [
                        "Å ta pollen fra hann-blomsten over på hunnblomsten",
                        "Å reise til Nordpolen",
                        "Å danse polka"
                    ],
                    riktige_svar: ["Å ta pollen fra hann-blomsten over på hunnblomsten"],
        
                },
                {
                    spm: "Hvem pollinerer rødkløver? ",
                    bilde: "/wp-content/uploads/NAT_7473.jpg",
                    bildetekst: "Grønn stilk og sett med tre grønne blader, med rosarøde blomster",
                    svaralternativer: [
                        "Revene",
                        "Humlene",
                        "Fuglene"
                    ],
                    riktige_svar: ["Humlene"],
        
                },
                {
                    spm: "Hva er dette? ",
                    bilde: "/wp-content/uploads/NAT_7473_v2.jpg",
                    bildetekst: "En grønn belg som har grønne kuler inni",
                    svaralternativer: [
                        "En grønn banan",
                        "Bæsjen til en elg",
                        "En belg med erter"
                    ],
                    riktige_svar: ["En belg med erter"],
        
                },
                {
                    spm: "Hva er hummus laget av?",
                    bilde: "/wp-content/uploads/Hummus.jpg",
                    bildetekst: "En hvit tallerken med lefser, og en liten skål med kremaktig lysebeige innhold. Oppå er det drysset kanel, og den er pyntet med litt persille. Foto: Popo le Chien",
                    svaralternativer: [
                        "Mus med humør",
                        "Humler",
                        "Kikerter"
                    ],
                    riktige_svar: ["Kikerter"],
        
                },
                {
                    spm: "Hva er nektar?",
                    bilde: "/wp-content/uploads/nakke.png",
                    bildetekst: "Hode og nakken til en voksen mann, sett bakfra",
                    svaralternativer: [
                        "Et barn som nekter mye",
                        "Søt saft i blomsten",
                        "En nakke"
                    ],
                    riktige_svar: ["Søt saft i blomsten"],
        
                },
                {
                    spm: "Hva er gulrot?",
                    bilde: "/wp-content/uploads/NAT_0748_v3.jpg",
                    bildetekst: "En gulorange rot med grønne blader",
                    svaralternativer: [
                        "En gul blyant",
                        "Ei pølse av gull",
                        "Ei rot vi kan spise"
                    ],
                    riktige_svar: ["Ei rot vi kan spise"],
        
                },
                {
                    spm: "Hva kan vi lage av soyabønner?",
                    bilde: "/wp-content/uploads/soyabønner_belg.jpg",
                    bildetekst: "Gulgrønne kuler inne i hårete belger",
                    svaralternativer: [
                        "Middag",
                        "Sofa",
                        "Kokosboller"
                    ],
                    riktige_svar: ["Middag"],
        
                },
                {
                    spm: "Soya har mye av noe. Hva er det?",
                    bilde: "/wp-content/uploads/Marit_bjørgen.jpg",
                    bildetekst: "Ei som går på ski i full fart. Foto: Marit Bjørgen. Sterk.",
                    svaralternativer: [
                        "Pepper",
                        "Sukker",
                        "Proteiner som lager muskler"
                    ],
                    riktige_svar: ["Proteiner som lager muskler"],
        
                },
                {
                    spm: "Hvor vokser epler?",
                    bilde: "/wp-content/uploads/NAT_0747_v4.jpg",
                    bildetekst: "En grønn, nesten rund frukt, med en brungrønn stilk",
                    svaralternativer: [
                        "Nede i jorda.",
                        "På bakken",
                        "På trær"
                    ],
                    riktige_svar: ["På trær"],
        
                },
                {
                    spm: "Hvor mye kan et bjørketre drikke på en varm sommerdag?",
                    bilde: "/wp-content/uploads/bjørkeskog.jpg",
                    bildetekst: "En skog med mange trær som har hvite og sorte stammer, og mange små grønne blader",
                    svaralternativer: [
                        "1 liter som en melkekartong",
                        "50 liter",
                        "400 liter"
                    ],
                    riktige_svar: ["400 liter"],
        
                },
                {
                    spm: "Når er våren?",
                    bilde: "/wp-content/uploads/eh_NAT_8619.jpg",
                    bildetekst: "En gul blomst som er dekket av iskrystaller",
                    svaralternativer: [
                        "Mellom sommer og høst",
                        "Mellom høst og vinter",
                        "Mellom vinter og sommer"
                    ],
                    riktige_svar: ["Mellom vinter og sommer"],
        
                },
                {
                    spm: "Hva er tegn på vår?",
                    bilde: "/wp-content/uploads/istapper.jpg",
                    bildetekst: "Store istapper som henger ned. Foto: max pixel",
                    svaralternativer: [
                        "Hestehov",
                        "Snøen smelter",
                        "Det blir varmere ute"
                    ],
                    riktige_svar: ["Hestehov", "Snøen smelter", "Det blir varmere ute"],
        
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/Vaccinium_myrtillus2_ies.jpg",
                    bildetekst: "En Rosa, grønn og orange kule med en åpning og noe inni. Foto:  Frank Vincentz",
                    svaralternativer: [
                        "En ballong på tivoli",
                        "Blomsten til blåbær",
                        "Ei fin lue til baby"
                    ],
                    riktige_svar: ["Blomsten til blåbær"],
        
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/NAT_0733_v2.jpg",
                    bildetekst: "En liten fugl med tynn stjert som er hvit, sort og grå og har sort nebb og sorte ben.",
                    svaralternativer: [
                        "Ørn",
                        "Linerle",
                        "Høne"
                    ],
                    riktige_svar: ["Linerle"],
        
                },
                {
                    spm: "Hva er det inni kjølen?",
                    bilde: "/wp-content/uploads/2017/10/Oregon_sugar_pod_II_bloom-2012.jpg",
                    bildetekst: "Grønne blader og en hvit blomst. Foto: Rob Duval   CC BY-SA 3.0",
                    svaralternativer: [
                        "En liten båt",
                        "Nektar og støvbærere",
                        "En liten hvit fugl"
                    ],
                    riktige_svar: ["Nektar og støvbærere"],
        
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/NAT_7472.jpg",
                    bildetekst: "En hvit blomst med tynne, sprikende blader",
                    svaralternativer: [
                        "Blåveis",
                        "Hvitveis",
                        "Hestehov"
                    ],
                    riktige_svar: ["Hvitveis"],
        
                }
            ]
        };
        
        var quiz03 = {
            title: "kapittel 3",
            q_and_a: [{
                    spm: "Hvem er dette?",
                    bilde: "/wp-content/uploads/kviss_jenny_hode.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Anna",
                        "Jonatan",
                        "Jenny"
                    ],
                    riktige_svar: ["Jenny"]
                },
                {
                    spm: "Hvem er dette?",
                    bilde: "/wp-content/uploads/kviss_samir_hode.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Sobia",
                        "Samir",
                        "Sander"
                    ],
                    riktige_svar: ["Samir"]
                },
                {
                    spm: "Hvor mange bein har snegler?",
                    bilde: "/wp-content/uploads/NAT_0732_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "4",
                        "8",
                        "0"
                    ],
                    riktige_svar: ["0"]
                },
                {
                    spm: "Hvilken farge har gulrøtter?",
                    bilde: "/wp-content/uploads/NAT_0748_v3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Gule",
                        "Oransje",
                        "De kan ha mange farger"
                    ],
                    riktige_svar: ["Gule", "Oransje", "De kan ha mange farger"]
                },
                {
                    spm: "Hva er en magefoting?",
                    bilde: "",
                    bildetekst: "",
                    svaralternativer: [
                        "En mann",
                        "Fine sko",
                        "En snegl"
                    ],
                    riktige_svar: ["En snegl"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/Tomato_leaf_stomate.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Munnen til et grønt monster",
                        "Et bløtt dyr på havets bunn",
                        "Baksida av et blad på ei plante"
                    ],
                    riktige_svar: ["Baksida av et blad på ei plante"]
                },
                {
                    spm: "Hva gjør røtter?",
                    bilde: "/wp-content/uploads/NAT_0724.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Holder planta fast i jorda",
                        "Henter næring fra jorda",
                        "Henter vann til planta"
                    ],
                    riktige_svar: ["Holder planta fast i jorda", "Henter næring fra jorda", "Henter vann til planta"]
                },
                {
                    spm: "Hvor mye veier verdens største frø?",
                    bilde: "/wp-content/uploads/dobbelt_kokosnøtt.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "20 kilo",
                        "200 kilo",
                        "6 kilo"
                    ],
                    riktige_svar: ["20 kilo"]
                },
                {
                    spm: "Hvor kommer verdens største frø fra?",
                    bilde: "/wp-content/uploads/dobbelt_kokosnøtt.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Seychellene på østkysten av Afrika",
                        "Nord-Norge",
                        "Kina"
                    ],
                    riktige_svar: ["Seychellene på østkysten av Afrika"]
                },
                {
                    spm: "Stikker øyenstikkeren?",
                    bilde: "/wp-content/uploads/Anotogaster_sieboldii_in_hand.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ja, midt i øyet på skoleelever",
                        "Ja, den stikker hunder i ørene",
                        "Nei, den kan ikke stikke"
                    ],
                    riktige_svar: ["Nei, den kan ikke stikke."]
                },
                {
                    spm: "Hva er en kime?",
                    bilde: "/wp-content/uploads/enthalvtfrø_kap3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En plante-baby",
                        "En mark",
                        "En kino"
                    ],
                    riktige_svar: ["En plante-baby"]
                },
                {
                    spm: "Hva kommer først ut av frøet?",
                    bilde: "/wp-content/uploads/ertsomspirer_kap3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Rota",
                        "Stengelen",
                        "Blomsten"
                    ],
                    riktige_svar: ["Rota"]
                },
                {
                    spm: "Hva trenger et frø for å spire?",
                    bilde: "/wp-content/uploads/NAT_0733_v3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Vann",
                        "Luft",
                        "Å ha det passe varmt"
                    ],
                    riktige_svar: ["Vann", "Luft", "Å ha det passe varmt"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/baby-flaggermus.png",
                    bildetekst: "",
                    svaralternativer: [
                        "Ei humle",
                        "Ei flaggermus",
                        "Et ekorn"
                    ],
                    riktige_svar: ["Ei flaggermus"]
                },
                {
                    spm: "Hva er en frøbank?",
                    bilde: "/wp-content/uploads/Svalbard_Global_Seed_Vault_16064027324.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En lyd fra læreren som banker frø",
                        "Et sted hvor folk kan gjemme frø",
                        "En butikk som selger frø"
                    ],
                    riktige_svar: ["Et sted hvor folk kan gjemme frø"]
                },
                {
                    spm: "Hvor er verdens største frøbank?",
                    bilde: "/wp-content/uploads/Svalbard_Global_Seed_Vault_16064027324.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "På Sørpolen",
                        "I Sahara",
                        "På Svalbard"
                    ],
                    riktige_svar: ["På Svalbard"]
                },
                {
                    spm: "Kan et frø bli et stort tre med bananer?",
                    bilde: "/wp-content/uploads/NAT_0733_v3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ja",
                        "Nei, frø kan bare bli små planter",
                        "Nei, de bare dør"
                    ],
                    riktige_svar: ["Ja"]
                },
                {
                    spm: "Hvem har hus på ryggen?",
                    bilde: "",
                    bildetekst: "",
                    svaralternativer: [
                        "Kamelene",
                        "Meitemark",
                        "Snegler"
                    ],
                    riktige_svar: ["Snegler"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/tegning_erteplante.png",
                    bildetekst: "",
                    svaralternativer: [
                        "En tegning av ei rose",
                        "En fantasi-tegning",
                        "En tegning av ei erte-plante"
                    ],
                    riktige_svar: ["En tegning av ei erte-plante"]
                }
            ]
        };
        
        var quiz04 = {
            title: "kapittel 4",
            q_and_a: [{
                    spm: "Hva er nektar?",
                    bilde: "/wp-content/uploads/eh_NAT9093_selje_hann_nektarposer.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Søt saft i blomstene",
                        "Gutt som nekter",
                        "Nakke"
                    ],
                    riktige_svar: ["Søt saft i blomstene"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/blomsterflue-på-blomst.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En veps",
                        "Ei blomsterflue",
                        "Ei humle"
                    ],
                    riktige_svar: ["Ei blomsterflue"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/NAT_0771.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En stor bjørn",
                        "En flodhest",
                        "Ei bille"
                    ],
                    riktige_svar: ["Ei bille"]
                },
                {
                    spm: "Hva slags blomster liker hårgullbassen?",
                    bilde: "/wp-content/uploads/NAT_0771.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Flate blomster",
                        "Dype blomster",
                        "Den liker bare softis"
                    ],
                    riktige_svar: ["Flate blomster"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/NAT_7462_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Helikopter",
                        "Humle",
                        "Liten hund"
                    ],
                    riktige_svar: ["Humle"]
                },
                {
                    spm: "Hva er det?",
                    bilde: "/wp-content/uploads/en-kurv-med-blomserst%C3%B8v-300x300.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Et lite egg",
                        "En kurv med blomsterstøv",
                        "Et gult plaster"
                    ],
                    riktige_svar: ["En kurv med blomsterstøv"]
                },
                {
                    spm: "Hva er det?",
                    bilde: "/media/svg/blomst-enkel-modell-kronblad.svg",
                    bildetekst: "",
                    svaralternativer: [
                        "Kronblad",
                        "Rot",
                        "Flagg"
                    ],
                    riktige_svar: ["Kronblad"]
                },
                {
                    spm: "Hva er det?",
                    bilde: "/media/svg/blomst-enkel-modell-fruktknute.svg",
                    bildetekst: "",
                    svaralternativer: [
                        "Et sted hvor blomsten har eggene sine",
                        "En vase",
                        "En ball"
                    ],
                    riktige_svar: ["Et sted hvor blomsten har eggene sine"]
                },
                {
                    spm: "Hvor mange bein har insekter?",
                    bilde: "/wp-content/uploads/NAT_0734_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Tolv",
                        "Fire",
                        "Seks"
                    ],
                    riktige_svar: ["Seks"]
                },
                {
                    spm: "Hva er befruktning?",
                    bilde: "/media/svg/04-blomsterbefruktning-anim.svg",
                    bildetekst: "",
                    svaralternativer: [
                        "Å spise mye frukt",
                        "Å plukke epler fra et tre",
                        "Sædcelle og eggcelle smelter sammen"
                    ],
                    riktige_svar: ["Sædcelle og eggcelle smelter sammen"]
                },
                {
                    spm: "Hva er pollinering (bestøvning)?",
                    bilde: "/media/svg/04-blomsterbefruktning-anim.svg",
                    bildetekst: "",
                    svaralternativer: [
                        "At det er mye støv fra veien",
                        "At pollen fester seg på arret",
                        "Å spise boller"
                    ],
                    riktige_svar: ["At pollen fester seg på arret"]
                },
                {
                    spm: "Hva er pollen?",
                    bilde: "/wp-content/uploads/pollen.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nordpolen",
                        "Små korn med sædceller i",
                        "Sørpolen"
                    ],
                    riktige_svar: ["Små korn med sædceller i"]
                },
                {
                    spm: "Hva liker den å spise?",
                    bilde: "/wp-content/uploads/sommerfugl.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Peanøtter",
                        "Kebab",
                        "Blomstersaft (nektar)"
                    ],
                    riktige_svar: ["Blomstersaft (nektar)"]
                },
                {
                    spm: "Hva er oppgaven til blomstene?",
                    bilde: "/wp-content/uploads/NAT_7474.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Lage frø og flere blomster",
                        "Pynte for oss",
                        "De har ingen oppgave"
                    ],
                    riktige_svar: ["Lage frø og flere blomster"]
                },
                {
                    spm: "Hvorfor er det striper på kronbladene?",
                    bilde: "/wp-content/uploads/Lilium_Dizzy.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Det er bare pynt",
                        "Så insektene finner veien til nektaren",
                        "De skal skremme insekter"
                    ],
                    riktige_svar: ["Så insektene finner veien til nektaren"]
                },
                {
                    spm: "Hvem pollinerer revebjelle?",
                    bilde: "/wp-content/uploads/Digitalis_purpurea_003.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Humler med lang snabel",
                        "Humle med kort snabel",
                        "Vinden"
                    ],
                    riktige_svar: ["Humler med lang snabel"]
                },
                {
                    spm: "Er bestøvning og befruktning det samme?",
                    bilde: "/media/svg/04-blomsterbefruktning-anim.svg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nei. Bestøvning betyr pollen på arr. Befruktning betyr sæd-celle til egg-celle.",
                        "Ja, det er det samme",
                        "Ja, det er det samme, fordi alt er grønt"
                    ],
                    riktige_svar: ["Nei. Bestøvning betyr pollen på arr. Befruktning betyr sæd-celle til egg-celle."]
                },
                {
                    spm: "Kan vinden pollinere (bestøve)?",
                    bilde: "/wp-content/uploads/pine_polleniStock_000013197354Medium.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nei, pollen sitter hardt fast",
                        "Nei, det er ikke mer igjen",
                        "Ja, den blåser pollen bort til andre blomster"
                    ],
                    riktige_svar: ["Ja, den blåser pollen bort til andre blomster"]
                },
                {
                    spm: "Hva skjer her?",
                    bilde: "https://lumbrikus.no/wp-content/uploads/lopez_rodrigo_colibri_drinks_nectar-768x512.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Blomsten spiser kolibrien",
                        "Kolibrien leter etter vennene sine",
                        "Kolibrien spiser nektar"
                    ],
                    riktige_svar: ["Kolibrien spiser nektar"]
                },
                {
                    spm: "Er pollen og blomsterstøv det samme?",
                    bilde: "/wp-content/uploads/pollen.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nei",
                        "Ja",
                        "Nei, ikke helt"
                    ],
                    riktige_svar: ["Ja"]
                },
                {
                    spm: "Hva heter guttedelene i blomsten?",
                    bilde: "/wp-content/uploads/NAT_7485.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Fruktknute",
                        "Kronblad",
                        "Pollen, pollenslange og sædceller"
                    ],
                    riktige_svar: ["Pollen, pollenslange og sædceller"]
                },
                {
                    spm: "Hva heter jentedelene i blomsten?",
                    bilde: "/wp-content/uploads/11.png",
                    bildetekst: "",
                    svaralternativer: [
                        "Røde blomster",
                        "Arr, griffel, fruktknute og eggceller",
                        "Pollen"
                    ],
                    riktige_svar: ["Arr, griffel, fruktknute og eggceller"]
                },
                {
                    spm: "Hvem kan bestøve erteblomsten?",
                    bilde: "/wp-content/uploads/NAT_7485.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Myggen",
                        "Flua",
                        "Humla"
                    ],
                    riktige_svar: ["Humla"]
                },
                {
                    spm: "Hva slags tunge har sommerfuglen?",
                    bilde: "/wp-content/uploads/sommerfugl.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "KortLang",
                        "Lang",
                        "Den har ikke tunge"
                    ],
                    riktige_svar: ["Lang"]
                },
                {
                    spm: "Hvor mange blomster kan ei humle besøke på EN flyvetur?",
                    bilde: "/wp-content/uploads/NAT_7463_v3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "5",
                        "50",
                        "500"
                    ],
                    riktige_svar: ["500"]
                },
                {
                    spm: "Hvem bestøver bjørka?",
                    bilde: "/wp-content/uploads/NAT_7480.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Fuglene",
                        "Hårgullbassene",
                        "Vinden"
                    ],
                    riktige_svar: ["Vinden"]
                },
                {
                    spm: "Når er de fleste sommerfuglene våkne?",
                    bilde: "/wp-content/uploads/b0de8fd9-9d0b-4be2-b0a2-a67bfcb949ed.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Klokka halv åtte",
                        "Om dagen",
                        "Om natta"
                    ],
                    riktige_svar: ["Om natta"]
                },
                {
                    spm: "Hvor lenge har blomster og insekter levd sammen?",
                    bilde: "/wp-content/uploads/Bee_2632994523.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "I mange hundre millioner år",
                        "I hundre år",
                        "I tusen år"
                    ],
                    riktige_svar: ["I mange hundre millioner år"]
                },
                {
                    spm: "Hva er evolusjon?",
                    bilde: "/media/svg/lumbrikus-icons.svg#undring",
                    bildetekst: "",
                    svaralternativer: [
                        "Et slags lim",
                        "At planter og dyr forandrer seg sammen",
                        "En fiskesuppe"
                    ],
                    riktige_svar: ["At planter og dyr forandrer seg sammen"]
                }
            ]
        };

        var quiz05 = {
            title: "kapittel 5",
            q_and_a: [
                {
                    spm: "Hva er det?",
                    bilde: "/wp-content/uploads/NAT_7463_v3-300x300.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En liten bjørn i skogen",
                        "Ei farlig øgle med dunjakke",
                        "Ei humle"
                    ],
                    riktige_svar: ["Ei humle"]
        
                },
                {
                    spm: "Hva er det?",
                    bilde: "/wp-content/uploads/Dolichovespula_norwegica-300x259.png",
                    bildetekst: "",
                    svaralternativer: [
                        "Ei humle",
                        "En edderkopp",
                        "En honningbie"
                    ],
                    riktige_svar: ["En honningbie"]
        
                },
                {
                    spm: "Hvilken viktig jobb gjør humler og andre bier?",
                    bilde: "/wp-content/uploads/tegning-marie-3-300x180.png",
                    bildetekst: "",
                    svaralternativer: [
                        "De bestøver blomster som kan lage frø",
                        "De gjør ikke noen viktig jobb",
                        "De synes Marie tegner fint"
                    ],
                    riktige_svar: ["De bestøver blomster som kan lage frø"]
        
                },
                {
                    spm: "Hvorfor passer humler i det kalde Norge?",
                    bilde: "/wp-content/uploads/Bombus_balteatus_queen-300x225.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "De passer ikke, de vil ha det veldig varmt",
                        "De er store og lager varme og har pels",
                        "De spiser snø"
                    ],
                    riktige_svar: ["De er store og lager varme og har pels"]
        
                },
                {
                    spm: "Hva er honning-bier?",
                    bilde: "/wp-content/uploads/Bikuber-300x200.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Konge-bier",
                        "Bier som bor i kasser hos mennesker",
                        "Bier som bader i honning"
                    ],
                    riktige_svar: ["Bier som bor i kasser hos mennesker"]
        
                },
                {
                    spm: "Dronninga til honningbiene: Hvor mange egg kan hun legge hver dag?",
                    bilde: "https://lumbrikus.no/wp-content/uploads/1920px-Bienenwabe_mit_Eiern_und_Brut_5-300x225.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ett tusen",
                        "85",
                        "300"
                    ],
                    riktige_svar: ["Ett tusen"]
        
                },
                {
                    spm: "Hva er det gule på beinet?",
                    bilde: "/wp-content/uploads/NAT_7462_v2-300x300.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Plaster på såret",
                        "En klump med pollen",
                        "Tyggegummi"
                    ],
                    riktige_svar: ["En klump med pollen"]
        
                },
                {
                    spm: "Hva er ei tyvhumle?",
                    bilde: "/wp-content/uploads/Tyvhumle-sposer-tyrihjelm-262x300.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Hun stjeler sjokolade i butikken",
                        "Hun biter hull i blomsten og tar nektar",
                        "Hun stjeler humler"
                    ],
                    riktige_svar: ["Hun biter hull i blomsten og tar nektar"]
        
                },
                {
                    spm: "Hva er ei gjøkhumle?",
                    bilde: "/wp-content/uploads/Kuckuck_im_Flug_v._J._Schmidt-300x200.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Hun synger pent ko-ko, ko-ko!",
                        "Hun spiser gjøker",
                        "Hun legger egg i andre humlers reir"
                    ],
                    riktige_svar: ["Hun legger egg i andre humlers reir"]
        
                },
                {
                    spm: "Hva er å ruge?",
                    bilde: "/wp-content/uploads/chicken-1572844_1920-300x200.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Å ligge på egg og varme dem",
                        "Å riste på noe",
                        "Å spise ei drue"
                    ],
                    riktige_svar: ["Å ligge på egg og varme dem"]
        
                },
                {
                    spm: "Kan hannene til veps, bier og humler stikke?",
                    bilde: "/wp-content/uploads/Stinger_of_an_european_hornet-300x225.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ja, de stikker veldig vondt",
                        "De stikker bare hvis noen plager dem",
                        "Nei, de kan ikke stikke"
                    ],
                    riktige_svar: ["Nei, de kan ikke stikke"]
        
                },
                {
                    spm: "Hva er honning?",
                    bilde: "/wp-content/uploads/queen-826640_1280-300x225.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nektar som har vært i magen til bier",
                        "Ringen til en konge",
                        "Er lite dyr i jorda"
                    ],
                    riktige_svar: ["Nektar som har vært i magen til bier"]
        
                },
                {
                    spm: "Hva er det?",
                    bilde: "/wp-content/uploads/Åkerhumlebol-300x200.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Noen har mista alle sukkertøyene",
                        "Små kjøttboller",
                        "Et humle-bol med mange krukker"
                    ],
                    riktige_svar: ["Et humle-bol med mange krukker"]
        
                },
                {
                    spm: "Hva er det mest av i bolet til humler og andre bier?",
                    bilde: "/wp-content/uploads/adult-3051621_1920-300x200.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Dronninger (mødre)",
                        "Droner (gutter)",
                        "Arbeidere (jenter)"
                    ],
                    riktige_svar: ["Arbeidere (jenter)"]
        
                },
                {
                    spm: "Hva gjør humlemor om høsten?",
                    bilde: "/wp-content/uploads/wintry-2993370_1920-300x200.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Gleder seg til å ake i snøen",
                        "Legger seg til å sove",
                        "Flyr til varmere land"
                    ],
                    riktige_svar: ["Legger seg til å sove"]
        
                },
                {
                    spm: "Hva kan vi gjøre for humler?",
                    bilde: "/wp-content/uploads/Blomstereng-300x200.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Passe på at det er blomster med pollen og nektar",
                        "Passe på at det er blomster om våren",
                        "Passe på at det er blomster om høsten"
                    ],
                    riktige_svar: ["Passe på at det er blomster med pollen og nektar","Passe på at det er blomster om våren","Passe på at det er blomster om høsten"]
        
                },
                {
                    spm: "Hvem var Astrid Løken?",
                    bilde: "/wp-content/uploads/Astrid-Løken-214x300.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Hun visste mest av alle om humler",
                        "Hun undersøkte humler i mange år",
                        "Hun var modig spion for Norge da det var krig"
                    ],
                    riktige_svar: ["Hun visste mest av alle om humler","Hun undersøkte humler i mange år","Hun var modig spion for Norge da det var krig"]
                }
            ]
        };
        
        var quiz06 = {
            title: "kapittel 6",
            q_and_a: [{
                    spm: "Hva er meitemark?",
                    bilde: "/media/img/kviss_meitemark_ruller_seg.jpg",
                    bildetekst: "Tegning av en rosa meitemark som krøller seg sammen",
                    svaralternativer: [
                        "Et insekt",
                        "Et dyr",
                        "En fisk"
                    ],
                    riktige_svar: ["Et dyr"],
        
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
        
                }
            ]
        };
        
        var quiz07 = {
            title: "kapittel 7",
            q_and_a: [{
                    spm: "Kan meitemarken se?",
                    bilde: "/wp-content/uploads/NAT_7492.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ja, den kan se mye",
                        "Ja, men bare rødt",
                        "Nei, den kan ikke se"
                    ],
                    riktige_svar: ["Nei, den kan ikke se"]
                },
                {
                    spm: "Hva bruker meitemarken børstene på kroppen til?",
                    bilde: "/wp-content/uploads/Lumbricidae-bristles-300x225.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Til å børste seg med",
                        "Til å holde seg fast med",
                        "Til å stikke andre med"
                    ],
                    riktige_svar: ["Til å holde seg fast med"]
                },
                {
                    spm: "Har meitemarken lunger?",
                    bilde: "/wp-content/uploads/NAT_7491.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ja, to lunger",
                        "Ja, tre lunger",
                        "Nei, ingen"
                    ],
                    riktige_svar: ["Nei, ingen"]
                },
                {
                    spm: "Hvor får meitemarken oksygen fra?",
                    bilde: "/wp-content/uploads/blad_med_dråpe.png",
                    bildetekst: "",
                    svaralternativer: [
                        "Fra vann",
                        "Fra lufta",
                        "Fra løvet"
                    ],
                    riktige_svar: ["Fra vann"]
                },
                {
                    spm: "Hvor mange hjerter har en meitemark?",
                    bilde: "/wp-content/uploads/NAT_7491.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ingen",
                        "Fem",
                        "Ett"
                    ],
                    riktige_svar: ["Fem"]
                },
                {
                    spm: "Har meitemark tenner?",
                    bilde: "/wp-content/uploads/munn_meitemark.png",
                    bildetekst: "",
                    svaralternativer: [
                        "Ja, 12",
                        "Ja, 17",
                        "Nei"
                    ],
                    riktige_svar: ["Nei"]
                },
                {
                    spm: "Hva heter tygge-magen?",
                    bilde: "/media/svg/lumbrikus-icons.svg#undring",
                    bildetekst: "",
                    svaralternativer: [
                        "Krås",
                        "Tyggis",
                        "Kråke"
                    ],
                    riktige_svar: ["Krås"]
                },
                {
                    spm: "Hvis en meitemark blir delt i to: kan begge leve?",
                    bilde: "/wp-content/uploads/NAT_7488.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nei, bare den første delen",
                        "Ja, begge kan leve",
                        "Nei, bare den bakerste"
                    ],
                    riktige_svar: ["Nei, bare den første delen"]
                },
                {
                    spm: "Hvor mange pigger har et piggsvin?",
                    bilde: "/wp-content/uploads/NAT_7459.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "200",
                        "2000",
                        "6000"
                    ],
                    riktige_svar: ["6000"]
                },
                {
                    spm: "Hva liker piggsvin å spise?",
                    bilde: "/wp-content/uploads/NAT_0732_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Meitemark",
                        "Snegler og frosker",
                        "Sopp og bær"
                    ],
                    riktige_svar: ["Meitemark", "Snegler og frosker", "Sopp og bær"]
                },
                {
                    spm: "Skal vi gi piggsvin melk?",
                    bilde: "/wp-content/uploads/NAT_7487.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nei, vann er best",
                        "Ja, melk",
                        "Nei, iskrem"
                    ],
                    riktige_svar: ["Nei, vann er best"]
                },
                {
                    spm: "Er det sant at dinosaurer og piggsvin levde samtidig?",
                    bilde: "/wp-content/uploads/Allosaurus_BW.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ja",
                        "Nei",
                        "Nei, det går ikke"
                    ],
                    riktige_svar: ["Ja"]
                },
                {
                    spm: "Hva er en krås?",
                    bilde: "/media/svg/lumbrikus-icons.svg#undring",
                    bildetekst: "",
                    svaralternativer: [
                        "Ei gås",
                        "En tyggemage",
                        "En lås"
                    ],
                    riktige_svar: ["En tyggemage"]
                },
                {
                    spm: "Meitemark har kro og krås. Hvilke andre dyr har det?",
                    bilde: "/wp-content/uploads/NAT_9018_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Høner",
                        "Alle fugler",
                        "Maur og humler"
                    ],
                    riktige_svar: ["Høner", "Alle fugler", "Maur og humler"]
                },
                {
                    spm: "Hvor mange meitemark kan det være under en fotballbane?",
                    bilde: "/wp-content/uploads/Vangbana.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Hundre tusen",
                        "Fem hundre tusen",
                        "En million"
                    ],
                    riktige_svar: ["En million"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/NAT_7497.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Fem kokonger",
                        "Fem sukkertøy",
                        "Fem sitroner"
                    ],
                    riktige_svar: ["Fem kokonger"]
                },
                {
                    spm: "Hva er det i kokonger?",
                    bilde: "/wp-content/uploads/NAT_7497.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Egg-celler og sæd-celler",
                        "Befrukta egg",
                        "Små meitemark"
                    ],
                    riktige_svar: ["Egg-celler og sæd-celler", "Befrukta egg", "Små meitemark"]
                },
                {
                    spm: "Hva er anus?",
                    bilde: "/wp-content/uploads/NAT_7496.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Lakris",
                        "Ananas",
                        "Hullet der bæsjen kommer ut"
                    ],
                    riktige_svar: ["Hullet der bæsjen kommer ut"]
                },
                {
                    spm: "Hva er stripene på meitemarken?",
                    bilde: "/wp-content/uploads/Redwiggler1.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En pynt",
                        "Ledd som gjør at den kan bøye seg",
                        "Ingen kan vite det"
                    ],
                    riktige_svar: ["Ledd som gjør at den kan bøye seg"]
                },
                {
                    spm: "Hvordan er meitemarken tilpassa et liv i jorda?",
                    bilde: "/wp-content/uploads/eh_NAT_8866.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Den har ikke øyne",
                        "Den er lang og tynn",
                        "Den spiser jord"
                    ],
                    riktige_svar: ["Den har ikke øyne", "Den er lang og tynn", "Den spiser jord"]
                },
                {
                    spm: "Hva lager meitemarken?",
                    bilde: "/wp-content/uploads/c0095832-earth_layers_artwork.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Bare rot",
                        "Stygge hull i bakken",
                        "Jorda på jordkloden"
                    ],
                    riktige_svar: ["Jorda på jordkloden"]
                }
            ]
        };
        
        var quiz08 = {
            title: "kapittel 8",
            q_and_a: [{
                    spm: "Hvor bor plante-babyen?",
                    bilde: "/wp-content/uploads/Rakleskjell_pa_blått-bord.png",
                    bildetekst: "",
                    svaralternativer: [
                        "Inni et frø",
                        "I vann",
                        "I rota til blomsten"
                    ],
                    riktige_svar: ["Inni et frø"]
                },
                {
                    spm: "Blomster visner om høsten. Hvordan kan de leve om våren?",
                    bilde: "/wp-content/uploads/Dandelion_clock_Taraxacum.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Frøene lever under snøen",
                        "Frøene spirer om våren",
                        "Frøene ligger i dvale"
                    ],
                    riktige_svar: ["Frøene lever under snøen", "Frøene spirer om våren", "Frøene ligger i dvale"]
                },
                {
                    spm: "Hvordan sprer borre frøene sine?",
                    bilde: "/wp-content/uploads/borre_plante.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "De eksploderer",
                        "Dyr får dem i pelsen",
                        "Vinden blåser på dem"
                    ],
                    riktige_svar: ["Dyr får dem i pelsen"]
                },
                {
                    spm: "Hvordan sprer rogn frøene sine?",
                    bilde: "/wp-content/uploads/NAT_0750.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Vinden blåser på dem",
                        "Fugler spiser bæsj og bæsjer frø",
                        "De flyter i havet"
                    ],
                    riktige_svar: ["Fugler spiser bær og bæsjer frø"]
                },
                {
                    spm: "Hvordan sprer kokosnøtt frøene sine?",
                    bilde: "/wp-content/uploads/kokospalme.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Kokosnøtta flyter vekk i havet",
                        "Vinden blåser på dem",
                        "De setter seg fast på elefanter"
                    ],
                    riktige_svar: ["Kokosnøtta flyter vekk i havet"]
                },
                {
                    spm: "Hvordan sprer disse agurkene frøene sine?",
                    bilde: "/wp-content/uploads/agurk_som_eksploderer.png",
                    bildetekst: "",
                    svaralternativer: [
                        "De blir spist av harer",
                        "De eksploderer og alt spruter ut",
                        "Det er vinden som gjør det"
                    ],
                    riktige_svar: ["De eksploderer og alt spruter ut"]
                },
                {
                    spm: "Hvordan spres frøene inni her?",
                    bilde: "/wp-content/uploads/Harpagophytum_procumbens_MHNT.BOT_.2005.0.1243.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "De sitter fast i føttene til dyr",
                        "De flyr gjennom lufta med vinden",
                        "De seiler nedover elva"
                    ],
                    riktige_svar: ["De sitter fast i føttene til dyr"]
                },
                {
                    spm: "Hvordan sprer vikke frøene sine?",
                    bilde: "/wp-content/uploads/NAT_0751.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Vann",
                        "Eksplosjon",
                        "Mennesker"
                    ],
                    riktige_svar: ["Eksplosjon"]
                },
                {
                    spm: "Hvordan spres dette frøet?",
                    bilde: "/wp-content/uploads/NAT_0744_v3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Med bjørnen",
                        "Med vinden",
                        "Med vannet i havet"
                    ],
                    riktige_svar: ["Med vinden"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/NAT_7473_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Grønne bananer",
                        "Sukkertøy",
                        "Belger med erter"
                    ],
                    riktige_svar: ["Belger med erter"]
                },
                {
                    spm: "Hva er dette",
                    bilde: "/wp-content/uploads/geitramsfrø-blog1.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Fjær fra høner",
                        "Såpe-skum",
                        "Frø med ull"
                    ],
                    riktige_svar: ["Frø med ull"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/Acer_platanoides_seeds.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Frø fra lønnetreet",
                        "Propeller til et fly",
                        "En leke til å kaste med"
                    ],
                    riktige_svar: ["Frø fra lønnetreet"]
                },
                {
                    spm: "Hvordan spres disse frøene?",
                    bilde: "/wp-content/uploads/Acer_platanoides_seeds.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "De faller rett ned",
                        "I vinden som propeller",
                        "Jenter og gutter spiser dem"
                    ],
                    riktige_svar: ["I vinden som propeller"]
                },
                {
                    spm: "Hva er å ligge i dvale?",
                    bilde: "/wp-content/uploads/Big_feet_sleeping521365548.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Å svømme som en hval",
                        "Å sove hele vinteren",
                        "Å ligge med beina på puta"
                    ],
                    riktige_svar: ["Å sove hele vinteren"]
                },
                {
                    spm: "Hvordan forbereder ekornet seg til vinteren?",
                    bilde: "/wp-content/uploads/NAT_0767.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Løper og hopper til Spania",
                        "Samler nøtter og frø",
                        "Sover i et hull til våren kommer"
                    ],
                    riktige_svar: ["Samler nøtter og frø"]
                },
                {
                    spm: "Hvorfor flyr fugler fra Norge om høsten?",
                    bilde: "/wp-content/uploads/NAT_0765.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "De synes det er kjedelig her",
                        "Det er ikke insekter og bær her om vinteren",
                        "De lengter hjem til bestemor og bestefar"
                    ],
                    riktige_svar: ["Det er ikke insekter og bær her om vinteren"]
                }
            ]
        };
        
        var quiz09 = {
            title: "kapittel 9",
            q_and_a: [{
                    spm: "Hva er en høst?",
                    bilde: "/wp-content/uploads/1010101-300x200.jpeg",
                    bildetekst: "Foto: Finn Jensen",
                    svaralternativer: [
                        "Det er en som hører dårlig",
                        "Det er å gå på tur og bli tørst",
                        "En høst er ei årstid der naturen forbereder seg til vinteren"
                    ],
                    riktige_svar: ["En høst er ei årstid der naturen forbereder seg til vinteren"]
                },
                {
                    spm: "Hvorfor blir det årstider i Norge?",
                    bilde: "/wp-content/uploads/00000009.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Fordi jorda står på skrå",
                        "Fordi sola går fortere",
                        "Fordi jorda går saktere noen ganger"
                    ],
                    riktige_svar: ["Fordi jorda står på skrå"]
                },
                {
                    spm: "Når er høsten?",
                    bilde: "/wp-content/uploads/44444.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Mellom vinter og sommer",
                        "Når vi hoster",
                        "Mellom sommer og vinter"
                    ],
                    riktige_svar: ["Mellom sommer og vinter"]
                },
                {
                    spm: "Hvem var Archimboldo?",
                    bilde: "/wp-content/uploads/Giuseppe_Arcimboldo_-_Autumn_1573-1-248x300.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En robot",
                        "En maler",
                        "Ei bolle med rosiner"
                    ],
                    riktige_svar: ["En maler"]
                },
                {
                    spm: "Kan poteter være blå og svarte?",
                    bilde: "/wp-content/uploads/11.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nei, de er alltid gule",
                        "Nei, de er alltid brune",
                        "Ja"
                    ],
                    riktige_svar: ["Ja"]
                },
                {
                    spm: "Hvor kommer poteten fra?",
                    bilde: "/wp-content/uploads/12.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Sør-Amerika",
                        "Norge",
                        "Sørpolen"
                    ],
                    riktige_svar: ["Sør-Amerika"]
                },
                {
                    spm: "Hva betyr det at noe vokser vilt?",
                    bilde: "/wp-content/uploads/13.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Det er farlige planter",
                        "At menneskene ikke har sådd eller planta det",
                        "Det er planter som har sterk vilje"
                    ],
                    riktige_svar: ["At menneskene ikke har sådd eller planta det"]
                },
                {
                    spm: "Hva kan vi lage av havre?",
                    bilde: "/wp-content/uploads/14-215x300.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Havremel",
                        "Havregryn",
                        "Havregrøt",
                        "Alle de tre alternativene over"
                    ],
                    riktige_svar: ["Alle de tre alternativene over"]
                },
                {
                    spm: "Hva er korn?",
                    bilde: "/wp-content/uploads/15-300x225.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Frø",
                        "En som synger I kor",
                        "To kroner"
                    ],
                    riktige_svar: ["Frø"]
                },
                {
                    spm: "Hvor vokser peanøttene?",
                    bilde: "/wp-content/uploads/NAT_0732_v3-300x200.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Øverst i høye palmer",
                        "På små trær i en park",
                        "Nede i jorda"
                    ],
                    riktige_svar: ["Nede i jorda"]
                },
                {
                    spm: "Hvorfor vokser det ikke peanøtter i Norge?",
                    bilde: "/wp-content/uploads/16.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Fordi det er for varmt her",
                        "Fordi voksne spiser opp alt når barna har lagt seg",
                        "Fordi det er for kaldt her"
                    ],
                    riktige_svar: ["Fordi det er for kaldt her"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/17.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "En kam med mye hår på",
                        "Grifler med arr fra hunnblomsten",
                        "Grønt sukkerspinn"
                    ],
                    riktige_svar: ["Grifler med arr fra hunnblomsten"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/18.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Et romskip som kommer",
                        "Et bustete hode",
                        "Hann-blomsten til mais"
                    ],
                    riktige_svar: ["Hann-blomsten til mais"]
                },
                {
                    spm: "Hva holder Katt?",
                    bilde: "/wp-content/uploads/NAT_0737-225x300.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En stokk fordi Katt har vondt i beinet",
                        "En spade til å grave med",
                        "Ei stor skje til å røre i suppa med"
                    ],
                    riktige_svar: ["En spade til å grave med"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/123456789.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Hvit sjokolade",
                        "En hvit gitar",
                        "Mange skjeer"
                    ],
                    riktige_svar: ["Mange skjeer"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/NAT_0754_v3-300x225.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ei måke",
                        "Ei linerle",
                        "En stork"
                    ],
                    riktige_svar: ["Ei måke"]
                }
            ]
        };
        
        var quiz10 = {
            title: "kapittel 10",
            q_and_a: [{
                    spm: "Hvorfor blir det høst i Norge?",
                    bilde: "/wp-content/uploads/00000009.jpeg",
                    bildetekst: "",
                    svaralternativer: [
                        "Fordi jordkloden går rundt sola på skrå",
                        "Fordi sola går lenger unna",
                        "Fordi jordkloden går lenger unna sola"
                    ],
                    riktige_svar: ["Fordi jordkloden går rundt sola på skrå"]
                },
                {
                    spm: "Hva er det verste for insekter om vinteren?",
                    bilde: "/wp-content/uploads/NAT_9018_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Å fryse til is og dø",
                        "Å være sultne",
                        "Å bli spist av harer"
                    ],
                    riktige_svar: ["Å fryse til is og dø"]
                },
                {
                    spm: "Hvilke humler lever fra høst til vår?",
                    bilde: "/wp-content/uploads/NAT_7465_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Hannene",
                        "Hunnene",
                        "Bare befrukta hunner"
                    ],
                    riktige_svar: ["Bare befrukta hunner"]
                },
                {
                    spm: "Hvilken sommerfugl kan leve med snø på om vinteren? ",
                    bilde: "/wp-content/uploads/1280px-Snow-covered_fir_trees.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ingen kan det",
                        "Alle kan det",
                        "Sitron-sommerfuglen"
                    ],
                    riktige_svar: ["Sitron-sommerfuglen"]
                },
                {
                    spm: "Hva er å gå i dvale?",
                    bilde: "/wp-content/uploads/Orizo5.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Å sove om vinteren uten å spise",
                        "Å dale ned fra skyene",
                        "Å leke med halen"
                    ],
                    riktige_svar: ["Å sove om vinteren uten å spise"]
                },
                {
                    spm: "Kan noen fugler samle mat om høsten?",
                    bilde: "/wp-content/uploads/NAT_0744_v3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Nei",
                        "Nei, det kan bare ekorn",
                        "Ja"
                    ],
                    riktige_svar: ["Ja"]
                },
                {
                    spm: "Hva betyr å hamstre?",
                    bilde: "/wp-content/uploads/cherry_sweet_cherry_red_fruit_healthy_leaves_branch_summer-1121565.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Å samle mat for å spise seinere",
                        "Å komme fra byen Hamar",
                        "Å leke med en brun hamster"
                    ],
                    riktige_svar: ["Å samle mat for å spise seinere"]
                },
                {
                    spm: "Hvorfor flyr grågåsa i plog?",
                    bilde: "/wp-content/uploads/NAT_0765.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "De får bedre utsikt",
                        "De er dumme",
                        "Det er lettere å fly i plog"
                    ],
                    riktige_svar: ["Det er lettere å fly i plog"]
                },
                {
                    spm: "Hva gjør fugler når de hekker i Norge?",
                    bilde: "/wp-content/uploads/NAT_0754_v3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "De sitter på sekker",
                        "De parer seg og får unger",
                        "De bader i bekkene"
                    ],
                    riktige_svar: ["De parer seg og får unger"]
                },
                {
                    spm: "Hvor bor Rødnebb-terna når det er vinter i Norge?",
                    bilde: "/wp-content/uploads/512px-Eidersperrw_sterna_paradisaea_with_fish_oben.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "I Irak",
                        "I England",
                        "På Sørpolen"
                    ],
                    riktige_svar: ["På Sørpolen"]
                },
                {
                    spm: "Hvorfor blir trærne gule og røde om høsten?",
                    bilde: "/wp-content/uploads/blader_høst.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Treet henter de grønne klorofyll-kornene sine, og da ser vi de andre fargene.",
                        "Trærne dør",
                        "Treet er sykt"
                    ],
                    riktige_svar: ["Treet henter de grønne klorofyll-kornene sine, og da ser vi de andre fargene."]
                },
                {
                    spm: "Hvilken farge har haren om sommeren?",
                    bilde: "/wp-content/uploads/VACCINIUM_MYRTILLUS_-_GENTO_-_IB-269_Nabiu.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Brun",
                        "Hvit",
                        "Oransje"
                    ],
                    riktige_svar: ["Brun"]
                },
                {
                    spm: "Hvilken farge har haren om vinteren?",
                    bilde: "/wp-content/uploads/1280px-Snow-covered_fir_trees.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Svart",
                        "Brun",
                        "Hvit"
                    ],
                    riktige_svar: ["Hvit"]
                },
                {
                    spm: "Hva spiser haren?",
                    bilde: "/wp-content/uploads/512px-Arctic_Hare_1.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Kvister og knopper",
                        "Mus",
                        "Ekorn"
                    ],
                    riktige_svar: ["Kvister og knopper"]
                },
                {
                    spm: "Hvem har gått her?",
                    bilde: "/wp-content/uploads/Lepus_timidus_tracks.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Elg",
                        "Hare",
                        "Katt"
                    ],
                    riktige_svar: ["Hare"]
                },
                {
                    spm: "Hvem har gnagd på konglene?",
                    bilde: "/wp-content/uploads/kongler_ekorn.png",
                    bildetekst: "",
                    svaralternativer: [
                        "Ekorn",
                        "Mus",
                        "Grågåsa"
                    ],
                    riktige_svar: ["Ekorn"]
                },
                {
                    spm: "Hvem er det største dyret i skogen?",
                    bilde: "/wp-content/uploads/1280px-Mixed_Picea_Spruce_forest_from_Vestfold_county_in_Norway.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Bjørnen",
                        "Reven",
                        "Elgen"
                    ],
                    riktige_svar: ["Elgen"]
                },
                {
                    spm: "Hva er et elg-tråkk?",
                    bilde: "/wp-content/uploads/512px-Alces_alces_alces_Myre_Norway.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En sti hvor elgene pleier å gå",
                        "En voksen som tråkker på elgen",
                        "Elg-bein"
                    ],
                    riktige_svar: ["En sti hvor elgene pleier å gå"]
                },
                {
                    spm: "Hva gjør dyr for å leve om vinteren?",
                    bilde: "/wp-content/uploads/NAT_0732_v2.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Få tjukkere og lysere pels",
                        "Samle mat om høsten",
                        "Gå i dvale (sove)",
                        "Fly vekk fra Norge",
                        "Alle alternativene over"
                    ],
                    riktige_svar: ["Alle alternativene"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/512px-Alces_alces_alces_Myre_Norway.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En elg",
                        "En giraff",
                        "En bjørn"
                    ],
                    riktige_svar: ["En elg"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/512px-Arctic_Hare_1.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En katt",
                        "En hare",
                        "En liten hund"
                    ],
        
                    riktige_svar: ["En hare"]
                },
                {
                    spm: "Hva gjør piggsvinet om vinteren?",
                    bilde: "/wp-content/uploads/NAT_7459.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Ligger i dvale (sover)",
                        "Bor i et reir i et tre",
                        "Går i snøen og finner kongler"
                    ],
                    riktige_svar: ["Ligger i dvale"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/ComputerHotline_-_Danaus_plexippus_by_3.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En fugl",
                        "Ei vifte",
                        "En sommerfugl"
                    ],
                    riktige_svar: ["En sommerfugl"]
                },
                {
                    spm: "Hva er dette?",
                    bilde: "/wp-content/uploads/Monarch_Butterfly_Chrysalis.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "En puppe som blir sommerfugl",
                        "En frukt",
                        "En liten lykt"
                    ],
                    riktige_svar: ["En puppe som blir sommerfugl"]
                },
                {
                    spm: "Hvordan forbereder ekornet seg til vinteren?",
                    bilde: "/wp-content/uploads/NAT_0734_v6.jpg",
                    bildetekst: "",
                    svaralternativer: [
                        "Det samler mat om høsten",
                        "Det får tjukkere pels ",
                        "Det får gråere pels",
                        "Alle svaralternativene over"
                    ],
                    riktige_svar: ["Alle svaralternativene"]
                }
            ]
        };
        
        var quiz11 = {
            title: "spørsmål fra alle kapitlene!",
            q_and_a: quiz01.q_and_a.concat(quiz02.q_and_a,quiz03.q_and_a,quiz04.q_and_a,quiz05.q_and_a,quiz06.q_and_a,quiz07.q_and_a,quiz08.q_and_a,quiz09.q_and_a,quiz10.q_and_a)
        }      

        /* Add the different quizzies in one array */
        quizzies[1] = quiz01;
        quizzies[2] = quiz02;
        quizzies[3] = quiz03;
        quizzies[4] = quiz04;
        quizzies[5] = quiz05;
        quizzies[6] = quiz06;
        quizzies[7] = quiz07;
        quizzies[8] = quiz08;
        quizzies[9] = quiz09;
        quizzies[10] = quiz10;
        quizzies[11] = quiz11;
        

        var ferdige_kvisser = Object.keys(quizzies).toString();

        var quiz_under_construction = {
            title: "uferdig",
            q_and_a: [
                {
                    spm: "Hva er det som skjer her?",
                    bilde: "/media/img/kviss_construction.png",
                    bildetekst: "En person som har en liten pause i arbeidet.",
                    svaralternativer: [
                        "Kvissen er ikke laget ferdig",
                        "Jeg kan prøve ferdig kviss i kapittel: " + ferdige_kvisser,
                        "Jeg kan prøve igjen senere"
                    ],
                    riktige_svar: ["Kvissen er ikke laget ferdig","Jeg kan prøve ferdig kviss i kapittel: " + ferdige_kvisser,"Jeg kan prøve igjen senere"],

                }
            ]
        };

        /* shared variables to the quiz script */
        var app,
        quiz_num,
        quiz_title,
        quiz_bank,
        quiz_len = 10,
        quiz_sample;

        /**
        * Shuffles a copy of an array, returns the copy. 
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
            var button = $('<button class="kviss_start">Start ny kviss!</button>').click(function(e){
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
                        <img src="' + obj.bilde + '" alt="' + obj.bildetekst + '"/>\
                    </div>\
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
                return icon;
            }

            function get_SVG_score_icon(el) {
                var icon = null;
                if($(el).is(':checked') && $(el).hasClass('correct')) {
                    icon = $('<svg class="icon"><use xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-riktig-hode"></use></svg>');
                }
                if($(el).is(':checked') && $(el).hasClass('incorrect')) {
                    icon = $('<svg class="icon"><use xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-mulig-hode"></use></svg>');
                }
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

            domcontainer.append("<header class=\"entry-header\"><h2 class=\"entry-title\">Kviss - " + title + "</h2></header>");
            $.each(quiz_sample, function( index, obj) {
                obj.svaralternativer = shuffle(obj.svaralternativer);
                var spm_nr = index + 1;
                var figure_markup = generate_figure_markup(obj);
                var fieldset = $('<fieldset id="kviss-spm-' + spm_nr + '" class="quiz-part" data-spm="' + spm_nr + '">\
                <legend>' + spm_nr + ' av ' + quiz_len + '</legend>\
                ' + figure_markup + '\
                <p class="question">' + obj.spm + '</p>\
                </fieldset>');

                var ant_riktige_svar = obj.riktige_svar.length;
                var input_type = determine_input_type(ant_riktige_svar);

                $.each(obj.svaralternativer, function( index, value) {
                    console.log(value);
                    var alternativ = generate_svaralternativ_markup(index, value, input_type, spm_nr);
                    fieldset.append(alternativ);
                });

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
        <span class="kviss-score">\n\
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
                        // add svg score icons
                        if($(el).is(':checked')) {
                            $(smileys).append(get_SVG_score_icon(el));
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
            var current_quiz_set = quizzies[quiz_num] || quiz_under_construction;
            
            var current_quiz_len = Object.keys(current_quiz_set["q_and_a"]).length;

            // if the current quiz set has less than the default number of questions, 
            // generate a quiz using the total number of questions in the set
            // otherwise quiz_len questions will be drawn from the set

            if(current_quiz_len < quiz_len) {
                quiz_len = current_quiz_len;
            }
            
            quiz_title = current_quiz_set.title;
            quiz_bank = current_quiz_set.q_and_a;
            
            start_new_quiz(app, quiz_title, quiz_bank, quiz_len);
        }

        $('#kviss').append(kviss_start_knapp());
    }

    quiz();

});