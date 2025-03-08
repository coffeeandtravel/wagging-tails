import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const YourPosts = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.29.131:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="h-full min-h-[100vh] max-w-full m-2 flex justify-center static">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mx-2 my-12 gap-8 mt-10">
          {loading ? (
            <div className="flex items-center justify-center w-[90%]">
              <div className="loader"></div>
            </div>
          ) : (
            dogs.map((item) => (
              <motion.div
                className="h-130 w-85 bg-black rounded-3xl border-2 border-white"
                key={item._id}
              >
                <div className="h-full w-full flex flex-col">
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <div className="loader"></div>
                    </div>
                  ) : (
                    <img
                      src={item.images}
                      alt={`Image for ${item.name}`}
                      className="h-[70%] w-[100%] object-cover images rounded-t-3xl"
                    />
                  )}
                  <Link to={`/adopt/${item._id}`}>
                    <div className="ml-5 mt-3 gap-2 flex flex-col">
                      <p className=" text-5xl text-white">{item.name}</p>
                      <p className="text-white text-xl">{item.gender}</p>

                      <div
                        data-svg-wrapper
                        className="flex flex-row gap-2 mt-2"
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 37 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask id="path-1-inside-1_86_58" fill="white">
                            <path d="M0 0.0449438V36H35.9551V25.3034C36.0285 24.9779 36.0285 24.6401 35.9551 24.3146V0H0V0.0449438ZM4.49438 4.53933H31.4607V22.5169H24.7191C24.5845 22.5047 24.4492 22.5047 24.3146 22.5169C23.7186 22.5705 23.1683 22.8587 22.7848 23.318C22.4013 23.7774 22.216 24.3703 22.2697 24.9663C22.3233 25.5623 22.6115 26.1126 23.0709 26.4961C23.5302 26.8796 24.1231 27.0649 24.7191 27.0112H31.4607V31.5056H4.49438V4.53933ZM15.7303 9.03371C12 9.03371 8.98876 12.0449 8.98876 15.7753C8.98876 20.2697 15.7303 27.0112 15.7303 27.0112C15.7303 27.0112 22.4719 20.2697 22.4719 15.7753C22.4719 12.0449 19.4607 9.03371 15.7303 9.03371ZM15.7303 13.5281C16.9888 13.5281 17.9775 14.5169 17.9775 15.7753C17.9775 17.0337 16.9888 18.0225 15.7303 18.0225C14.4719 18.0225 13.4831 17.0337 13.4831 15.7753C13.4831 14.5169 14.4719 13.5281 15.7303 13.5281Z" />
                          </mask>
                          <path
                            d="M0 0.0449438V36H35.9551V25.3034C36.0285 24.9779 36.0285 24.6401 35.9551 24.3146V0H0V0.0449438ZM4.49438 4.53933H31.4607V22.5169H24.7191C24.5845 22.5047 24.4492 22.5047 24.3146 22.5169C23.7186 22.5705 23.1683 22.8587 22.7848 23.318C22.4013 23.7774 22.216 24.3703 22.2697 24.9663C22.3233 25.5623 22.6115 26.1126 23.0709 26.4961C23.5302 26.8796 24.1231 27.0649 24.7191 27.0112H31.4607V31.5056H4.49438V4.53933ZM15.7303 9.03371C12 9.03371 8.98876 12.0449 8.98876 15.7753C8.98876 20.2697 15.7303 27.0112 15.7303 27.0112C15.7303 27.0112 22.4719 20.2697 22.4719 15.7753C22.4719 12.0449 19.4607 9.03371 15.7303 9.03371ZM15.7303 13.5281C16.9888 13.5281 17.9775 14.5169 17.9775 15.7753C17.9775 17.0337 16.9888 18.0225 15.7303 18.0225C14.4719 18.0225 13.4831 17.0337 13.4831 15.7753C13.4831 14.5169 14.4719 13.5281 15.7303 13.5281Z"
                            fill="white"
                          />
                          <path
                            d="M0 36H-8.15758V44.1576H0V36ZM35.9551 36V44.1576H44.1126V36H35.9551ZM35.9551 25.3034L27.9973 23.5087L27.7975 24.3949V25.3034H35.9551ZM35.9551 24.3146H27.7975V25.2231L27.9973 26.1093L35.9551 24.3146ZM35.9551 0H44.1126V-8.15758H35.9551V0ZM0 0V-8.15758H-8.15758V0H0ZM4.49438 4.53933V-3.61825H-3.66319V4.53933H4.49438ZM31.4607 4.53933H39.6182V-3.61825H31.4607V4.53933ZM31.4607 22.5169V30.6744H39.6182V22.5169H31.4607ZM24.7191 22.5169L23.9849 30.6413L24.3513 30.6744H24.7191V22.5169ZM24.3146 22.5169L25.0458 30.6416L25.0488 30.6413L24.3146 22.5169ZM24.7191 27.0112V18.8537H24.3527L23.9879 18.8865L24.7191 27.0112ZM31.4607 27.0112H39.6182V18.8537H31.4607V27.0112ZM31.4607 31.5056V39.6632H39.6182V31.5056H31.4607ZM4.49438 31.5056H-3.66319V39.6632H4.49438V31.5056ZM15.7303 27.0112L9.96206 32.7795L15.7303 38.5478L21.4986 32.7795L15.7303 27.0112ZM-8.15758 0.0449438V36H8.15758V0.0449438H-8.15758ZM0 44.1576H35.9551V27.8424H0V44.1576ZM44.1126 36V25.3034H27.7975V36H44.1126ZM43.9128 27.098C44.2527 25.5909 44.2527 24.027 43.9128 22.5199L27.9973 26.1093C27.8043 25.2532 27.8043 24.3648 27.9973 23.5087L43.9128 27.098ZM44.1126 24.3146V0H27.7975V24.3146H44.1126ZM35.9551 -8.15758H0V8.15758H35.9551V-8.15758ZM-8.15758 0V0.0449438H8.15758V0H-8.15758ZM4.49438 12.6969H31.4607V-3.61825H4.49438V12.6969ZM23.3031 4.53933V22.5169H39.6182V4.53933H23.3031ZM31.4607 14.3593H24.7191V30.6744H31.4607V14.3593ZM25.4533 14.3924C24.8303 14.3361 24.2034 14.3361 23.5804 14.3924L25.0488 30.6413C24.6949 30.6733 24.3388 30.6733 23.9849 30.6413L25.4533 14.3924ZM23.5834 14.3921C20.8326 14.6397 18.2928 15.9699 16.5227 18.09L29.0469 28.5461C28.0439 29.7475 26.6047 30.5013 25.0458 30.6416L23.5834 14.3921ZM16.5227 18.09C14.7527 20.2102 13.8973 22.9467 14.1449 25.6975L30.3944 24.2351C30.5347 25.7939 30.05 27.3446 29.0469 28.5461L16.5227 18.09ZM14.1449 25.6975C14.3925 28.4483 15.7227 30.9881 17.8429 32.7582L28.2989 20.2339C29.5003 21.237 30.2541 22.6762 30.3944 24.2351L14.1449 25.6975ZM17.8429 32.7582C19.963 34.5282 22.6995 35.3835 25.4503 35.136L23.9879 18.8865C25.5467 18.7462 27.0974 19.2309 28.2989 20.2339L17.8429 32.7582ZM24.7191 35.1688H31.4607V18.8537H24.7191V35.1688ZM23.3031 27.0112V31.5056H39.6182V27.0112H23.3031ZM31.4607 23.348H4.49438V39.6632H31.4607V23.348ZM12.652 31.5056V4.53933H-3.66319V31.5056H12.652ZM15.7303 0.876131C7.49469 0.876131 0.831187 7.53964 0.831187 15.7753H17.1463C17.1463 16.5502 16.5053 17.1913 15.7303 17.1913V0.876131ZM0.831187 15.7753C0.831187 18.7472 1.88289 21.3494 2.74578 23.0751C3.67486 24.9333 4.82501 26.6286 5.83349 27.9732C6.86175 29.3442 7.87042 30.5191 8.61349 31.3448C8.98918 31.7622 9.30736 32.1018 9.53983 32.3454C9.6563 32.4674 9.75195 32.566 9.82331 32.639C9.85901 32.6755 9.8887 32.7056 9.91195 32.7291C9.92358 32.7409 9.93361 32.751 9.94197 32.7594C9.94616 32.7636 9.94992 32.7674 9.95327 32.7707C9.95495 32.7724 9.95652 32.774 9.95798 32.7754C9.95871 32.7762 9.95973 32.7772 9.9601 32.7776C9.96109 32.7785 9.96206 32.7795 15.7303 27.0112C21.4986 21.243 21.4995 21.2439 21.5004 21.2448C21.5007 21.245 21.5015 21.2459 21.5021 21.2464C21.5031 21.2475 21.5041 21.2484 21.5049 21.2493C21.5067 21.251 21.508 21.2523 21.5089 21.2533C21.5108 21.2552 21.5112 21.2555 21.51 21.2544C21.5078 21.2521 21.4996 21.2439 21.4859 21.2299C21.4585 21.2019 21.4094 21.1513 21.3415 21.0802C21.2053 20.9375 20.9968 20.7153 20.7404 20.4305C20.2195 19.8516 19.5427 19.0603 18.8856 18.1841C18.2087 17.2815 17.6734 16.4487 17.3385 15.7788C16.9373 14.9765 17.1463 15.0506 17.1463 15.7753H0.831187ZM15.7303 27.0112C21.4986 32.7795 21.4996 32.7785 21.5006 32.7776C21.5009 32.7772 21.502 32.7762 21.5027 32.7754C21.5042 32.774 21.5057 32.7724 21.5074 32.7707C21.5107 32.7674 21.5145 32.7636 21.5187 32.7594C21.5271 32.751 21.5371 32.7409 21.5487 32.7291C21.572 32.7056 21.6017 32.6755 21.6374 32.639C21.7087 32.566 21.8044 32.4674 21.9208 32.3454C22.1533 32.1018 22.4715 31.7622 22.8472 31.3448C23.5902 30.5191 24.5989 29.3442 25.6272 27.9732C26.6357 26.6286 27.7858 24.9333 28.7149 23.0751C29.5778 21.3494 30.6295 18.7472 30.6295 15.7753H14.3143C14.3143 15.0506 14.5233 14.9765 14.1222 15.7788C13.7872 16.4487 13.252 17.2815 12.5751 18.1841C11.9179 19.0603 11.2412 19.8516 10.7202 20.4305C10.4639 20.7153 10.2554 20.9375 10.1192 21.0802C10.0513 21.1513 10.0021 21.2019 9.97473 21.2299C9.96106 21.2439 9.95289 21.2521 9.95063 21.2544C9.9495 21.2555 9.94986 21.2552 9.95174 21.2533C9.95269 21.2523 9.95401 21.251 9.95573 21.2493C9.95659 21.2484 9.95754 21.2475 9.9586 21.2464C9.95913 21.2459 9.95999 21.245 9.96025 21.2448C9.96114 21.2439 9.96206 21.243 15.7303 27.0112ZM30.6295 15.7753C30.6295 7.53964 23.966 0.876131 15.7303 0.876131V17.1913C14.9554 17.1913 14.3143 16.5502 14.3143 15.7753H30.6295ZM15.7303 21.6857C12.4835 21.6857 9.81995 19.0222 9.81995 15.7753H26.1351C26.1351 10.0115 21.4941 5.37051 15.7303 5.37051V21.6857ZM9.81995 15.7753C9.81995 12.5284 12.4835 9.86489 15.7303 9.86489V26.18C21.4941 26.18 26.1351 21.539 26.1351 15.7753H9.81995ZM15.7303 9.86489C18.9772 9.86489 21.6407 12.5284 21.6407 15.7753H5.32557C5.32557 21.539 9.9666 26.18 15.7303 26.18V9.86489ZM21.6407 15.7753C21.6407 19.0222 18.9772 21.6857 15.7303 21.6857V5.37051C9.9666 5.37051 5.32557 10.0115 5.32557 15.7753H21.6407Z"
                            fill="white"
                            mask="url(#path-1-inside-1_86_58)"
                          />
                        </svg>
                        <p className="text-white inline-block text-xl">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default YourPosts;
