(function(window, document){
 
   newScript = document.createElement('script');
   newScript.async = 1;
   newScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
   scriptTag = document.getElementsByTagName('script')[0];
   scriptTag.parentNode.insertBefore(newScript, scriptTag);
 
   newScript = document.createElement('script');
   newScript.async = 1;
   newScript.src = 'https://rawgit.com/Maurogv/javascript/master/libs/menu.js';
   scriptTag = document.getElementsByTagName('script')[0];
   scriptTag.parentNode.insertBefore(newScript, scriptTag);
    	
  // Poll for jQuery to come into existance
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    }
    else {
      window.setTimeout(function () { checkReady(callback); }, 100);
    }
  };

  // Start polling...
  checkReady(function ($) { 
    // Use $ here...
    window.references(); 
  }) 
     
})(window, document)
