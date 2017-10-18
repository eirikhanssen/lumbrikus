 // add title
        if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
            app.append("<h1>" + quiztitle + "</h1>");
        } else {
            app.append("<h1>Quiz</h1>");
        }

        //add pager and questions
        if (typeof quiz === "object") {
            //add pager
            $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Spørsmål 1 av ' + quiz_len).appendTo(app);

            //add first question
           $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['spm']).appendTo(app);
            //add image if present
            if (quiz[0].hasOwnProperty('bilde') && quiz[0]['bilde'] != "") {
                //console.log("jippi");
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['bilde']).attr('alt', htmlEncode(quiz[0]['spm'])).appendTo(app);
            }
            
            $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo(app);

            //questions holder
            $(document.createElement('ul')).attr('id', 'choice-block').appendTo(app);

            //add choices
            addChoices(quiz[0]['choices']);

            //add submit button
            $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
                'font-weight': 700,
                'color': '#222',
                'padding': '30px 0'
            }).appendTo(app);

            setupButtons();
        }

    } // quizInit()

    quizInit();


});

function htmlEncode(value) {
    return $(document.createElement('div')).text(value).html();
}

function addChoices(choices) {
    if (typeof choices !== "undefined" && $.type(choices) == "array") {
        $('#choice-block').empty();
        for (var i = 0; i < choices.length; i++) {
            $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
        }
    }
}

function setupButtons() {
    $('.choice').on('mouseover', function () {
        $(this).css({
            'background-color': '#e1e1e1'
        });
    });
    $('.choice').on('mouseout', function () {
        $(this).css({
            'background-color': '#fff'
        });
    })
    $('.choice').on('click', function () {
        picked = $(this).attr('data-index');
        $('.choice').removeAttr('style').off('mouseout mouseover');
        $(this).css({
            'border-color': '#222',
            'font-weight': 700,
            'background-color': '#c1c1c1'
        });
        if (submt) {
            submt = false;
            $('#submitbutton').css({
                'color': '#000'
            }).on('click', function () {
                $('.choice').off('click');
                $(this).off('click');
                processQuestion(picked);
            });
        }
    })
}


    /*
    
});



//console.log(quizzies);
/*

var quiztitle = "Social Security Quiz";


 var quiz = [
        {
            "question" : "Q1: Who came up with the theory of relativity?",
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
            "choices" : [
                                    "Sir Isaac Newton",
                                    "Nicolaus Copernicus",
                                    "Albert Einstein",
                                    "Ralph Waldo Emmerson"
                                ],
            "correct" : "Albert Einstein",
            "explanation" : "Albert Einstein drafted the special theory of relativity in 1905.",
        },
        {
            "question" : "Q2: Who is on the two dollar bill?",
            "image" : "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
            "choices" : [
                                    "Thomas Jefferson",
                                    "Dwight D. Eisenhower",
                                    "Benjamin Franklin",
                                    "Abraham Lincoln"
                                ],
            "correct" : "Thomas Jefferson",
            "explanation" : "The two dollar bill is seldom seen in circulation. As a result, some businesses are confused when presented with the note.",
        },
        {
            "question" : "Q3: What event began on April 12, 1861?",
            "image" : "",
            "choices" : [
                                    "First manned flight",
                                    "California became a state",
                                    "American Civil War began",
                                    "Declaration of Independence"
                                ],
            "correct" : "American Civil War began",
            "explanation" : "South Carolina came under attack when Confederate soldiers attacked Fort Sumter. The war lasted until April 9th 1865.",
        },
     

    ];



/* var currentquestion = 0,
     score = 0,
     submt = true,
     picked;

 jQuery(document).ready(function ($) {


     function htmlEncode(value) {
         return $(document.createElement('div')).text(value).html();
     }


     function addChoices(choices) {
         if (typeof choices !== "undefined" && $.type(choices) == "array") {
             $('#choice-block').empty();
             for (var i = 0; i < choices.length; i++) {
                 $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
             }
         }
     }

     function nextQuestion() {
         submt = true;
         $('#explanation').empty();
         $('#question').text(quiz[currentquestion]['question']);
         $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
         if (quiz[currentquestion].hasOwnProperty('bilde') && quiz[currentquestion]['bilde'] != "") {
             if ($('#question-image').length == 0) {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['bilde']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
             } else {
                 $('#question-image').attr('src', quiz[currentquestion]['bilde']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
             }
         } else {
             $('#question-image').remove();
         }
         addChoices(quiz[currentquestion]['choices']);
         setupButtons();


     }


     function processQuestion(choice) {
         if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
             $('.choice').eq(choice).css({
                 'background-color': '#50D943'
             });
             $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
             score++;
         } else {
             $('.choice').eq(choice).css({
                 'background-color': '#D92623'
             });
             $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
         }
         currentquestion++;
         $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function () {
             if (currentquestion == quiz.length) {
                 endQuiz();
             } else {
                 $(this).text('Check Answer').css({
                     'color': '#222'
                 }).off('click');
                 nextQuestion();
             }
         })
     }


     function setupButtons() {
         $('.choice').on('mouseover', function () {
             $(this).css({
                 'background-color': '#e1e1e1'
             });
         });
         $('.choice').on('mouseout', function () {
             $(this).css({
                 'background-color': '#fff'
             });
         })
         $('.choice').on('click', function () {
             picked = $(this).attr('data-index');
             $('.choice').removeAttr('style').off('mouseout mouseover');
             $(this).css({
                 'border-color': '#222',
                 'font-weight': 700,
                 'background-color': '#c1c1c1'
             });
             if (submt) {
                 submt = false;
                 $('#submitbutton').css({
                     'color': '#000'
                 }).on('click', function () {
                     $('.choice').off('click');
                     $(this).off('click');
                     processQuestion(picked);
                 });
             }
         })
     }


     function endQuiz() {
         $('#explanation').empty();
         $('#question').empty();
         $('#choice-block').empty();
         $('#submitbutton').remove();
         $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
         $(document.createElement('h2')).css({
             'text-align': 'center',
             'font-size': '4em'
         }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
     }


     function init() {
         //add title
         if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
             $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
         } else {
             $(document.createElement('h1')).text("Quiz").appendTo('#frame');
         }

         //add pager and questions
         if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
             //add pager
             $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
             //add first question
             $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
             //add image if present
             if (quiz[0].hasOwnProperty('bilde') && quiz[0]['bilde'] != "") {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['bilde']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
             }
             $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

             //questions holder
             $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

             //add choices
             addChoices(quiz[0]['choices']);

             //add submit button
             $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
                 'font-weight': 700,
                 'color': '#222',
                 'padding': '30px 0'
             }).appendTo('#frame');

             setupButtons();
         }
     }

     init();
 });

*/
