$.ajax({
    type: "GET",
       url: "./resources/Atom.xml",
    dataType: "xml",
    success: function(responseData, status){
        var output = "";  
        // loops through each entry object
      $(responseData).find("entry").each(function() {
        // gets important data about each article
            var curr = "<div class=\"entry\">"
            var title = $(this).find("title").text();
            var link = $(this).find("link").attr('href');
            var updated = $(this).find("updated").text();

            var words = updated.split("T");
            words[1] = words[1].split("Z")[0]
            var date = words[0]
            var time = words[1]
          // goes through and wraps data in html tags for better looking output
            var summary = $(this).find("summary").text()
            curr+="<div class=\"ArticleHead\">"+title+"</div>";
            curr+="<div class=\"SubHead\">Last Updated: "+date+" @ "+time+"</div>";
            curr+="<div class=\"Summary\">"+summary+"</div>";
            curr+="<a class=\"SubHead\" href=\""+link+"\"> Link </a>"
            curr+="</div>"
            output+=curr;
      });

      // outputs html to document
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