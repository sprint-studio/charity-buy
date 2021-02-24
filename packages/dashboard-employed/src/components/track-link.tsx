import React, { useState } from "react";

type TrackLinkProps = {
  onSubmit: (link: string) => void;
};

const TrackLink: React.FC<TrackLinkProps> = (
  props: TrackLinkProps
): JSX.Element => {
  const [link, setLink] = useState("");
  return (
    <form
      className="flex flex-col space-y-1"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(link);
      }}
    >
      <legend className="text-sm text-gray-600">
        Dopo aver inserito e tracciato il link verrai rimando in automatico alla
        pagina dove potrai acquistrare il prodotto
      </legend>
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-medium text-xs">
          Product link
        </label>
        <input
          type="text"
          name="link"
          id=""
          className="px-4 py-2 border rounded"
          required
          onChange={(event) => setLink(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-800 text-white rounded font-semibold text-sm"
      >
        Track and navigate
      </button>
    </form>
  );
};

export default TrackLink;