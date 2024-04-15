$.ajax({
    type: "GET",
       url: "./resources/RSS.xml",
    dataType: "xml",
    success: function(responseData, status){
      var output = "";
      // goes through each item 
      $(responseData).find("item").each(function() {
        // gets important data about each article
            var curr = "<div class=\"entry\">"
            var title = $(this).find("title").text();
            var link = $(this).find("link").text();
            var published = $(this).find("pubDate").text();

            var summary = $(this).find("description").text()

            // wraps data in html tags for a better looking output
            curr+="<div class=\"ArticleHead\">"+title+"</div>";
            curr+="<div class=\"SubHead\">Published: "+published+"</div>";
            curr+="<div class=\"Summary\">"+summary+"</div>";
            curr+="<a class=\"SubHead\" href=\""+link+"\"> Link </a>"
            curr+="</div>"
            output+=curr;
      });

      // writes to document
      output += "</ul>";
      $('#AtomHere').html(output);
    }, error: function(msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });  

  /*

    <div class="entry">
        <div class="ArticleHead"> Title Here</div>
        <div class="SubHead">Last Updated: xyz xyz</div>
        <div class="SubHead">Description</div>
        <a class="SubHead" href="google.com">link</a>
    </div>
        
        

  */