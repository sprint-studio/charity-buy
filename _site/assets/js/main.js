(function() {
  $(document).ready(function() {
    const client = stitch.Stitch.initializeDefaultAppClient(
      "sprint-studio-charity-buy-ghxmq"
    );

    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(function(user) {
        $('[name="user"] a').val(user.profile.name);
      });
    }

    if (client.auth.isLoggedIn) {
      let user = client.auth.user;
      console.log(client.auth.user.profile);

      $('[name="user"] a').html(user.profile.name);
    } else {
      client.auth
        .loginWithCredential(new stitch.AnonymousCredential())
        .then(user => {
          console.log(user);
        })
        .catch(err => {
          console.error(err);
        });
    }

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

    $(".btn#join").click(function() {
      const credential = new stitch.FacebookRedirectCredential();
      client.auth.logout();
      client.auth.loginWithRedirect(credential);
    });
  });
})();
