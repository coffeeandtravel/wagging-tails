import "./Banner.css";
import fact from '../../assets/fact.jpg'
const FactBanner = () => {
  return (
    <div className="hidden md:block mt-5">
      <div className=" flex items-center justify-center">
        <div className="h-[600px] w-[906px] bg-black rounded-3xl flex justify-between items-center">
          <div className="flex flex-col ml-10 gap-50 max-w-1/2">
            <h2 className="text-3xl text-white">
              Over 30 Million Stray Dogs <br /> Roam the Streets of India.
            </h2>
            <p className="text-white text-justify">{`"In India, millions of stray dogs struggle to survive on the streets, often facing hunger, illness, and the dangers of traffic. Despite their tough lives, many of these resilient dogs are incredibly loving and loyal, waiting for a chance to find a safe home. By adopting a stray dog, you’re not only saving a life but also giving them the love and care they deserve. Adoption is a powerful way to reduce the homeless dog population and provide these animals with the opportunity for a better future."`}</p>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <img src={fact} alt="" className="h-[85%] rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactBanner;
