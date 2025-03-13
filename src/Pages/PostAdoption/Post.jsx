import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import "./Post.css";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";

// import dog from "../../assets/adopt.jpg";
// import dog1 from "../../assets/adopt1.jpg";
// import dog2 from "../../assets/adopt2.jpg";

const Post = () => {
  const { auth, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false);
  // console.log("Auth context:", auth);
  // console.log("Current user:", auth?.currentUser);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const submitPost = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = form.petName.value;
    const age = form.petAge.value;
    const location = form.petLocation.value;
    const contactNumber = form.contact.value;
    const ownerName = form.ownerName.value;
    const gender = form.petGender.value;
    const description = form.description.value;

    // Ensure Firebase auth exists
    if (!auth || !auth.currentUser) {
      alert("User not authenticated!");
      return;
    }
    if (
      (name,
      age,
      location,
      contactNumber,
      ownerName,
      gender,
      description === "")
    ) {
      setError(`Please enter all the fields`);
      setLoading(false);
    }
    // Get Firebase Token
    const user = auth.currentUser;
    const token = await user.getIdToken();

    // Append form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("location", location);
    formData.append("contactNumber", contactNumber);
    formData.append("ownerName", ownerName);
    formData.append("gender", gender);
    formData.append("description", description);
    formData.append("userId", user.uid); // Firebase user ID

    // Append images
    images.forEach((image) => {
      formData.append("images", image);
    });

    // Send to backend
    try {
      const response = await fetch(`${API_BASE_URL}/pets`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: formData,
      });

      if (response.ok) {
        alert("Pet listed successfully!");
        setLoading(false);
        navigate(`/adopt/#${name}+${gender}+${location}`)
      } else {
        alert("Failed to list pet.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  return (
    <div className="max-w-screen flex items-center justify-center">
      <div className="bg-black outline-2 pl-2 outline-amber-500 rounded-3xl  text-black max-w-[95%] flex flex-col mt-10 mb-10 pr-2">
        <div className="flex items-center ml-3  border-amber-50">
          <h1 className=" text-6xl  text-amber-500 mt-10">New Post:</h1>
        </div>
        <div className=" text-white mt-10 w-fit max-w-screen">
          <form
            action=""
            onSubmit={submitPost}
            className="flex flex-col gap-5 lg:gap-7 ml-2"
          >
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="petName" className="text-l md:text-2xl">
                Pet Name:
              </label>
              <input
                type=" text"
                className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 pr-2 text-[#EFEFEF] w-full lg:w-[50%] "
                name="petName"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="petAge" className="text-l md:text-2xl">
                Pet Age:
              </label>
              <input
                type=" text"
                className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] "
                name="petAge"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="petLocation" className="lxt-md md:text-2xl">
                Location:
              </label>
              <input
                type=" text"
                className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] "
                name="petLocation"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="contact" className="text-l md:text-2xl">
                Contact:
              </label>
              <input
                type=" text"
                className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] "
                name="contact"
                id=""
              />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="ownerName" className="text-l md:text-2xl">
                Owner{`'`}s Name:
              </label>
              <input
                type=" text"
                className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] "
                name="ownerName"
                id=""
                defaultValue={user.displayName}
              />
            </div>
            <div className="flex flex-col  mx-1 my-1 justify-between gap-1 pr-2">
              <label htmlFor="petGender" className="text-md md:text-2xl">
                Gender:
              </label>
              <select
                id="petGender"
                name="petGender"
                className="bg-[#2a2a2a] pl-1  text-white w-60 h-12 text-xl lg:w-100 rounded-2xl"
                defaultValue=""
              >
                <option value="" disabled>
                  Select:
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 justify-between w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="imageUpload" className="text-l md:text-2xl">
                Upload Image:
              </label>
              <div className="flex flex-col sticky w-full lg:w-[50%] items-center justify-center">
                <div className="h-52 bg-amber-50 my-2 rounded-md w-[100%] flex justify-between flex-col">
                  {/* Display uploaded images */}
                  <div className="flex flex-wrap p-2 gap-1">
                    {images.map((imgSrc, index) => (
                      <img
                        src={imgSrc}
                        alt={`Uploaded ${index}`}
                        className="h-20 w-20 object-contain"
                        key={index}
                      />
                    ))}
                  </div>

                  {/* File Input and Upload Button */}
                  <div className="flex items-center justify-center mb-2">
                    <input
                      type="file"
                      id="imageUpload"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="imageUpload"
                      className="button lg:w-[50] cursor-pointer flex items-center"
                    >
                      <svg
                        id="UploadToCloud"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16px"
                        width="16px"
                        className="icon"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          className="color000000 svgShape"
                          fill="#000000"
                          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
                        ></path>
                      </svg>
                      Upload Image
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-full mx-1 my-1 pr-2">
              <label htmlFor="description" className="text-l md:text-2xl">
                Describe why you want to post your pet for adoption:
              </label>
              <textarea
                type=" text"
                className="bg-[#2a2a2a] rounded-2xl min-2 h-20 lg:h-28 lg:min-h-fit p-2 lg:w-[50%]"
                name="description"
                id=""
              />
            </div>
            <div>
              <p className="text-red-500 text-sm">{error}</p>
            </div>
            <div className="flex gap-1 mb-4 pr-1">
              <button
                className="bg-white w-full lg:w-50 h-12 text-black text-xl rounded-2xl cursor-pointer relative"
                type="submit"
              >
                {loading?(
                  <div className="h-full w-full flex justify-center items-center">
                    <Spinner className="max-h-2 max-w-2 object-fill" />
                  </div>
                  ): "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
