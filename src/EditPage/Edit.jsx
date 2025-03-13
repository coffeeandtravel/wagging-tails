import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner";

const Edit = () => {
    const { auth } = useContext(AuthContext);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    // console.log(API_BASE_URL)
    const [petData, setPetData] = useState({
      name: "",
      age: "",
      location: "",
      contactNumber: "",
      ownerName: "",
      gender: "",
      description: "",
      images: [],
    });
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchPetData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/pets/${id}`);
          if (response.ok) {
            const data = await response.json();
            setPetData(data);
          } else {
            console.error("Failed to fetch pet data");
          }
        } catch (error) {
          console.error("Error fetching pet data:", error);
          setError(error);
        }
      };
      fetchPetData();
    }, [id]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setPetData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      const imageUrls = files.map((file) => URL.createObjectURL(file));
      setPetData((prevData) => ({ ...prevData, images: imageUrls }));
    };
  
    const handleEdit = async (event) => {
      event.preventDefault();
      setLoading(true);
  
      const token = await auth.currentUser?.getIdToken();
      if (!token) {
        alert("User not authenticated!");
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(petData),
        });
  
        if (response.ok) {
          alert("Pet details updated successfully!");
          navigate(`/adopt/#${petData.name}+${petData.gender}+${petData.location}`);
        } else {
          alert("Failed to update pet details.");
        }
      } catch (error) {
        console.error("Error updating pet:", error);
        console.log(error)
      } finally {
        setLoading(false);
      }
    };
  
    if (loading) return <Spinner />;

  return (
    <div className="max-w-screen flex items-center justify-center">
      <div className="bg-black outline-2 pl-0 lg:pl-2 outline-amber-500 rounded-3xl  text-black w-[95%] md:w-[80%] lg:w-[55%] flex flex-col mt-10 mb-10">
        <div className="flex items-center ml-3  border-amber-50">
          <h1 className=" text-6xl  text-amber-500 mt-10">Edit:</h1>
        </div>
        <div className="text-white mt-10 w-fit ">
          <form onSubmit={handleEdit} className="flex flex-col gap-5 lg:gap-7 ml-2">
            <div className="flex flex-col gap-1 justify-between w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="petName" className="text-l md:text-2xl">Pet Name:</label>
              <input type="text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 pr-2 text-[#EFEFEF] w-full lg:w-[50%]" name="name" value={petData.name} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-1 justify-between w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="petAge" className="text-l md:text-2xl">Pet Age:</label>
              <input type="text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%]" name="age" value={petData.age} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-1 justify-between w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="petLocation" className="text-md md:text-2xl">Location:</label>
              <input type="text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%]" name="location" value={petData.location} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-1 justify-between w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="petGender" className="text-md md:text-2xl">Gender:</label>
              <select id="petGender" name="gender" className="bg-[#2a2a2a] pl-1 text-white w-60 h-12 text-xl lg:w-100 rounded-2xl" value={petData.gender} onChange={handleChange}>
                <option value="" disabled>Select:</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 justify-between w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="imageUpload" className="text-l md:text-2xl">Upload Image:</label>
              <div className="flex flex-col sticky w-full lg:w-[50%] items-center justify-center">
                <div className="h-52 bg-amber-50 my-2 rounded-md w-[100%] flex justify-between flex-col">
                  <div className="flex flex-wrap p-2 gap-1">
                    {petData.images.map((imgSrc, index) => (
                      <img src={imgSrc} alt={`Uploaded ${index}`} className="h-20 w-20 object-contain" key={index} />
                    ))}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <input type="file" id="imageUpload" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                    <label htmlFor="imageUpload" className="button lg:w-[50] cursor-pointer flex items-center">
                      <svg id="UploadToCloud" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" className="icon">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path className="color000000 svgShape" fill="#000000" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"></path>
                      </svg>
                      Upload Image
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-between w-full lg:w-200 mx-1 my-1 pr-2">
              <label htmlFor="contact" className="text-l md:text-2xl">Contact:</label>
              <input type="text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%]" name="contactNumber" value={petData.contactNumber} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-full mx-1 my-1 pr-2">
              <label htmlFor="description" className="text-l md:text-2xl">Description:</label>
              <textarea className="bg-[#2a2a2a] rounded-2xl min-2 h-20 lg:h-28 lg:min-h-fit p-2 lg:w-[50%]" name="description" value={petData.description} onChange={handleChange}></textarea>
            </div>
            <div className="flex gap-1 mb-4 pr-1">
              <button className="bg-white w-full lg:w-50 h-12 text-black text-xl rounded-2xl cursor-pointer" type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
