
import Name from './components/Name'
import Days from './components/Days'


//Create a compnent called DropDown.jsx 
//Render a drop down 
//takes 2 props: days, language
// import DropDown into App component
// Render inside of the App component  
// pass to it the days for the different languages

// language
// dropdown


const App = () => {
  
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  //spanish
  let dias = ["lunes", 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  //german
  let tag = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
  //norwegian
  let dag = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"]
  //korean
  const daysInKorean = ['wollyoil', 'hwayoil', 'suyoil', 'mongnyoil', 'geumyoil', 'toyoil', 'illyoil'];
  //polish
  const Tydzień = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

  //French
  let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
//Mandarin
  const daysInMandarin = ["星期一", "星期二", "星期三",  "星期四",  "星期五", "星期六",  "星期日"]
  return <div>


    Hello World

    <Days days={days} language="English" />
    <Days days={dias} language="Spanish" />
    <Days days={tag} language="German" />
    <Days days={dag} language="Norwegian" />
    <Days days={daysInKorean} language="Korean" />
    <Days days={Tydzień} language="Polish" />
    <Days days={jour} language="French" />
    <Days days={daysInMandarin} language="Mandarin" />

    <Name  firstName="Hunter" lastName="Atkins" days={1} />
    <Name  firstName="Ethan" lastName="Lehman" days={2} />
    <Name  firstName="Kelly" lastName="Henderson" days={3} />
    <Name  firstName="Jordan" lastName="Pufon" days={4} />
    <Name  firstName="Katie" lastName="Toney" days={5} />
    
  </div>
}

export default App;


// const name = (params) => {
  
//   let a = 5; 
//   let b = 5 

//   return a + b
// }