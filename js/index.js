

$(document).on('click', 'a', function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    window.open(url, '_blank');
});
