import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.io', '.es', '.on', '.er'];

  const domains = [];
  

  pronouns.forEach(pronoun => {
    adjectives.forEach(adjective=>{
      nouns.forEach(noun => {
        extensions.forEach(extension => {

          let extWithoutDot = extension.slice(1);

          if (noun.endsWith(extWithoutDot)){
            let nounCut = noun.slice(0, -extWithoutDot.length);
            domains.push(`${pronoun}${adjective}${nounCut}${extension}`);
          }
          else {
            domains.push(`${pronoun}${adjective}${noun}${extension}`);
          }
        })
      })
    })
  })

  let domTrans = domains.map(n => {
    return`<li>${n}</li>`
  })

  //console.log(domTrans);
  document.getElementById("generate").innerHTML = domTrans.join('\n');
  
};
