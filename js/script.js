
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
        });


        //Load wikipedia data
    var wikiUrl = 'https://en.wikijkhgulgjkkpedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';
    var wikiReuestTimeout = setTimeout(function() {
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);

        //YOUR CODE GOES HERE
    $.ajax({
        url: wikiUrl,
        dataType: 'jsonp',
        ///here I am wrapping the response in a function
        success: function(response) {
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'https://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
            };
            clearTimeout(wikiReuestTimeout);
        }

    });

    return false;

};
$('#form-container').submit(loadData);





