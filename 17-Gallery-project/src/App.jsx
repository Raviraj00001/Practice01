// import React, { useEffect } from "react";
// import "./App.css";
// import Card from "./components/Card";
// import Usestate from "react";
// const App = () => {
// const [photos, setPhotos] = useState([]);
//   const getPhotos = async () => {
//     try {
//       const response = await fetch(
//         "https://picsum.photos/v2/list?page=1&limit=10"
//       );
//       const data = await response.json();
//        setPhotos(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching photos:", error);
//     }
//   };

//   useEffect(() => {
//     getPhotos();
//   }, []);

//   return (
//     <div>
//       {photos.map((photos) => (
//         <Card key={photos.id} photo={photos} />
//       ))}
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
      );

      const data = await response.json();

      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {photos.map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default App;