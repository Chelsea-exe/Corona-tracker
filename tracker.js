let btn = document.getElementById("submit-btn");
//set variable btn to the html button id
        
        btn.addEventListener("click",()=>{
        let text = document.getElementById("input-text").value;
        /* text is set to the input-text from the HTML with the value of what the user
        typed to be used in a function for search of the coutries within the json.
         */
        console.log("button was pressed");
        //added a event once btn is pressed taking the value of what was typed in the form

            fetch('https://api.covid19api.com/summary')
            .then((covidData)=>{
                return covidData.json();
                /* have the server get the information from the api link above and
                return with the json named covidData
                */
            })
            .then((getData)=>{
                console.log(getData);
                console.log("api was contacted");
                // var content = document.querySelector(".api-data");
                /*then take the getData that's within the json, have the getData be printed in
                the console and set a variable called content to api-data div that's within the
                HTML.
                */

                // var box = content.lastElementChild;  
                // while (box) { 
                //     content.removeChild(box); 
                //     box = content.lastElementChild; 
                // }

                var countriesIndex = 0;
                for(var i = 0; i < 185; i++){
                    if( getData.Countries[i].Country.toLowerCase() == text.toLowerCase()){
                        countriesIndex = i;
                        break;
                    }
                    
                }
                /* countriesIndex to start at 0 then for loop created for the json of 186 countries
                available inside the json. if statement, the user types the value in upper case or lower 
                case the .toLowerCase the method will automatically put the value from text in lower case.
                setting i to countriesIndex.
                 */

                if(countriesIndex == 0) {
                        var hideData = document.querySelector(".api-data");
                        hideData.style.display = "none";
                        alert("No information for that country at the moment! Sorry.")
                        // break;
                    }

                /* another if statement setting the countriesIndex back to zero when the user's text value doesn't
                match the countries that's inside the json the following alert message will appear and the style display
                won't show, instead of the country Afghanistan information appearing.
                 */
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
                /*the else statement once the value of the text matches the country in the json from the api, the data will appear in the api-data
                div with the .innerHTML method with the following divs and the json ${getData.Countries}*/
            })
        })
