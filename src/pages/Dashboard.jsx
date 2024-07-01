import React, { useState } from "react";
import { useEffect } from "react";
function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from localStorage
    const storedData = localStorage.getItem('username');
    if (storedData) {
      setData(storedData);
    }
  }, []);
  // console.log(data);

  return (
    <div className="flex flex-col justify-center w-screen h-screen items-center">
      <div>Welcome to Dashboard</div>
     
      <p>{data}</p>

    </div>
  );
}

export default Dashboard;
