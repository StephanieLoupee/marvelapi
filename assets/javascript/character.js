$(function() {


    //This sets up most of the variables needed to string together the api call
    //searchtext has to be added after the button-click in order to
    //capture the input from the front end.

    let url = "http://gateway.marvel.com:80/v1/public/characters";
    let apikey = "533c42e7f6805eb58bbc046dfb776ae4";
    let hash = "7eaf3f94d5fbbd6ebed1081c97bc1a5c";
    let ts = "1";
    let limit = 100;
    let searchButton = $("#search")

    //On click of the search button the search text is captured and rolled up
    //with the other variables to create the queryParm (used in the call to the api)
    searchButton.click (function() {
      let charSearch = $("#searchtext").val();
      let queryParm = url + "?nameStartsWith=" + charSearch + "&limit=" + limit + "&apikey=" + apikey + "&hash=" + hash + "&ts=" + ts;

    //this is the call to the api which returns data.  Sets 'response' to
    //get to the results file so don't have to go through data.data all the time
      $.get(queryParm, function( data ) {
        let response = data.data.results;
        //console.log(response);

    //still within the button-click function, this puts together the path and extension
    //to provide the full address to the thumbnail image, then adds the image to the table.
    //Adding the height keeps the size of the table manageable, and consistent
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
