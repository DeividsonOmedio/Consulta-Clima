const apiKey= "29e43fb15a6008d0262889ad6c247d8e";
const apiContry = "https://countryflagsapi.com/png/";
const apiUnspplahKey = "C3lqH0Nhh0q4uySUndfMnLhu_tzkEIOm0fox2RUIvXk"

const cityInput = document.querySelector("#city-input")
const serachBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const temElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidyElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")
//Funcoes




const unsplash = async(city) => {
  


    const apiSplash = `https://api.unsplash.com/photos/?client_id=${apiUnspplahKey}&$q={city}/photos`

    const res = await fetch(apiSplash)
    const data = await res.json()

  
   var image =  data.map(function(element){
  // console.log(element.id)
   return element.urls.full

   })
  
   /*for(let lin=0 ; lin<3 ; lin++){
     for(let col=0; col<3 ; col++)
      document.write(matriz[lin][col] + "  ");*/
    

    
   //body.style.backgroundImage = `url(${image}.png)`
  /*const client = createClient('C2I4OvxSWhT4e7DGAtvhghwUjCMGCTOfE6X3CzvxxInkrsapXZ7WTyHq');
    const query = city;
    
    client.photos.search({ query, per_page: 1 }).then(photos => {
        console.log(photos)
    });*/
    


    
    
}
function tratarimg(im){
    im.map
}

const getWeatherData = async(city) => {

    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    return data
}


const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerHTML = data.name
    temElement.innerText = parseInt(data.main.temp)
    descElement.innerHTML = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiContry + data.sys.country);
    umidyElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide")
}

serachBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value
   showWeatherData(city)
   unsplash(city)
})

cityInput.addEventListener("keyup",(e) => {
    if(e.code === "Enter"){
        const city = e.target.value;

        showWeatherData(city);
    }
})