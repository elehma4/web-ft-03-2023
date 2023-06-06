
import React, {useState, useEffect} from 'react'




const News = () => {

    const [count, setCount] = useState(0)
    const [articles, setArticles] = useState([])  //hold the articles from our API 
    const [filteredText, setFilteredText] = useState("")
    const [arr, setArr] = useState([])


    // console.log('hello');

   useEffect(()=>{


        newsData()
    
   }, [])



   const newsData = async () => {
            
    let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd')
    let data = await response.json() 

    console.log(data);

    setArticles(data.articles)

    setArr(data.articles)

}


   const handleChange = (e) => {
       
    setFilteredText(e.target.value)


    let filteredArticles = articles.filter(artObj =>{

        return artObj.title.toLowerCase().includes(filteredText.toLocaleLowerCase())
    })

    setArr(filteredArticles)
   }

  return (
    <>
    
    {/* <h1>{count}</h1>

    <button onClick={()=>setCount(count + 1)}>Increment</button> */}


    <input type="text" value={filteredText} onChange={handleChange}  />

    <br /> 

    <h2>{filteredText}</h2>


    <ul>
        {arr.map(article =>{

            return <li>
                <h2>{article.title}</h2>

                <img src={article.urlToImage} alt="" height="200px" />

                <p>{article.description}</p>
            </li>
        })}

    </ul>


    </>
  )
}

export default News