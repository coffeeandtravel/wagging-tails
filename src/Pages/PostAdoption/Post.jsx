const Post = () => {
  const submitPost = (event) => {
    // fetch('http://localhost:3000/users').then(res=>res.json).then(data=>).catch((error)=>console.log(error.message))
    event.preventDefault();
    const form = event.target;
    const name = form.petName.value;
    const age = form.petAge.value;
    const location = form.petLocation.value;
    const contactNumber = form.contact.value;
    const ownerName = form.ownerName.value;
    const gender = form.petGender.value;
    const userId = form.userID.value;
    const images = form.imageURL.value;
    const description = form.description.value;
    const userObj = {
      name,
      age,
      location,
      contactNumber,
      gender,
      ownerName,
      userId,
      images,
      description,
    };
    console.log(userObj);

    fetch("http://192.168.29.131:3000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Post Uploaded Successfully!", data);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Error uploading the post!");
      });
  };
  return (
    <div className="max-w-screen flex items-center justify-center">
      <div className="bg-black outline-2 pl-2 outline-amber-500 rounded-3xl  text-black max-w-[95%] flex flex-col mt-10 mb-10 pr-2">
        <div className="flex items-center ml-3  border-amber-50">
          <h1 className=" text-6xl  text-amber-500 mt-10">New Post:</h1>
        </div>
        <div className=" text-white mt-10 w-fit max-w-screen" >
          <form action="" onSubmit={submitPost} className="flex flex-col gap-5 lg:gap-7 ml-2">
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
            <label htmlFor="petName"className="text-l md:text-2xl" >Pet Name:</label>
            <input type=" text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 pr-2 text-[#EFEFEF] w-full lg:w-[50%] " name="petName" id="" />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
            <label htmlFor="petAge"className="text-l md:text-2xl" >Pet Age:</label>
            <input type=" text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] " name="petAge" id="" />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
            <label htmlFor="petLocation"className="lxt-md md:text-2xl" >Location:</label>
            <input type=" text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] " name="petLocation" id="" />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
            <label htmlFor="contact"className="text-l md:text-2xl" >Contact:</label>
            <input type=" text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] " name="contact" id="" />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
            <label htmlFor="ownerName"className="text-l md:text-2xl" >Owner{`'`}s:</label>
            <input type=" text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] " name="ownerName" id="" />
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
    <option value="" disabled>Select:</option>
    <option value="M">Male</option>
    <option value="F">Female</option>
  </select>
</div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
            <label htmlFor="userID"className="text-l md:text-2xl" >userID:</label>
            <input type=" text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] " name="userID" id="" />
            </div>
            <div className="flex flex-col gap-1 justify-between  w-full lg:w-200 mx-1 my-1 pr-2">
            <label htmlFor="imageURL"className="text-l md:text-2xl" >imageURL:</label>
            <input type=" text" className="bg-[#2a2a2a] rounded-2xl h-12 lg:h-12 pl-2 text-[#EFEFEF] w-full lg:w-[50%] " name="imageURL" id="" />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-full mx-1 my-1 pr-2">
            <label htmlFor="description"className="text-l md:text-2xl" >Describe why you want to post your pet for adoption:</label>
            <textarea type=" text" className="bg-[#2a2a2a] rounded-2xl min-2 h-20 lg:h-12 pl-2 lg:w-[50%]" name="description" id="" />
            </div>
            <div className="flex gap-1 mb-4 pr-1">
            <button className="bg-white w-full lg:w-50 h-12 text-black text-xl rounded-2xl cursor-pointer" type="submit" >Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
