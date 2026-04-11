import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = ['.com', '.net', '.us', '.io'];

  const domains = [];
  

  pronoun.forEach(pr => {
    adj.forEach(ad=>{
      noun.forEach(no => {
        end.forEach(en => {
          domains.push(`${pr}${ad}${no}${en}`)
        })
      })
    })
  })

  let domTrans = domains.map(n => {
    return`<li>${n}</li>`
  })

  //console.log(domTrans);
  document.getElementById(generate).innerHTML = domTrans.join('\n');
  
};
