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
  }

  $("#IncreaseTemp").click(function() {
    thermostat.increaseTemp();
    updateStatus();
  })

  $("#DecreaseTemp").click(function() {
    thermostat.decreaseTemp();
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
