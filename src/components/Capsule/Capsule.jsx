import React, { useEffect, useState } from "react";
import GetWithHeader from "../GetWithHeader/GetWithHeader";
import { useAPI } from "../../context/usecontext";
import Card from "./Card";
import Loader from "../Loader/Loader";
import "./Capsule.css";

const Capsule = () => {
  const { Capsules } = useAPI();
  const [array, setarray] = useState(Capsules);
  const [filterParam, setFilterParam] = useState({type: "All",search: ""});
  const handleSelectChange = (e) => {
    setFilterParam((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSearch = () => {
    if (filterParam.type === "all") {
      setarray(Capsules);
    } else {
      const temArray=Capsules.filter((data) => data[filterParam.type] === filterParam.search);
      if(temArray.length>0) setarray(temArray);
      else{
        alert("Not Able to Find Any");
        setarray(Capsules);
      }
    }
    setFilterParam({
      type:"All",
      search:""
    })
  };
  useEffect(()=>{
    setarray(Capsules);
  },[Capsules])
  return (
    <div>
      <section className="py-32">
        <h1 className="heading text-center mb-10 text-white">Capsules</h1>
        <div className="filter-section">
        <select name="type" onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="type">type</option>
          <option value="status">status</option>
          <option value="last_update">last_update</option>
        </select>
        <input
          name="search"
          type="text"
          onChange={handleSelectChange}
          value={filterParam.search}
        />
        <button onClick={handleSearch}>Search</button>
        </div>
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
          {Capsules.length > 0 ? (
            array.map((data, i) => <Card key={i} data={data} />)
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </div>
  );
};

export default GetWithHeader(Capsule);
