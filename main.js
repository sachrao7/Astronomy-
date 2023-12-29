//Example fetch using pokemonapi.co
document.querySelector('#randomDate').addEventListener('click', function () {
    getFetch(dateGenerator(today=false))
  })
  document.querySelector('#todayDate').addEventListener('click', function () {
    getFetch(dateGenerator(today=true))
  })
  document.querySelector('#nextButton').addEventListener('click', function () {
    getFetch(dateGenerator(today=false))
  })
  document.querySelector('h3').style.display = 'none'
  document.querySelector('#nextButton').style.display = 'none'
  
  
  
  function getFetch(userDate) {
    let dt = userDate;
    const url = `https://api.nasa.gov/planetary/apod?api_key=dd2OZbDD0kNAQ4QNGJSwFnCaacG8wT8m9qZWOK0x&date=${dt}`;
  
    fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          document.querySelector('img').style.display = 'none';

          if (data.media_type == 'image') {
            document.querySelector('img').src = data.hdurl;
            document.querySelector('img').style.display = 'block';
  
  
            document.querySelector('iframe').style.display='none'
          } else {
            document.querySelector('img').style.display='none'
            document.querySelector('iframe').style.display='block'

            document.querySelector('iframe').src = data.url;
          }
          document.querySelector('h2').innerText = data.title;
  
          document.querySelector('h3').innerText = data.explanation;
          document.querySelector('h3').style.display = 'block';
          document.querySelector('#nextButton').style.display = 'block';
          document.querySelector('.container').style.display = 'none';
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
  }
  
  
  
  function dateGenerator(today=true) {
    //genereates todays date if today is true else random date
    let date;
    if (today) {
      date = new Date();
    }
    else {
      date = randomDate(new Date(2012, 0, 1), new Date())
    }
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
  
    today = yyyy+'-'+mm+'-'+dd
    return today
  }
  
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }