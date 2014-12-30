$(function(){

    var hash = window.location.hash?window.location.hash:'dK2se3bCFHo';
    hash = hash.replace("#", "");
    var load_url = 'https://hackpad.com/ep/pad/static/' + hash;

    $.ajax({
        url: load_url,
        type: 'GET',
        success: function(res) {
            var text = res.responseText;
            // then you can manipulate your text as you wish
            console.log(text);
            text = text.replace("<p><strong>", "<p class='heading2'><strong>");
            $('article').html(text);
            $('p strong').parent('p').addClass('heading2');
        }
    }); 
})
