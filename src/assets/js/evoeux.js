$(function () {
    var isMobile = {
Android: function() {
return navigator.userAgent.match(/Android/i);
},
BlackBerry: function() {
return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function() {
return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function() {
return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function() {
return navigator.userAgent.match(/IEMobile/i);
},
any: function() {
return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}
};
  genereLien();
  $("#imgselect").change(function () {
    console.log($(this).val());
    genereLien();
    let str = $(this).val();
    $.get("webservice.php", {
      m: str
    }, function (data) {
      console.log(data);
    });
  });
  $("#voeuxselect").change(function () {
    let str = $(this).val();
    $.get("webservice.php", {
      v: str
    }, function (data) {
      console.log(data);
    });
  });
  $("#whatsapp").click(function () {
    if (isMobile.any()) {
      var text = "Votre ami vous a deposer un voeux. Clique sur ce lien pour le lire.";
      var url = $("#lienv").val();
      var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
      var whatsapp_url = "whatsapp://send?text=" + message;
      window.location.href = whatsapp_url;
    } else {
      alert("Vous devez partager le lien depuis un smartphone");
    }
  });

  function genereLien() {
    let lien = "";
    lien = 'http://192.168.43.246/briguel_voeux/?m=' + $("#imgselect").val() + '&v=' + $("#voeuxselect").val();
    $("#lienv").val(lien);
  }
});
