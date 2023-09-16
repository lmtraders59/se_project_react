const weatherOptions = [
  { url: require("../images/day/sunny.svg").default,day: true, type: "sunny"},
  { url: require("../images/day/cloudy.svg").default,day: true, type: "cloudy"},
  { url: require("../images/night/cloud.svg").default,day: false, type: "cloud"},
  { url: require("../images/night/moon.svg").default,day: false, type: "moon"}
  ]

const WeatherCard = ({ day, type, weatherTemp = '' }) => {
  const imageSrc = weatherOptions.filter ((i) => {
    console.log(i)
    return i.day === day && i.type === type
  })
  console.log(imageSrc);
  console.log(imageSrc[0].url)

  const imageSrcUrl = imageSrc[0].url || '';
  return (
    <section className='weather' id='weather'>
          <div className='weather_info'>{weatherTemp}°F</div>
          <img src={imageSrcUrl} className='weather_image' alt="weather"/>
    </section>
  ); 
}

export default WeatherCard;