async function getBoarderCunts(cunts){
//console.log(cunts);
text=""
for (let i = 0; i < cunts.length; i++) {
  text =text+cunts[i];
  if(i!=cunts.length-1){
    text =text+","
  }
} 
//console.log(text);

const response = await fetch("https://restcountries.com/v3.1/alpha?codes="+text);
const countries = await response.json();

console.log(countries);

const node1= document.getElementById("boardering");
let key=0
    for (key in countries) {
      //console.log(countries[key].name.common+"\t"+countries[key].flag);
      node1.appendChild(document.createTextNode(countries[key].name.common+"\t"+countries[key].flag));
   }
   
//console.log(countries);
}

async function fetchCountries(name) {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    //console.log(countries);
    let key=0
    for (key in countries) {
      if(countries[key].name.common===name || countries[key].name.official===name){
       //console.log(key);
       //console.log(countries[key].name.common);
       break;
      }
   }

      //console.log(countries[key]);
      document.getElementById("name").innerHTML = name;
      document.getElementById("capital").innerHTML ="Capital: "+ countries[key].capital;
      document.getElementById("population").innerHTML ="Population: "+ countries[key].population;
      document.getElementById("region").innerHTML ="Region: "+ countries[key].region;
      document.getElementById("flag").src =countries[key].flags.png;
      getBoarderCunts(countries[key].borders);
      //console.log(countries[key].borders);
      // console.log(countries[key].population);
      // console.log(countries[key].region);
      //console.log(countries[key].flag);

  }

// function getInput(){
//     console.log("Button pressed");
//     const elem = document.getElementById("country");
//     country= elem.textContent.valueOf();
//     console.log(elem);
//     console.log(country);
//     //fetchCountries(country);
// }

document.getElementById("btn").addEventListener("click", function() {
    event.preventDefault();
    var inputData = document.getElementById("country").value;
    var transferredData = inputData;
    document.getElementById("country").value = transferredData;
    //console.log(transferredData);
    fetchCountries(transferredData);
    //alert("Transferred Data: " + transferredData);
});

// let name = "South Africa";
// fetchCountries(name);