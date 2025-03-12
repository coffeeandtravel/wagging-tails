import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthProvider";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
const YourPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { auth, user } = useContext(AuthContext);
  const [hoveredPost, setHoveredPost] = useState(null); // State to track hovered post
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const token = await user.getIdToken(); // Ensure we get the token asynchronously
        const userId = user.uid; // Use UID instead of email if that's what the backend expects

        const response = await fetch(`http://localhost:3000/pets/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Firebase token for verification
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received.");
        }

        setUserPosts(data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
        setError("Failed to load your posts.");
        setUserPosts([]); // Ensure we always set an array
      } finally {
        setLoading(false);
      }
    };
    fetchUserPosts();
  }, [user]);


const handledeleteButton = ()=>{
    setDeleteModal(true);
}
  const handleDelete = async (id) => {
    if (!user) {
      console.error("User not authenticated.");
      return;
    }
  
    try {
      const token = await user.getIdToken(); // Get Firebase token
      const response = await fetch(`http://localhost:3000/pets/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      // Remove the deleted post from state
      setUserPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
  
      console.log("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    }
  };
  

  return (
    <div className="h-full min-h-[100vh] max-w-full m-2 flex justify-center static">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mx-2 my-12 gap-8 mt-10 relative">
      {loading ? (
        <div className="flex h-full items-center justify-center w-[90%]">
          <div className="loader"></div>
        </div>
      ) : userPosts.length === 0 ? (
        <div className="flex flex-row">

          <p className="text-white text-xl inline-block">You {`haven't`} posted anything yet.<Link to="/user/post-adoption" className="text-orange-400 bg-white px-3 py-2 inline-block rounded-3xl mt-5">Create a new Post!</Link> </p>
        </div>
      ) : (
        userPosts.map((item) => (
          <motion.div
            className="h-130 w-85 bg-black rounded-3xl border-2 border-white relative transition-all duration-700 ease-in-out"
            onMouseEnter={() => setHoveredPost(item._id)}
            onMouseLeave={() => {setHoveredPost(null); setDeleteModal(false) }}
            key={item._id}
          >
            <div className="h-full w-full flex flex-col">
              <img
                src={item.images}
                alt={`Image for ${item.name}`}
                className="h-[70%] w-[100%] object-cover images rounded-t-3xl"
              />
              <div to={`/user/adopt/${item._id}`}>
                <div className="ml-5 mt-3 gap-2 flex flex-col">
                  <p className="text-5xl text-white">{item.name}</p>
                  <p className="text-white text-xl">{item.gender}</p>
                </div>
              </div>
            </div>
            {hoveredPost === item._id && (
                <div className={`absolute top-0 right-0 h-full w-full bg-black/40 rounded-3xl backdrop-blur-md flex justify-center items-center transition-opacity duration-700 ease-in-out ${
                  hoveredPost === item._id ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}>
                  <div className="flex flex-row justify-center items-center gap-3">
                    <div className="rounded-lg px-3 py-2 bg-amber-500 cursor-pointer flex flex-col">
                      <button className="flex justify-center items-center cursor-pointer pl-0.5" onClick={()=>navigate(`/user/edit/${item._id}`)}>
                        <MdEdit className="text-3xl" />
                      </button>
                    </div>
                    <div className="rounded-lg px-3 py-2 bg-red-500 cursor-pointer">
                      <button className="flex justify-center items-center cursor-pointer" onClick={()=>handledeleteButton(item._id)}>
                        <FaTrash className="text-3xl" />
                      </button>
                  {deleteModal&& (
                    <div className="absolute h-full w-full rounded-3xl z-10 top-0 left-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
                      <div className="h-80 w-200 bg-white flex flex-col gap-5 justify-center items-center text-center">
                        <p className="text-xl text-black w-[80%]">Are you sure you want to delete this post?</p>
                        <div className="flex flex-row gap-3">
                          <button className="bg-red-600 px-3 py-2 cursor-pointer rounded-full" onClick={()=>handleDelete(item._id)}>Delete</button>
                          <button className="bg-amber-400 px-3 py-2 cursor-pointer rounded-full" onClick={()=>setDeleteModal(false)}>Cancel</button>
                        </div>
                      </div>
                    </div>
                  )}
                    </div>
                  </div>
                </div>
              )}
          </motion.div>
        ))
      )}
    </div>
    </div>
  );
};

export default YourPosts;
