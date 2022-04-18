import {useContext} from 'react';
import SehirContext from '../context/SehirContext';

function Weather() {
    const {sehir, setSehir} = useContext(SehirContext);
    const sehirSecme = (e) => {
        setSehir(e.target.value)
    }
  return (
    <div style={{textAlign:'center',}}>
        
        <h3>Hava Durumu</h3>
        <br /><hr /><br /><br />
        <select name="Sehir" defaultValue={"İstanbul"} onChange={sehirSecme} >
            <option >Adana</option>
            <option >Adıyaman</option>
            <option >Afyonkarahisar</option>
            <option >Ağrı</option>
            <option >Amasya</option>
            <option >Ankara</option>
            <option >Antalya</option>
            <option >Artvin</option>
            <option >Aydın</option>
            <option >Balıkesir</option>
            <option >Bilecik</option>
            <option >Bingöl</option>
            <option >Bitlis</option>
            <option >Bolu</option>
            <option >Burdur</option>
            <option >Bursa</option>
            <option >Çanakkale</option>
            <option >Çankırı</option>
            <option >Çorum</option>
            <option >Denizli</option>
            <option >Diyarbakır</option>
            <option >Edirne</option>
            <option >Elazığ</option>
            <option >Erzincan</option>
            <option >Erzurum</option>
            <option >Eskişehir</option>
            <option >Gaziantep</option>
            <option >Giresun</option>
            <option >Gümüşhane</option>
            <option >Hakkâri</option>
            <option >Hatay</option>
            <option >Isparta</option>
            <option >Mersin</option>
            <option >İstanbul</option>
            <option >İzmir</option>
            <option >Kars</option>
            <option >Kastamonu</option>
            <option >Kayseri</option>
            <option >Kırklareli</option>
            <option >Kırşehir</option>
            <option >Kocaeli</option>
            <option >Konya</option>
            <option >Kütahya</option>
            <option >Malatya</option>
            <option >Manisa</option>
            <option >Kahramanmaraş</option>
            <option >Mardin</option>
            <option >Muğla</option>
            <option >Muş</option>
            <option >Nevşehir</option>
            <option >Niğde</option>
            <option >Ordu</option>
            <option >Rize</option>
            <option >Sakarya</option>
            <option >Samsun</option>
            <option >Siirt</option>
            <option >Sinop</option>
            <option >Sivas</option>
            <option >Tekirdağ</option>
            <option >Tokat</option>
            <option >Trabzon</option>
            <option >Tunceli</option>
            <option >Şanlıurfa</option>
            <option >Uşak</option>
            <option >Van</option>
            <option >Yozgat</option>
            <option >Zonguldak</option>
            <option >Aksaray</option>
            <option >Bayburt</option>
            <option >Karaman</option>
            <option >Kırıkkale</option>
            <option >Batman</option>
            <option >Şırnak</option>
            <option >Bartın</option>
            <option >Ardahan</option>
            <option >Iğdır</option>
            <option >Yalova</option>
            <option >Karabük</option>
            <option >Kilis</option>
            <option >Osmaniye</option>
            <option >Düzce</option>
        </select>   
</div>  )
}

export default Weather;