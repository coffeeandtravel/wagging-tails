import './NotFound.css'
import FuzzyText from './FuzzyText/FuzzyText';

const NotFound = () => {
  return (

  <div className='h-[100vh] w-full flex flex-col gap-4 mt-20'>  
<div className=' w-full flex flex-col items-center gap-5 '>
<FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.4} 
  enableHover={true}
>
  {`"`}404{`"`}
</FuzzyText>
<FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.4} 
  enableHover={true}
  fontFamily={"'Raleway Dots', cursive"}
  fontSize="32px"
 >
  Not Found
</FuzzyText>
</div>
  </div>
// </div>
  )
}

export default NotFound
