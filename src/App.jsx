import { useState } from 'react'

import  Food  from './composants/food'
import  Snake  from './composants/snake'
import './App.css'

function App() {
  const [start, setStart] = useState(false)
  const [positionFood, setPositionFood] = useState([{ x : 20, y : 18 }])
  const [score, setScore] = useState(0)

  return (
    <div className='everything'>
    <div className='Title'></div>
    <div className='App'>
    
    <div className='canvas'>
      {start ? (
      
        <Snake positionFood={positionFood} setPositionFood={setPositionFood}
             score={score} setScore={setScore} start={start} setStart={setStart}/>
            
      ) : null}
      
      <Food positionFood={positionFood}/>
      <IDE score={score} start={start} setStart={setStart}/>
    </div>
    </div>
    </div>
    
  )
}


const IDE = ({score, start, setStart}) => {
   
  return (
    <div className='IDE'
    style={{    
      position: 'absolute',
      }}>
          <h2 className='Score'
          style={{ 
            position: 'relative',
            alignSelf: 'flex-start',
            }}
          >Score : {score}
          </h2>
          <div className='Start'
          style={{ 
            display: start ? 'none' : 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            
            alignItems: 'center',
            position: 'relative',
            top: '35%',
            left: '75%',
            alignSelf: 'center',
            border: '3px solid black',
            borderRadius: '10px',
            padding: '10px',
            width: '30vh',
            height: '30vh',
            backgroundColor: 'orange',
           

            }}
            >
              <h1>Welcome !</h1>
              <button onClick={() => setStart(true)}
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'green',
                borderRadius: '10px',
                border: '3px solid black',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px',
                
              }}
              >START</button>

              
              </div>
    </div>
  )
}

export default App
