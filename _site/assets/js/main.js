(function(){
    $(document).ready(function() {
        $('form[name="link-generator"]').submit(function() {
            let amazonLink = $('input[name="amazon-link"]').val().split('?')[0];
            window.open(amazonLink + '?tag=873401-21', 'blank')
        });
    });
})();