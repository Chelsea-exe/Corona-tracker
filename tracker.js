// let btn = document.getElementById("submit-btn");
// //set variable btn to the html button id
        
//         btn.addEventListener("click",()=>{
//         let text = document.getElementById("input-text").value;
//         console.log("button was pressed");
//         //added a event once btn is pressed taking the value of what was typed in the form

//             fetch('https://api.covid19api.com/summary')
//             .then((covidData)=>{
//                 return covidData.json();
//             })
//             .then((getData)=>{
//                 console.log(getData);
//                 console.log("api was contacted");
//                 var content = document.querySelector(".api-data"); 

//                 var box = content.lastElementChild;  
//                 while (box) { 
//                     content.removeChild(box); 
//                     box = content.lastElementChild; 
//                 } 

//                 var countriesIndex = 0;
//                 for(var i = 0; i < 185; i++){
//                     if(getData.Countries[i].Country.toLowerCase() == text.toLowerCase()){
//                         countriesIndex = i;
//                         break;
//                     }
//                     else {
//                         var hideData = document.querySelector(".api-data");
//                         hideData.style.display = "none";
//                         alert("No information for that country")
//                         break;
//                     }
//                 }
//                 let data = document.querySelector(".api-data");
//                 data.innerHTML = `<div class="data-boxes">
//                                 <div class="country-index">
//                                     <span>Covid-19 Cases in ${getData.Countries[countriesIndex].Country}</span>
//                                 </div>
//                                 <div class="total-data">
//                                     <div><p>Total Confirmed</p> ${getData.Countries[countriesIndex].TotalConfirmed}</div>
//                                     <div><p>Total Deaths</p> ${getData.Countries[countriesIndex].TotalDeaths}</div>
//                                     <div><p>Total Recovered</p> ${getData.Countries[countriesIndex].TotalRecovered}</div>
//                                 </div>
//                                 <div class="new-data">
//                                     <div><p>New Confirmed</p> ${getData.Countries[countriesIndex].NewConfirmed}</div>
//                                     <div><p>New Deaths</p> ${getData.Countries[countriesIndex].NewDeaths}</div>
//                                     <div><p>New Recovered</p> ${getData.Countries[countriesIndex].NewRecovered}</div>
//                                     </div>
//                                 </div>`;
//             })
//         })
let portfolio = document.getElementById("port-btn");
portfolio.addEventListener("click", () => {
    console.log("portfolio button was pressed")
    window.open("http://chelsea-exe.github.io/", '_blank');
})
let btn = document.getElementById("submit-btn");
//set variable btn to the html button id
        
        btn.addEventListener("click",()=>{
        let text = document.getElementById("input-text").value;
        console.log("button was pressed");
        //added a event once btn is pressed taking the value of what was typed in the form

            fetch('https://api.covid19api.com/summary')
            .then((covidData)=>{
                return covidData.json();
            })
            //
            .then((getData)=>{
                console.log(getData);
                console.log("api was contacted");
                var content = document.querySelector(".api-data"); 

                var box = content.lastElementChild;  
                while (box) { 
                    content.removeChild(box); 
                    box = content.lastElementChild; 
                } 

                var countriesIndex = 0;
                for(var i = 0; i < 185; i++){
                    if( getData.Countries[i].Country.toLowerCase() == text.toLowerCase()){
                        countriesIndex = i;
                        break;
                    }
                    
                }
                if(countriesIndex==0) {
                        var hideData = document.querySelector(".api-data");
                        hideData.style.display = "none";
                        alert("No information for that country at the moment! Sorry.")
                        // break;
                    }
                // else if(countriesIndex === '') {
                //     alert("Please enter a country!")
                // }
                else{
                let data = document.querySelector(".api-data");
                data.innerHTML = `<div class="data-boxes">
                                <div class="country-index">
                                    <span>Covid-19 Cases in ${getData.Countries[countriesIndex].Country}</span>
                                </div>
                                <div class="total-data">
                                    <div id="total-confirmed"><p id="tot-confirm-p">Total Confirmed</p> ${getData.Countries[countriesIndex].TotalConfirmed}</div>
                                    <div id="total-death"><p id="tot-death-p">Total Deaths</p> ${getData.Countries[countriesIndex].TotalDeaths}</div>
                                    <div id="total-recovered"><p id="tot-recov-p">Total Recovered</p> ${getData.Countries[countriesIndex].TotalRecovered}</div>
                                </div>
                                <div class="new-data">
                                    <div id="new-confirmed"><p>New Confirmed</p> ${getData.Countries[countriesIndex].NewConfirmed}</div>
                                    <div id="new-death"><p>New Deaths</p> ${getData.Countries[countriesIndex].NewDeaths}</div>
                                    <div id="new-recovered"><p>New Recovered</p> ${getData.Countries[countriesIndex].NewRecovered}</div>
                                    </div>
                                </div>`;
                                }
            })
        })