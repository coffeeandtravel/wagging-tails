import './Banner.css'

const Banner = () => {
  return (
    <div className=" md:block mt-5">
      <div className=" flex items-center justify-center">
        <div className="banner h-[550px] w-[94%] md:h-[600px] md:w-[906px] relative rounded-3xl flex justify-center items-center">
                <h1 className='text-5xl md:text-8xl banner-heading text-amber-500 text-center'>Stop Buying! <br />Start Adopting.</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
