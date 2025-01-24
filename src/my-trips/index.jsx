import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

const MyTrips = () => {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    getUserTrip();
  }, []);
  const [userTrips, setUserTrips] = useState([]);
  const getUserTrip = async () => {
    const user = JSON.parse(localStorage.getItem("AI_USER"));
    if (!user) {
      navigate("/");
      return;
    }
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    setIsLoading(true);
    const querySnapShot = await getDocs(q);
    setUserTrips([]);
    if (querySnapShot.empty) {
      console.log("No matching documents.");
      return;
    }
    querySnapShot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setIsLoading(false);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-5">
        {!loading
          ? userTrips?.map((trip, index) => (
              <UserTripCardItem trip={trip} key={index} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                className="h-[320px] w-full bg-slate-200 animate-pulse rounded-xl"
                key={index}
              ></div>
            ))}
      </div>
    </div>
  );
};

export default MyTrips;
