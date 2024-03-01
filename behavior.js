document.addEventListener("DOMContentLoaded", function(event){
    alert('Hello!');
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        thumbnailElement.className = "";
      });
      if (thumbnailElement.className == "") {
        // write here the code that will execute if the image is big
    }
});
  
