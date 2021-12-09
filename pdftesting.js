var $preview = $(".preview");
$preview.hide();

$("input").on("change", function(){
  
  var files = this.files;
  var fileReader = new FileReader();
  
  fileReader.onload = function(e){
    $preview.attr("href", e.target.result);
    $preview.show();
  };
  
  fileReader.readAsDataURL(files[0]);
});