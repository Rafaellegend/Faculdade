window.onload = function () {
      function updateBatteryStatus(battery) {
        document.querySelector('#charging').textContent = battery.charging ? 'carregando' : 'não carregando';
		
        document.querySelector('#level').textContent = battery.level * 100 +"%";
		
        document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 60;	
		
		var bc = battery.charging;
		if (bc == true){
			document.getElementById('bcharge').src='img/Charge.png'
		}
		else{
			document.getElementById('bcharge').src=''
		}
		var bl = battery.level * 100;
			if (bl == 100){
				document.querySelector('#bc').textContent = "Bateria cheia";
				document.getElementById('bstatus').src='img/Baterryfull.png'
				
			}
			else if (bl <=99 && bl>= 30){
				document.querySelector('#bc').textContent = "Bateria neutra";
				
				document.getElementById('bstatus').src='img/Baterrygood.png'
			}
			else if (bl <=30 && bl >= 15){
				 document.querySelector('#bc').textContent = "Bateria fraca";
  				 document.getElementById('bstatus').src='img/Baterryfneutral.png'
				 
			}
			else{
				 document.querySelector('#bc').textContent = "Bateria em estado Critico";				 
				 document.getElementById('bstatus').src='img/Baterrycritical.png'
				 
			};
      }

      navigator.getBattery().then(function(battery) {
        // Update the battery status initially when the promise resolves ...
        updateBatteryStatus(battery);

        // .. and for any subsequent updates.
        battery.onchargingchange = function () {
          updateBatteryStatus(battery);
        };

        battery.onlevelchange = function () {
          updateBatteryStatus(battery);
        };

        battery.ondischargingtimechange = function () {
          updateBatteryStatus(battery);
        };
 
		return bl
      });
	  
	  
    };