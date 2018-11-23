(function (window) {

    var menu = function () { 
        var tag = "h3";
        if ( $("*").has('h2').length > 0 )  tag = "h2";
         
        var div = $("<div></div>");
        $(tag).each(function (index) {
            $(this).attr("id", $(this).text().replace(' ', '_'));
            if (!div.is(':empty')) div.append(' | ');
            div.append("<a href=#" + $(this).text().replace(' ', '_') + ">" + $(this).text() + "</a>");
        });
       if (!div.is(':empty')){
          div.insertBefore($("tag").first())
       }
    }

    window.menu = menu;

})(window);
