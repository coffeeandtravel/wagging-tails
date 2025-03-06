import { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.29.131:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <h2 className="text-7xl text-white w-full">Fetched Users:</h2>
      {data &&
        data.map((user) => (
          <div
            key={user._id}
            className="grid grid-row-2 grid-cols-3 py-10 bg-black h-fit w-full"
          >
            <div>
              <p className="text-white text-xl">
                Name: <span className="text-white">{user.name}</span>
              </p>
              <p className="text-white text-xl">
                Age: <span>{user.age}</span>
              </p>
              <p className="text-white text-xl">
                Gender: <span>{user.gender}</span>
              </p>
              <p className="text-white text-xl">
                Location: <span>{user.location}</span>
              </p>
              <p className="text-white text-xl">
                Description: <span>{user.description}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Test;
