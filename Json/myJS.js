function show(){
  
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const myH1 = document.createElement('h1');
    // myH1.textContent = mydata['TeamName'];
    myH1.textContent ='HI';
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    //myPara.textContent = 'Hometown: ' + mydata['HomeCity'] + ' // TeamRank: ' +mydata['formed'];
    myPara.textContent ='hello';
    header.appendChild(myPara);
    }