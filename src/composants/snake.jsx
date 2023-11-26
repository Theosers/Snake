import { useEffect, useState } from 'react'

import  SnakeHead  from './snakeHead'
import  SnakeBody  from './snakeBody'


export const Snake = ({positionFood, setPositionFood, score, setScore, start, setStart}) => {
  const [isFeed, setIsFeed] = useState(false)
  const [mouvementHead, setMouvementHead] = useState('ArrowUp')
  const [mouvementBody, setMouvementBody] = useState([
    'ArrowUp',
    'ArrowUp',
    'ArrowUp',
  ])
  const [positionHead, setPositionHead] = useState({ x : 10, y : 10 })
  const [positionsBody, setPositionsBody] = useState([
    { x : 20, y : 21},
    { x : 20, y : 22},
    { x : 20, y : 23},
  
    ])

    

  useEffect(() => {

    logic(positionHead, setPositionHead, setPositionsBody,
       positionsBody, positionFood, setPositionFood, isFeed, setIsFeed,
       mouvementBody, setMouvementBody, score, setScore, setStart);
  }, [positionHead, positionsBody, positionFood, isFeed, mouvementBody, setMouvementBody,
      score, setScore, setStart])

  useEffect(() => {

    
    const intervalId = setInterval(() => {

      if (mouvementHead.includes('ArrowUp')) {
        setPositionHead({ ...positionHead, y: positionHead.y - 1 }),
        setPositionsBody([{ x : positionHead.x, y : positionHead.y }, ...positionsBody.slice(0, positionsBody.length - 1)])
        setMouvementBody([mouvementHead, ...mouvementBody.slice(0, mouvementBody.length - 1)])
        
      }

      else if (mouvementHead.includes('ArrowDown')) {
        setPositionHead({ ...positionHead, y: positionHead.y + 1 }),
        setPositionsBody([{ x : positionHead.x, y : positionHead.y }, ...positionsBody.slice(0, positionsBody.length - 1)])
        setMouvementBody([mouvementHead, ...mouvementBody.slice(0, mouvementBody.length - 1)])
      }
      else if (mouvementHead.includes('ArrowLeft')) {
        setPositionHead({ ...positionHead, x: positionHead.x - 1 }),
        setPositionsBody([{ x : positionHead.x, y : positionHead.y }, ...positionsBody.slice(0, positionsBody.length - 1)])
        setMouvementBody([mouvementHead, ...mouvementBody.slice(0, mouvementBody.length - 1)])
      }
      else if (mouvementHead.includes('ArrowRight')) {
        setPositionHead({ ...positionHead, x: positionHead.x + 1 }),
        setPositionsBody([{ x : positionHead.x, y : positionHead.y }, ...positionsBody.slice(0, positionsBody.length - 1)])
        setMouvementBody([mouvementHead, ...mouvementBody.slice(0, mouvementBody.length - 1)])
      }
      if (mouvementHead.includes('Pressed')) {

        setMouvementHead(mouvementHead.replace(/From.*/, ''));

      }
     
      
    }, 100)

    
    
    const handleKeyPress = (e) => {

      // Le serpent ne peut pas se retourner sur lui-même
      if (e.key.includes('ArrowUp') && mouvementBody[0].includes('ArrowDown')) {
        return null
      }
      else if (e.key.includes('ArrowDown') && mouvementBody[0].includes('ArrowUp')) {
        return null
      }
      else if (e.key.includes('ArrowLeft') && mouvementBody[0].includes('ArrowRight')) {
        return null
      }
      else if (e.key.includes('ArrowRight') && mouvementBody[0].includes('ArrowLeft')) {
        return null
      }
    

      setMouvementHead((prevMouvementHead) => {
        
        
         if (prevMouvementHead.includes('ArrowUp') && e.key.includes('ArrowLeft'))
           {          
          return 'ArrowLeftFromUpPressed'
        }

        else if (prevMouvementHead.includes('ArrowUp') && e.key.includes('ArrowRight')) {
          return 'ArrowRightFromUpPressed'
        }

        else if (prevMouvementHead.includes('ArrowDown') && e.key.includes('ArrowLeft')) {
          return 'ArrowLeftFromDownPressed'
        }

        else if (prevMouvementHead.includes('ArrowDown') && e.key.includes('ArrowRight')) {
          return 'ArrowRightFromDownPressed'
        }
          
        else if (prevMouvementHead.includes('ArrowLeft') && e.key.includes('ArrowUp')) {
          return 'ArrowUpFromLeftPressed'
        }
  
        else if (prevMouvementHead.includes('ArrowLeft') && e.key.includes('ArrowDown')) {
          return 'ArrowDownFromLeftPressed'
        }

        else if (prevMouvementHead.includes('ArrowRight') && e.key.includes('ArrowUp')) {
          return 'ArrowUpFromRightPressed'
        }

        else if (prevMouvementHead.includes('ArrowRight') && e.key.includes('ArrowDown')) {
          return 'ArrowDownFromRightPressed'
        }
        else {
          return e.key
        }
      });

     
  
    };

  
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      clearInterval(intervalId);
      clearInterval(handleKeyPress);
      clearInterval(logic);
      window.removeEventListener('keydown', handleKeyPress);
    };
  },)







  return (
    <>
      <SnakeHead positionHead = {positionHead} mouvementHead={mouvementHead} />
      <SnakeBody positionsBody = {positionsBody} mouvementBody={mouvementBody} />
    </>
  )
}
export default Snake;


const logic = (positionHead, setPositionHead,
   setPositionsBody, positionsBody,
    positionFood, setPositionFood,
     isFeed, setIsFeed,
     mouvementBody, setMouvementBody, score, setScore, setStart) => {
  if (positionHead.x === 0 || positionHead.x === 21 || positionHead.y === 0 || positionHead.y === 21) {
    setStart(false)
    setPositionHead({ x : 10, y : 10 })
    setMouvementBody(['ArrowUp', 'ArrowUp', 'ArrowUp'])
    setPositionsBody([
      { x : 20, y : 21},
      { x : 20, y : 22},
      { x : 20, y : 23},
    
      ])
    setScore(0)
  }
  if (positionsBody.some((position) => position.x === positionHead.x && position.y === positionHead.y) ) {
    setStart(false)
    setPositionHead({ x : 10, y : 10 })
    setMouvementBody(['ArrowUp', 'ArrowUp', 'ArrowUp'])
    setPositionsBody([
      { x : 20, y : 21},
      { x : 20, y : 22},
      { x : 20, y : 23},
    
      ])
    setScore(0)
  }
  if (positionHead.x === positionFood[positionFood.length-1].x && positionHead.y === positionFood[positionFood.length-1].y) {
    setIsFeed(true);
    setScore(score + 1);
    setPositionFood([...positionFood, { x : Math.floor(Math.random() * 20) + 1, y : Math.floor(Math.random() * 20) + 1 }]);
  }
  if (isFeed && positionsBody[positionsBody.length - 1].x === positionFood[0].x 
    && positionsBody[positionsBody.length - 1].y === positionFood[0].y) {
    setIsFeed(false);
    setPositionsBody([...positionsBody, { ...positionsBody[positionsBody.length - 1] }]);
    setMouvementBody([...mouvementBody, mouvementBody[mouvementBody.length - 1]]);
    setPositionFood(positionFood.slice(1));
    }
}

