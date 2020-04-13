(function () {
  $(document).ready(function () {
    const client = stitch.Stitch.initializeDefaultAppClient(
      "sprint-studio-charity-buy-ghxmq"
    );

    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(function (user) {
        $('[name="user"]').removeAttr("hidden");
        $('[name="user"] a').html(user.profile.name);
      });
    }

    if (client.auth.isLoggedIn) {
      let user = client.auth.user;

      $('[name="user"]').removeAttr("hidden");
      $(".btn-login-facebook").attr("hidden", "");
      $(".btn#join").attr("hidden", "");
      $('[name="user"] a').first().html(user.profile.name);
    }

    var trackedLink = "";
    $('form[name="link-generator"] .btn').click(function () {
      let amazonLink = $('input[name="amazon-link"]').val();

      if (!client.auth.isLoggedIn) {
        client.auth
          .loginWithCredential(new stitch.AnonymousCredential())
          .then((user) => {
          })
          .catch((err) => {
            console.error(err);
          });
      }

      client
        .callFunction("Generate_tracking_link", [amazonLink])
        .then(function (result) {
          if (result.error) {
            return alert(result.message);
          }

          window.dataLayer.push({ event: "genera-link" });
          $('.btn[name="redirect-amazon"').removeAttr("hidden");
          $('.btn[name="genera-link"').attr("hidden", "");
          trackedLink = result;
        });
    });

    $(".btn-buy").click(function () {
      window.dataLayer.push({ event: "redirect-amazon" });
      window.open(trackedLink, "blank");
    });

    $(".btn.btn-login-facebook").click(function () {
      const credential = new stitch.FacebookRedirectCredential();

      client.auth.logout();
      client.auth.loginWithRedirect(credential);
    });

    $(".btn-logout").click(function () {
      client.auth.logout().then(function () {
        location.reload();
      });
    });

    $(".btn-newsletter").click(function () {
      let name = $('input[name="name"]').val();
      let email = $('input[name="email"]').val();

      client.auth
        .loginWithCredential(new stitch.AnonymousCredential())
        .then((user) => {
          client
            .callFunction("Iscrizione_newsletter", [name, email])
            .then(function (result) {
              if (result.error) {
                return alert(result.message);
              }

              alert("Iscrizione avvenuta con successo!");
            });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  });
})();
