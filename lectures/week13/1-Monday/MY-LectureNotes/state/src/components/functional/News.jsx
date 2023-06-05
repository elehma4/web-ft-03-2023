import React, {useState, useEffect} from 'react'

function News() {

    const [count, setCount] = useState(0) //set count to 0

    const [articles, setArticles] = useState([]) //set to empty arr

    const [filteredText, setFilteredText] = useState('') // set to empty str

    const [arr, setArr] = useState([])

    useEffect(() => {
        
        const newsData = async () => {
            
            let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd');
            let data = await response.json()

            console.log(data);

            setArticles(data.articles)

            setArr(data.articles)
        }

        newsData()

    }, [])

    const handleChange = (e) => {
        setFilteredText(e.target.value)

        let filteredArticles = articles.filter(artObj => {
            return artObj.title.toLowerCase().includes(filteredText.toLocaleLowerCase())
        })

        setArr(filteredArticles)
    }

  return (
    <>
        <input type="text" value={filteredText} onChange={handleChange} />

        <br />

        <h2>{filteredText}</h2>

        <ul>
        {arr.map(article => {

            return <li>
                <h2>{article.title}</h2>
                <img src={article.urlToImage} height='200px' alt="" />
                <p>{article.description}</p>
            </li>
        })}
        </ul>
        
    
    </>
  )
}

export default News