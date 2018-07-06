function getIt() {
  $("p").click(function() {
    alert("Hey!")
  })
}

function frameIt() {
  $("img").load(function() {
    $("img").addClass(".tasty")
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
