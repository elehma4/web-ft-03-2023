import React from 'react'
import Name from './components/Name'
import Days from './components/Days'
import Dropdown from './components/Dropdown'

function App() {

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const dias = ["lunes", 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  const tag = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
  const dag = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"]
  const daysInKorean = ['wollyoil', 'hwayoil', 'suyoil', 'mongnyoil', 'geumyoil', 'toyoil', 'illyoil'];
  const Tydzień = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
  //French
  let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  //Mandarin
  const daysInMandarin = ["星期一", "星期二", "星期三",  "星期四",  "星期五", "星期六",  "星期日"]

  let languages = ["English", "Spanish", "German", "Norwegian", "Korean", "Polish", "French", "Mandarin"]

  return (
    <div>
      Hello World

      <Dropdown languages={languages} />

      

      <Days days={days} language="English" />
      <Days days={dias} language="Spanish" />
      <Days days={tag} language="German" />
      <Days days={dag} language="Norwegian" />
      <Days days={daysInKorean} language="Korean" />
      <Days days={Tydzień} language="Polish" />
      <Days days={jour} language="French" />
      <Days days={daysInMandarin} language="Mandarin" />

      <Name firstName="Ethan" lastName="Lehman" days={1}/>
      <Name firstName="Hunter" lastName="Atkins" days={2}/>
      <Name firstName="Jordan" lastName="Pufon" days={3}/>
      <Name firstName="Kelly" lastName="Henderson" days={4}/>
      <Name firstName="Katie" lastName="Toney" days={5}/>
    </div>
  )
}

export default App