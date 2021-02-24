import React from "react";
import TrackLink from "../components/track-link";

const TrackLinkPage: React.FC = (props) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="">Traccia un link</h2>
      <div className="w-2/4">
        <TrackLink onSubmit={(link) => console.log(link)}></TrackLink>
      </div>
    </div>
  );
};

export default TrackLinkPage;
