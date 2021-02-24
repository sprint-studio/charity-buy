  $(document).ready(function () {
    var options = {
      title: "&#x1F36A; Accetta la Privacy e Cookie policy",
      message:
        "Messaggio",
      delay: 600,
      expires: 1,
      link: "/privacy-policy",
      onAccept: function () {
        var myPreferences = $.fn.ihavecookies.cookie();
        console.log("Ottimo! Le preferenze sono state salvate...");
        console.log(myPreferences);
      },
      uncheckBoxes: true,
      acceptBtnLabel: "Accetta i Cookies",
      moreInfoLabel: "Maggiori informazioni",
      advancedBtnLabel: "Personalizza i Cookies",
      cookieTypesTitle: "Seleziona i Cookies che vuoi accettare",
      fixedCookieTypeLabel: "Essenziali",
      fixedCookieTypeDesc:
        "Questi sono i Cookies essenziali per permettere al sito di funzionare.",
    };

    $(document).ready(function () {
      $("body").ihavecookies(options);

      if ($.fn.ihavecookies.preference("marketing") === true) {
        console.log("This should run because marketing is accepted.");
      }

      $("#ihavecookiesBtn").on("click", function () {
        $("body").ihavecookies(options, "reinit");
      });
    });
  });
