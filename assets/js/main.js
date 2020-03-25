(function() {
  $(document).ready(function() {
    const client = stitch.Stitch.initializeDefaultAppClient(
      "sprint-studio-charity-buy-ghxmq"
    );

    client.auth
      .loginWithCredential(new stitch.AnonymousCredential())
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.error(err);
      });

    $('form[name="link-generator"] .btn').click(function() {
      let amazonLink = $('input[name="amazon-link"]').val();
      client
        .callFunction("Generate_tracking_link", [amazonLink])
        .then(function(result) {
          if (result.error) {
            return alert(result.message);
          }

          window.open(result, "blank");
        });
    });
  });
})();
