

//Function taht fires after clicking on 'OK' button after futher questions are answered.
function formDone() {
  console.log('hello, nice to meet you!');
    var div2 = document.createElement("div");
      div2.setAttribute("id", "div2");
        var para2 = document.createElement("p");
          div2.appendChild(para2)
            var nextText = document.createTextNode("Thanks for sharing that with us, looking for coaches that can help you...");
              para2.appendChild(nextText);
                div2.className = "specifyProblem";
                  document.getElementById("welcome").appendChild(div2);
                    var spinner = document.createElement("div");
                      spinner.setAttribute("id", "spinnerWrapper");
                        var spinner2 = document.createElement("div");
                          spinner2.setAttribute("class", "simple-load-spinner");
                            document.getElementById("div2").appendChild(spinner);
                              document.getElementById("spinnerWrapper").appendChild(spinner2);

};

//Function that fires after clicking on the 'GO' button on welcome page.
    function nextQuestions() {
      var div = document.createElement("div");
        var para = document.createElement("p");
        div.appendChild(para)
          var textdiv = document.createTextNode("Sorry to hear that...");
          para.appendChild(textdiv);
            var br = document.createElement("br");
            para.appendChild(br);
              var textdiv2 = document.createTextNode("Please help us to help you. Pick one of these that best fits your feelings.");
              para.appendChild(textdiv2);
                var checkBox1 = document.createElement("input");
                div.appendChild(checkBox1);
                checkBox1.setAttribute('type','checkbox');
                checkBox1.className = "checkBoxClass";
                var textdiv3 = document.createTextNode("Work sucks.");
                div.appendChild(textdiv3);
                  var checkBox2 = document.createElement("input");
                  div.appendChild(checkBox2);
                  checkBox2.setAttribute('type','checkbox');
                  checkBox2.className = "checkBoxClass";
                  var textdiv4 = document.createTextNode("Sad feelings taking over.");
                  div.appendChild(textdiv4);
                    var checkBox3 = document.createElement("input");
                    div.appendChild(checkBox3);
                    checkBox3.setAttribute('type','checkbox');
                    checkBox3.className = "checkBoxClass";
                    var textdiv5 = document.createTextNode("Anxiousnesss.");
                    div.appendChild(textdiv5);
                      var nextButton = document.createElement("button");
                      div.appendChild(nextButton);
                      nextButton.className = "button";
                      var nextButtonText = document.createTextNode("OK");
                      nextButton.setAttribute("id", "okButton");
                      nextButton.appendChild(nextButtonText);
                      nextButton.addEventListener('click', function() { formDone(); }, false);
      div.className = "specifyProblem";
      document.getElementById("welcome").appendChild(div);
    };
