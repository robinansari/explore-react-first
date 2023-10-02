import { useState } from "react"

export default function Count (){



          const [num,setNumber] = useState(0)

          const handleClicks=()=>{
            const newNumber = num+1 
            setNumber(newNumber);


          }
          const handleremove=()=>{
            const newremove= num-1
            setNumber(newremove);
          }
        
    const styleCounter = {
        border:'2px solid tomato',
        margin : '15px',
        padding : '15px',
        borderRadius: '20px'
    }
    return (
        <div style={styleCounter}>
            <h3>cunter :{num}</h3>
            <button onClick={handleClicks}>Add Number</button>
            <button onClick={handleremove}>remove</button>
            
        </div>
    )
}