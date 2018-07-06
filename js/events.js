function getIt() {
  $("p").click(function() {
    alert("Hey!")
  })
}

function pressIt() {
  $("#typing").keydown(function(key) {
    if(key.which == 71)
    alert('g was pressed')
  })
}

$(document).ready(function(){

// call functions here

});
