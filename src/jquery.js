$(function(){
  $(document).click(function(){
    if ($("#IncreaseTemp").is(":visible")) {
      $("#IncreaseTemp").hide(1000)
    } else {
      $("#IncreaseTemp").show(1000)
    }
  })

})
