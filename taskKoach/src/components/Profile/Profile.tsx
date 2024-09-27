import { useEffect, useState } from "react";
import "./Profile.css";
import { useParams } from "react-router";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  title: string;
  activities: string;
  image: string; 
}

function Profile() {
  const { id } = useParams<{ id: string }>(); 

  const [data, setData] = useState<User | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching user data");
        }
        return response.json();
      })
      .then((data: User) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile data</p>;
  }

  return (
    <div className="div">
      {data && (
        <div className="profile-card">
          <div className="image-profile">
            <img src={data.image} alt={`${data.name}'s profile`} />
          </div>
          <h1>{data.name}</h1>
          <h2>{data.username}</h2>
          <p>{data.email}</p>
          <p>{data.title}</p>
          <p>{data.activities}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
