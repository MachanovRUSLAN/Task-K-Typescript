import  { useEffect, useState } from "react";
import "./UserActivities.css";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";


  interface User {
    id:number;
    title:string
  }

function UserActivities() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activ, setActiv] = useState<User[]>([]);



  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/activities")
        .then((response) => response.json())
        .then((data) => {
          setActiv(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error", error);
          
         setError(true);
         setLoading(false)
        })
    }, 1000);
  }, []);

  console.log(activ);

  return (
    <div className="activ-profile">  
      {loading ? (
        <div className="load">
         <CircularProgress/>
         </div>
      ) : error ? (
        <>
         <div className="error">
          <p> '❌'</p>
          <p>error</p>
         </div>
        </>
      ) : (activ.map((item, id) => (
          <Link to={`/activities/${item.id}`}>
            <div className="activ-card" key={id}>
              <p>{item.title.slice(0, 20)}....</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default UserActivities;
