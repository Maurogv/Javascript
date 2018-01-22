(function (window) {

    var references = function () {
        index = 0;
        text = '[^]';
        $("*:contains(" + text + ")").each(function () {                  
            $(this).text().replace(text, function () {    
                var a = $("a");
                a.attr("href", "#cite_note-" + (index + 1) + "> [" + (index + 1) + "]");
                a.attr("id", "cite_ref-" + (index + 1));  
                index++;     
                return a;
            }); 
        });
        //  <li id="cite_note-1"><a href="#cite_ref-1"><b>^</b></a> Cite Note-1</li>
        $(".references li").each(function (index) {
            $(this).attr("id", "cite_note-" + (index + 1));
            $(this).prepend("<a href=#cite_ref-" + (index + 1) + " class='text-decoration-none'><b>^</b></a> ");
        });
    }

    window.references = references;

})(window);
