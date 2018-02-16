define(['core/js/adapt'], function(Adapt) {

  Adapt.on("app:dataReady", function() {
  
    if (!Adapt.config.get('_elfh_homeRedirect') || !Adapt.config.get('_elfh_homeRedirect')._isEnabled)
      return;
	
    var destURL = Adapt.config.get('_elfh_homeRedirect')._redirectURL;	
    var boolRedirectLogo = Adapt.config.get('_elfh_homeRedirect')._redirectLogo;	
    var boolRedirectHome = Adapt.config.get('_elfh_homeRedirect')._redirectHome;	
    var ScriptTag = document.createElement("script");	
	
    var RedirectScript = 'var applyHomeButton = function() {if (document.getElementsByClassName("navigation-home-button").length !== 0 && boolRedirectHome == true) { clearInterval(intervalId);   var button = window.$(".navigation-home-button")[0];  delete button.dataset.event; button.onclick = function(event) { event && event.preventDefault();  window.location = "' + destURL + '";  }; };  if (document.getElementsByClassName("navigation-logo-home-button").length !== 0 && boolRedirectLogo == true) { clearInterval(intervalId); var button2 = window.$(".navigation-logo-home-button")[0]; delete button2.dataset.event; button2.onclick = function(event) { event && event.preventDefault(); window.location = "' + destURL + '"; };  }; };var intervalId = setInterval(applyHomeButton, 500);';

    ScriptTag.innerHTML = RedirectScript;
    document.head.appendChild(ScriptTag);
  });

  function getUrl() {
    return location.pathname + location.hash;
  }
});
