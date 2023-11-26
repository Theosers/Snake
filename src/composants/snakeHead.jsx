export const SnakeHead = ({positionHead, mouvementHead}) => {

    return (
      <>
        <div className='snakeHead'
        style={{ 
          backgroundImage: 'url(../assets/SnakeHead.png)',
          backgroundSize: 'cover',
          transform: updateHeadSkin(mouvementHead),
          gridColumn: positionHead.x,
          gridRow: positionHead.y }}
        ></div>
      </>
    )
}

export default SnakeHead;

const updateHeadSkin = (mouvementHead) => {

  if (mouvementHead.includes('ArrowUp')) {
    return 'rotate(180deg)'
  }
  else if (mouvementHead.includes('ArrowDown')) {
    return 'rotate(0deg)'
  }
  else if (mouvementHead.includes('ArrowLeft')) {
    return 'rotate(90deg)'
  }
  else if (mouvementHead.includes('ArrowRight')) {
    return 'rotate(270deg)'
  }

}