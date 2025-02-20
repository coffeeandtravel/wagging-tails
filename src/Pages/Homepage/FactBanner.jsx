import "./Banner.css";
// import fact from '../../assets/fact.jpg'
const FactBanner = () => {
  return (
    <div className=" mt-5">
      <div className=" flex items-center justify-center">
        <div className="h-[900px] w-[94%] lg:h-[600px] lg:w-[906px] bg-black rounded-3xl flex items-center mb-12 p-5 flex-col lg:flex-row-reverse justify-between">
          <div className="fact h-[500px] w-full mt-3 rounded-3xl flex items-center justify-center">
            <div className="h-[440px] w-11/12 linear rounded-3xl flex gap-45 flex-col">
            <p className="text-xl pl-4 pt-5 ">Over 30 Million Stray Dogs <br /> Roam the Streets of India</p>
            <p className="text-xl pl-4 pt-5 ">Give them a <br /> Loving Home</p>
            </div>
          </div>
          <div>
            <p className="text-white ">{`"In India, millions of stray dogs struggle to survive on the streets, often facing hunger, illness, and the dangers of traffic. Despite their tough lives, many of these resilient dogs are incredibly loving and loyal, waiting for a chance to find a safe home. By adopting a stray dog, you’re not only saving a life but also giving them the love and care they deserve. Adoption is a powerful way to reduce the homeless dog population and provide these animals with the opportunity for a better future."`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactBanner;
