$('.desktop').hide();
$('.mobile').hide();
$(document).ready(function () {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.mobile').show();

    }else{
      $('.desktop').show();
   }
});