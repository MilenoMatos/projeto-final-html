$(document).ready(function() {
    $('#esteregg').click(function(e) {
        $('#esteregg_div').show();
        e.preventDefault();
    })

    $('#esteregg_div').click(function(e) {
        $('#esteregg_div').hide();
        e.preventDefault();
    })
})
