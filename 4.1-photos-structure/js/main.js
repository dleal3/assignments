var $modalClose = $body.find("[data-js='modal__close']");
  var $mainElement = $body.find("[data-js='main']");
  var $imgElement = $body.find("[data-js='img']");

  var $backButton = $body.find("[data-js='']");
  var $albumHeading2 = $body.find("[data-js='']");

    $imgElement.on("click", function(e){
      $albumHeading2.addClass("");
      $mainElement.addClass("");
      $modalClose.removeClass("");
  });

    $backButton.on("click", function(e){
      $albumHeading2.removeClass("");
      $mainElement.removeClass("");
      $modalClose.addClass("");
  });
