(function (window) {

    var references = function () { 
        // for parser that delete non-html tags
        if ( $("*").has('my-ref').length == 0 ) {
            text = '[^]';
            $("*:contains(" + text + ")").html(function(_, html) {
                return html.replace(/(\[\^\])/g, '<my-ref>$1</my-ref>');
            });
        }
        
        $("my-ref").each(function (index) {
            $(this).attr("id", "cite_ref-" + (index + 1));
            $(this).text("");
            $(this).append("<a href=#cite_note-" + (index + 1) + "> [" + (index + 1) + "]</a>");
        });
        //  <li id="cite_note-1"><a href="#cite_ref-1"><b>^</b></a> Cite Note-1</li>
        $(".references li").each(function (index) {
            $(this).attr("id", "cite_note-" + (index + 1));
            $(this).prepend("<a href=#cite_ref-" + (index + 1) + " class='text-decoration-none'><b>^</b></a> ");
        });
    }

    window.references = references;

})(window);
