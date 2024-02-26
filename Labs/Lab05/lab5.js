/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // makes sure all parts of the form are filled out 
   var outputMessage = "";
   var focus = 0;
   
   //builds error message depending on what fields are left blank
   if (formObj.firstName.value == "") {
      outputMessage+="You must enter a first name\n"
   } else
   {
      focus++;
   }

   if (formObj.lastName.value == "") {
      outputMessage+="You must enter a last name\n"
   } else {
      focus++;
   }

   if (formObj.title.value == "") {
      outputMessage+="You must enter a title\n"
   } else {
      focus++;
   }

   if (formObj.org.value == "") {
      outputMessage+="You must enter an organization\n"
   }
   else {
      focus++;
   }

   if (formObj.pseudonym.value == "") {
      outputMessage+="You must enter a nickname\n"  
   } else {
      focus++;
   }

   if (formObj.comments.value == "Please enter your comments") {
      outputMessage+="You must enter comments\n"
   } else {
      focus++;
   }
   
   // decides on which part of the form to focus on after error message is outputted
   if(outputMessage!="") {
      alert(outputMessage);
      if(focus==0) {
         formObj.firstName.focus();
      } else if(focus==1) {
         formObj.lastName.focus();
      } else if(focus==2) {
         formObj.title.focus();
      } else if(focus==3) {
         formObj.org.focus();
      } else if(focus==4) {
         formObj.pseudonym.focus();
      } else {
         formObj.comments.focus();
      }
      return false;
   }
   // if they did correctly fill out the form, then give success message
   alert("Form Submitted!")
   return true;
}

function clearField() {
   //if user clicks in comments window, clear it of Please enter your comments
   var docs = document.getElementById("comments");
   if(docs.innerHTML == "Please enter your comments") {
      docs.innerHTML = "";
   }
}

function initializeField() {
   //if user clicks away from the comments area, put back please enter comments if its empty
   var docs = document.getElementById("comments");
   if(!document.hasFocus() || document.activeElement!=docs) { 
      docs.innerHTML = "Please enter your comments";
   }
}

function output() {
   //output names and nickname sentence if prompted
   fn = document.getElementById("firstName").value;
   ln = document.getElementById("lastName").value;
   nk = document.getElementById("pseudonym").value;
   finalized = fn+" "+ln+" is "+nk; 
   alert(finalized);
}