import React, {useState} from 'react'

function Forms() {

    const [textValue, setTextValue] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [selectValue, setSelectValue] = useState("Seattle")

    const handleSubmit = (e) => {
        e.preventDefault()
        let dataObj = {
            textValue,
            isValid,
            selectValue
        }
        console.log('form was submitted', dataObj);
    }

  return (
    <>
        <h2>{textValue}</h2>
        <h2>{isValid ? "true" : "false"}</h2>
        <h2>{selectValue}</h2>

        <form onSubmit={handleSubmit}>

            <input type="text" value={textValue} onChange={e=>setTextValue(e.target.value)} />

            <input type="checkbox" value={isValid} onChange={e=>setIsValid(e.target.checked)} />
            
            <select value={selectValue} onChange={e=>setSelectValue(e.target.value)}>
                <option value="NewYork">New York</option>
                <option value="Houston">Houston</option>
                <option value="Atlanta">Atlanta</option>
                <option value="Seattle">Seattle</option>
                <option value="Detroit">Detroit</option>
            </select>

            <input type="submit" />

        </form>

    </>
  )
}

export default Forms

// const outside = (e) => setTextValue(e.target.value)