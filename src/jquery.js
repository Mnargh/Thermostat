$(function(){
  // $(document).click(function(){
  //   if ($("#IncreaseTemp").is(":visible")) {
  //     $("#IncreaseTemp").hide(1000)
  //   } else {
  //     $("#IncreaseTemp").show(1000)
  //   }
  // })

  updateStatus = function() {
    $("#Temperature").html(thermostat.currentTemperature + String.fromCharCode(176) + 'C')
    $("#Energy_Usage").html(thermostat.energyUsage)
    switch(thermostat.energyUsage) {
      case('High Energy Usage'):
        $('#Temperature').css('color', 'red');
        $('#Energy_Usage').css('color', 'black');
      break;
      case('Low Energy Usage'):
        $('#Temperature').css('color', 'grey');
        $('#Energy_Usage').css('color', 'black');
      break;
      default:
        $('#Temperature').css('color', 'black');
        $('#Energy_Usage').css('color', 'black');
    }
  }

  $.get(('http://api.openweathermap.org/data/2.5/weather?q=london&appid=ffb5fcf064d018d36dbd32849e591d6d&units=metric'), function(data){
    $("#Outside_Temperature").html(data.main.temp + String.fromCharCode(176) + 'C')
  })


  $('#location').change(function() {
    var location = $('#location').val()
    $.get(('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=ffb5fcf064d018d36dbd32849e591d6d&units=metric'), function(data){
      $("#Outside_Temperature").html(data.main.temp + String.fromCharCode(176) + 'C')
    })
  })

  $("#IncreaseTemp").click(function() {
    thermostat.increaseTemp();
    updateStatus();
  })

  $("#DecreaseTemp").click(function() {
    thermostat.decreaseTemp();
    updateStatus();
  })

  $("#ResetTemp").click(function(){
    thermostat.resetTemp();
    updateStatus();
  })

  $("#PowerSaveMode").click(function(){
    thermostat.powerSavingSwitch();
    if(thermostat.powersavingmode){
      $(this).css('color', 'orange');
    }
    else {
      $(this).css('color', 'grey');
    }
    updateStatus();
  })



  updateStatus();

})




// <button id="IncreaseTemp" type="button">+</button>
// <button id="DecreaseTemp" type="button">-</button>
// <button id="ResetTemp" type="button">Reset</button>
// <button id="PowerSaveMode" type="button">Power Save Mode</button>
//
// <h3 id="Temperature">Temperature</h3>
// <h3 id="Energy Usage">Energy usage</h3>
