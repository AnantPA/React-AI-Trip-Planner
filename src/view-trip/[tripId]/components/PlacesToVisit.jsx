import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div key={index}>
            <h2 className="font-medium text-lg">{item?.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item?.plan?.map((place, i) => (
                <div className="mt-5" key={i}>
                  <h2 className="font-medium text-sm text-orange-500">
                    {place?.time}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
