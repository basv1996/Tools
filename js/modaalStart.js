$(document).ready( function() {
    var herfst1Inhoud = $('#herfst1').detach();
    var herfst2Inhoud = $('#herfst2').detach();
    var herfst3Inhoud = $('#herfst3').detach();
    var herfst4Inhoud = $('#herfst4').detach();

    
   $('#herfst1Thumb').on('click', function() {
       DePopUP.openen({inhoud: herfst1Inhoud, breedte: 75});
   });
    
    $('#herfst2Thumb').on('click', function() {
       DePopUP.openen({inhoud: herfst2Inhoud, breedte: 75});
   });
      
    $('#herfst3Thumb').on('click', function() {
       DePopUP.openen({inhoud: herfst3Inhoud, breedte: 75});
   });  
    
    $('#herfst4Thumb').on('click', function() {
       DePopUP.openen({inhoud: herfst4Inhoud, breedte: 75});
   });  
});