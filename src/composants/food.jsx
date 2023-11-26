export const Food = ({positionFood}) => {
  
    return (
      <>
        <div className='food'
        style={{ 
          backgroundImage: 'url(src/assets/Pomme.png)',
          backgroundSize: 'cover',
          
          gridColumn: positionFood[positionFood.length-1].x,
          gridRow: positionFood[positionFood.length-1].y }}
        ></div>
      </>
    )
  }

  export default Food;