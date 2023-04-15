
const getChars = async function(pageNum = 1) {

let actualUrl = `https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=50`;
let apiResults = await fetch(actualUrl)
.then(resp=>{
return resp.json();
});

return apiResults;
}

let charAndHouse = document.querySelector('#charAndHouse');
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
        holder2.append(newChar)
        newChar.innerHTML = results[i].name 
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

})();

// SEARCH BAR:

let searchInput = document.querySelector('input[type="search"]')

searchInput.addEventListener('keydown', async (event)=>{
    let characterElements = document.querySelectorAll('.charAndHouse')
    console.log(characterElements); // not working
    if (event.key === "Enter") {
        const searchTerm = event.target.value.trim().toLowerCase();
        // Loop through all the character div elements
        characterElements.forEach((element) => {
            const name = element.innerHTML.trim().toLowerCase();

            // Check if the element's name matches the search term
            if (name === searchTerm) {
                // Scroll to the element
                element.scrollIntoView({behavior: "smooth"});
            }
        });
    }
});

