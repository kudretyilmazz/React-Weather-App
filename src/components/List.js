import {useContext, useEffect, useState} from 'react';
import SehirContext from '../context/SehirContext';
import axios from 'axios';
import './style.css';
function List() {
    const {sehir, setSehir} = useContext(SehirContext);
    const [havaBilgileri, setHavaBilgileri] = useState([]);
    async function getData(){
      const sehirBilgileri = await axios(`https://api.openweathermap.org/geo/1.0/direct?q=${sehir}&appid=f5c5fb0cd67eab21f83bc5cd359cb3c8`).then(res => res.data);
      const result = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${sehirBilgileri[0].lat}&lon=${sehirBilgileri[0].lon}&exclude=minutely,hourly,alerts,current&appid=f5c5fb0cd67eab21f83bc5cd359cb3c8&units=metric`).then(res => res.data.daily)
      result.pop();
      setHavaBilgileri(result)
  }
    useEffect(() => {
      getData();
    }, [])

    useEffect(() => {
      getData();
    },[sehir])

    const suankiGun = new Date().getDay();
    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
   
  return (
    <div className='container'>
      {havaBilgileri.map((day, index) => {
        return (
          
          <div key={index} className="kutu" style={{ textAlign: 'center' }}>
            <p> {gunler[suankiGun+index]} </p>
            <div>
             <img src={day.weather[0].main == 'Clear' ? 'https://www.mgm.gov.tr/Images_Sys/hadiseler/a.svg' : day.weather[0].main == 'Rain' ? 'https://www.mgm.gov.tr/Images_Sys/hadiseler/hsy.svg' : day.weather[0].main == 'Snow' ? 'https://www.mgm.gov.tr/Images_Sys/hadiseler/k.svg' : 'https://www.mgm.gov.tr/Images_Sys/hadiseler/pb.svg'} alt="" />
            </div>
           <p>{`En Yüksek ${day.temp.max} - En Düşük ${day.temp.min}`}</p>
           {console.log(havaBilgileri)}
      </div>
        );
      })}
    
    </div>
  )
}

export default List;