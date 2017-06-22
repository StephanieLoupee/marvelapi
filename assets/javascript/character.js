$(function() {

    //console.log()

    let url = "http://gateway.marvel.com:80/v1/public/characters";
    let apikey = "533c42e7f6805eb58bbc046dfb776ae4";
    let hash = "7eaf3f94d5fbbd6ebed1081c97bc1a5c";
    let ts = "1";
    let limit = 100;
    let submitButton = $("#submit")


    submitButton.click (function() {
      let charSearch = $("#searchtext").val();
      let queryParm = url + "?nameStartsWith=" + charSearch + "&limit=" + limit + "&apikey=" + apikey + "&hash=" + hash + "&ts=" + ts;

      $.get(queryParm, function( data ) {
        let response = data.data.results;
        //console.log(response);
        $.each( response, function( index, char ) {
            let picture = "<img src='" + char.thumbnail.path + "." + char.thumbnail.extension + "' height='90'/>"

           $('#characters tbody').append(
              '<tr class="child"><td>' + char.name +
              '</td><td>' + picture +
              '</td></tr>'
           )
         })
      })
    })
})


    //   if (guessText.val() == answer) {
    //     console.log("the answer was right")
    //     let newScore = parseInt(score.html()) + parseInt(value.html());
    //     score.html(newScore);
    //
    //   } else {
    //     console.log("the answer is not right. Guess was " + guessText.val() + " ; answer was " + answer);
    //   }
    //
    // function getCharacters() {
    //   $.get( "http://gateway.marvel.com:80/v1/public/characters", function( data ) {
    //       //console.log(data);
    //       //console.log(data[0].question);
    //       //console.log(data[0].category.title);
    //       //console.log(data[0].value);
    //       console.log(data[0].answer);
    //       category.html(data[0].category.title);
    //       value.html(data[0].value);
    //       question.html(data[0].question);
    //       answer = data[0].answer;
    //       //guessText.html("My Answer is: ");
    //       //setText("My Answer is: ");
    //
    //       name="apikey" value="533c42e7f6805eb58bbc046dfb776ae4" />
    //       <input type="hidden" name="hash" value="7eaf3f94d5fbbd6ebed1081c97bc1a5c" />
    //       <input type="hidden" name="ts" value="1" />
    //   })
    // }
    //
    //     poseQuestion();
    //
    //     answerButton.click (function() {
    //       let submittedAnswer = guessText.val();
    //       //console.log("guessText = " + guessText.val());
    //       if (guessText.val() == answer) {
    //         console.log("the answer was right")
    //         let newScore = parseInt(score.html()) + parseInt(value.html());
    //         score.html(newScore);
    //
    //       } else {
    //         console.log("the answer is not right. Guess was " + guessText.val() + " ; answer was " + answer);
    //       }
    //
    //       poseQuestion();
    //
    //
