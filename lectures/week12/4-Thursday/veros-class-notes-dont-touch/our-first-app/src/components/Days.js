import React from 'react' 

const Days = ({days, language}) => {  //days is an array
    
    return <div>

        <h1>{language}</h1>
    
        <ul>

            {days.map(day => <li>{day}</li>)}
        </ul>

    </div>

}

export default Days