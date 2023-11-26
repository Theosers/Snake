export const SnakeBody = ({positionsBody, mouvementBody}) => {
  
/*
  const lastIterationFromLeft = mouvementBody.lastIndexOf(
    mouvementBody.find(mouvement => mouvement.includes('FromLeft')));

  const lastIterationFromRight = mouvementBody.lastIndexOf(
    mouvementBody.find(mouvement => mouvement.includes('FromRight')));

  const lastIterationFromUp = mouvementBody.lastIndexOf(
    mouvementBody.find(mouvement => mouvement.includes('FromUp')));

  const lastIterationFromDown = mouvementBody.lastIndexOf(
    mouvementBody.find(mouvement => mouvement.includes('FromDown')));
*/

  return (
    <>
      {positionsBody.map((position, index) => (

      
        
        <div 
        key={index} 
        className='snakeBody'
        style={{
          backgroundImage: alternateBodySkin(mouvementBody,index),
          backgroundSize: 'cover',
          transform: updateBodySkin(mouvementBody, index),
          gridColumn: position.x,
          gridRow: position.y
          }}
        ></div>
        
      ))}
    </>
  )
}
export default SnakeBody;

const alternateBodySkin = (mouvementBody, index)=> {

    if (index === mouvementBody.length - 1) {
    
      return 'url(src/assets/Tail.png)'
    }
    else if (mouvementBody[index].includes('Pressed')) {

      return 'url(src/assets/Bend.png)'
    }
    
    else if (index % 2 === 0) {
      return 'url(src/assets/SnakeBodyOrange.png)'
    }
    else {
      return 'url(src/assets/SnakeBodyBlack.png)'
    }
    
    }

const updateBodySkin = (mouvementBody, index) => {

  if (index === mouvementBody.length - 1) {
    switch (mouvementBody[index]) {
      case 'ArrowLeft':
        return 'rotate(90deg)'
      case 'ArrowRight':
        return 'rotate(270deg)'
      case 'ArrowUp':
        return 'rotate(180deg)'
      case 'ArrowDown':
        return 'rotate(0deg)'
      default:
        return 'rotate(0deg)'
    }
  }

  switch (mouvementBody[index]) {

   
    case 'ArrowLeftFromUpPressed':
      return 'rotate(0deg)'
    case 'ArrowRightFromUpPressed':
    return 'rotate(270deg)'
    case 'ArrowLeftFromDownPressed':
      return 'rotate(90deg)'   
    case 'ArrowRightFromDownPressed':
      return 'rotate(180deg)'
    case 'ArrowUpFromLeftPressed':
      return 'rotate(180deg)'
    case 'ArrowDownFromLeftPressed':
      return 'rotate(270deg)'
    case 'ArrowUpFromRightPressed':
      return 'rotate(90deg)'
    case 'ArrowDownFromRightPressed':
      return 'rotate(0deg)'
  
      case 'ArrowLeft':
        return 'rotate(90deg)'
      case 'ArrowRight':
        return 'rotate(90deg)'
      default:
        return 'rotate(0deg)'
   
  }










  }
