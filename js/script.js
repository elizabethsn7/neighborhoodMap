
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    // load streetview
    var streetUrl = 'https://maps.googleapis.com/maps/api/streetview?&size=600x400&location=' + address + '';
    console.log(streetUrl);

    $body.append('<img class="bgimg" src="' + streetUrl + '">');


    //load nytimes
    var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' 
    + city + '&sort=newest&api-key=de86a3351556445e91e98a55763166a7'
    
    $.getJSON(nytUrl, function(data) {
        $nytHeaderElem.text('New York Times Articles About ' + city);

        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">' 
            +'<a href="'+article.web_url+'">'
            +article.headline.main
            +'</a>'+'<p>' + article.snippet +'</p>'+'</li>');

        };

    }).error(function(e) {
            $nytHeaderElem.text("New York Times Articles Cannot Be Loaded")
        })
    return false;

};
$('#form-container').submit(loadData);
