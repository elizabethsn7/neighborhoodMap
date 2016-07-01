
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    

    // YOUR CODE GOES HERE!
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;
    console.log(address);

    // load streetview
    var streetUrl = 'https://maps.googleapis.com/maps/api/streetview?&size=600x400&location=' + address + '';
    console.log(streetUrl);

    //I got confused here because of the fact that the src is using the + sign on both sides 
    //of the streetUrl
    $body.append('<img class="bgimg" src="' + streetUrl + '">');
    
    //load nytimes
    var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    var nytApyKey = 'de86a3351556445e91e98a55763166a7';

    //YOUR CODE GOES HERE!

    $.getJSON('nytUrl', function(data) {
        var articles = [];
        var i = 0;
        for (i=0, i<=9, i++);
            

        $("<ul/" , {
            "class": "nytimes-articles",
            html: items.join("")
        }).appendTo("body");
    });

    $.ajax({
        url: nytUrl,
        method: 'GET',
    })
    .done(function(result) {
        console.log(result);
    })
    .fail(function(err) {
        throw err;
    });

    console.log(data);

    return false;
};

$('#form-container').submit(loadData);










