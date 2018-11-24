(function(window, document){
 
   newScript = document.createElement('script');
   newScript.async = 1;
   newScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
   scriptTag = document.getElementsByTagName('script')[0];
   scriptTag.parentNode.insertBefore(newScript, scriptTag);
 
   newScript = document.createElement('script');
   newScript.async = 1;
   newScript.src = 'https://maurogv.github.io/javascript/libs/menu.js';
   scriptTag = document.getElementsByTagName('script')[0];
   scriptTag.parentNode.insertBefore(newScript, scriptTag);
    	
  // Poll for jQuery to come into existance
  var checkReady2 = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    }
    else {
      window.setTimeout(function () { checkReady2(callback); }, 100);
    }
  };

  // Start polling...
  checkReady2(function ($) { 
    // Use $ here...
    window.contents_row(); 
  }) 
     
})(window, document)
