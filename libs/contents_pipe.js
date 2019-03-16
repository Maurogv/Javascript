(function (window) {

    var contents_pipe = function () { 
        var tag = "h3";
        if ( $("*").has('h2').length > 0 )  tag = "h2";
         
        var div = $("<div></div>");
        $(tag).each(function (index) {
            $(this).attr("id", $(this).text().toLowerCase().replace(/ /g, '_'));
            if (!div.is(':empty')) div.append(' | ');
            div.append("<a href=#" + $(this).text().toLowerCase().replace(/ /g, '_') + ">" + $(this).text() + "</a>");
        });
       if (!div.is(':empty')){
          div.insertBefore($(tag).first())
       }
    }

    window.contents_pipe = contents_pipe;

})(window);
