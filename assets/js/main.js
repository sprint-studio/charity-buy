(function(){
    $(document).ready(function() {
        $('form[name="link-generator"]').submit(function() {
            let amazonLink = $('input[name="amazon-link"]').val().split('?')[0];

            if(amazonLink.indexOf('amazon') === -1) {
                return alert("Attenzione, sembra che tu abbia inserito un link non valido.   Ricorda che devi inserire il link di un prodotto su Amazon.");
            }
            
            window.open(amazonLink + '?tag=873401-21', 'blank')
        });
    });
})();