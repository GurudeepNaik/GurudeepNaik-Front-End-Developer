import React from "react";

const Card = (props) => {
  const data = props.data;
  return (
    <>
      <article className="capsule-card articles text-white">
        <h2 className="text-xl font-bold mb-5">
          {data.type}
          {"  "}
          <span className="text-base opacity-75 font-light">{data.serial}</span>
        </h2>
        <ul>
          <li className="mb-1">{data.launches.length} launches</li>
          <li className="mb-1">{data.land_landings} land landings</li>
          <li className="mb-1">{data.water_landings} water landings</li>
          <li className="mb-1">Reused {data.reuse_count} times</li>
          {data.status === "active" ? (
            <li className="text-emerald-500">Active</li>
          ) : (
            <li className="text-rose-500">Retired</li>
          )}
        </ul>
        <p className="mt-5 opacity-75">{data.last_update}</p>
      </article>
    </>
  );
};

export default Card;
