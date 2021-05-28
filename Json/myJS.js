function show(){
  
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    //get the json file through API
    //we just get the HKO position temperature
    let requestURL = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const Temperature = request.response;
        showTemperature(Temperature);
      }
    
    
    function showTemperature(mydata){
    const myH1 = document.createElement('h1');
        // myH1.textContent = mydata['TeamName'];
    myH1.textContent =mydata["temperature"]["data"][4]["place"]+'刀手';
    header.appendChild(myH1);


    const myPara = document.createElement('p');
    let HKOTem=mydata["temperature"]["data"][4]["value"];
    myPara.textContent = '流浮山現時溫度: ' + HKOTem+'C';
    header.appendChild(myPara);
    }
    }