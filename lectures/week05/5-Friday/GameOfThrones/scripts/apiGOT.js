const getChars = async function(pageNum = 1) {

let characterURL = `https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=50`;
let apiResults = await fetch(characterURL)
.then(resp=>{
return resp.json();
});

return apiResults;
}

let holder2 = document.querySelector('.holder2');

const getEntireCharList = async function(pageNum = 1) {
  const results = await getChars(pageNum);
  console.log("Retreiving data from API for page : " + pageNum);
  if (results.length > 0) {
    for(let i = 0; i < results.length; i++){
        if(results[i].name !== ""){
        let newChar = document.createElement('div')
        newChar.setAttribute('class', 'charAndHouse')
        // console.log(results[i].name); 
        // newChar.innerHTML = results[i].name 
        let charName = document.createElement('div')
        charName.setAttribute('class', 'charName')
        charName.innerHTML = results[i].name
        let newHouse = document.createElement('div')
        newHouse.setAttribute('class', 'house')
        if(results[i].allegiances == []){
            results[i].allegiances = ""
        } else if (results[i].allegiances.length == 1){
            newHouse.innerHTML = results[i].allegiances
        } else if (results[i].allegiances.length > 1){
            for(let j = 0; j < results[i].allegiances.length; j++){
                let multiHouse = document.createElement('div')
                multiHouse.setAttribute('class', 'multiHouse')
                multiHouse.innerHTML = results[i].allegiances[j]
                newHouse.append(multiHouse)
            }
        }
        holder2.append(newChar)
        newChar.append(charName)
        newChar.append(newHouse)


        newChar.addEventListener('click', (e)=>{
            console.log(e);
            //create modal popup element:
            let  modal = document.createElement('div')
            modal.setAttribute('class', 'modal');
            document.body.append(modal)
            // let bgImg = document.createElement('img')
            // bgImg.setAttribute('class', 'bg-image')
            // bgImg.setAttribute('src', 'images/jon-and-daenarys.jpg')
            // modal.append(bgImg)
            // modal popup with info:
            let modalContent = document.createElement('div')
            modalContent.setAttribute('class', 'modal-content')
            modalContent.innerHTML = `<h2>Character Details</h2>
            <br>
                                    <h7>
                                      <b>Name:</b> ${results[i].name}<br>
                                      <b>Gender:</b> ${results[i].gender}<br>
                                      <b>Culture:</b> ${results[i].culture}<br>
                                      <b>Titles:</b> ${results[i].titles.join(', ').replace(/,/g, ', ')}<br>
                                      <b>Aliases:</b> ${results[i].aliases.join(', ').replace(/,/g, ', ')}<br>
                                    </h7>
                                    <br>
                                    <br>
                                    <br>


                                      *Click to Exit*`;
            modal.append(modalContent)
            //click outside of popup exit:
            modal.addEventListener('click', ()=>{
                modal.remove();
            });
        })
        }
    }
    return results.concat(await getEntireCharList(pageNum+1));
  } else {
    return results;
  }
  
};

(async ()=>{

    const entireList=await getEntireCharList();
    console.log(entireList);

//* -----------------------------------------------------------------
// Houses Call:

const getHouses = async function(pageNum = 1) {

    let housesURL = `https://www.anapioficeandfire.com/api/houses?page=${pageNum}&pageSize=50`;
    let apiResults = await fetch(housesURL)
    .then(resp=>{
    return resp.json();
    });
    return apiResults;
}
const getEntireHouseList = async function(pageNum = 1) {
    const houseResults = await getHouses(pageNum);
    // console.log("Retreiving data from API for page : " + pageNum);
    if (houseResults.length > 0) {
    return houseResults.concat(await getEntireHouseList(pageNum+1));
    } else {
    return houseResults;
    }

};

(async ()=>{
    // await delay(5000)
    const houseList=await getEntireHouseList();
    console.log(houseList);

    let house = document.querySelectorAll('.house');
    let multiHouse = document.querySelectorAll('.multiHouse')
    // console.log(house);

    for(let i = 0; i < houseList.length; i++){
        // console.log(houseList[i].name);
        // console.log(houseList[i].url);
        for(let j = 0; j < house.length; j++){
            if(house[j].textContent == houseList[i].url){
                house[j].textContent = houseList[i].name
            } 
        }
    }
    for(let i = 0; i < houseList.length; i++){

        for(let j = 0; j < multiHouse.length; j++){
            if(multiHouse[j].textContent == houseList[i].url){
                multiHouse[j].textContent = houseList[i].name
            } 
        }
    }

})();



})();

// SEARCH BAR:

let searchInput = document.querySelector('input[type="search"]')

searchInput.addEventListener('keydown', async (event)=>{
    let nameElements = document.querySelectorAll('.charName')
    console.log(nameElements); // not working
    if (event.key === "Enter") {
        const searchTerm = event.target.value.trim().toLowerCase();
        // Loop through all the character div elements
        nameElements.forEach((element) => {
            const name = element.innerHTML.trim().toLowerCase();

            // Check if the element's name matches the search term
            if (name === searchTerm) {
                // Scroll to the element
                element.scrollIntoView({behavior: "smooth"});
            }
        });
    }
});

