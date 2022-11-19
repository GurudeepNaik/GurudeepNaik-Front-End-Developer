import React,{useState} from "react";
import GetWithHeader from "../GetWithHeader/GetWithHeader";
import { useAPI } from "../../context/usecontext";
import Card from "./Card";
import Loader from "../Loader/Loader";
import "./Crew.css";

const Crew = () => {
  const { Crew } = useAPI();  
  const [number, setNumber] = useState(1);
  const filesPerPage = 6;
  const lastCrew = number * filesPerPage;
  const firstCrew = lastCrew - filesPerPage;
  const currentCrews = Crew.slice(firstCrew, lastCrew);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(Crew.length / filesPerPage); i++) pageNumber.push(i);

  const ChangePage = (pageNumber) => {
    const maxPage=Math.ceil(Crew.length / filesPerPage);
    if(pageNumber!==0 && pageNumber <= maxPage){
      setNumber(pageNumber);
    }else{
      alert("Page Limit Exceeded")
    }
  };

  return (
    <section className="py-32">
    <h1 className="heading text-center mb-10 text-white">Crew</h1>
    <div className="flex justify-center gap-30">
      {currentCrews.length > 0 ? (
        currentCrews.map((data, i) => <Card key={i} data={data} />)
      ) : (
        <Loader />
      )}
    </div>
      <div className="paginate flex justify-center align-center gap-20 text-white">
            <button className="paginatebtn" onClick={() => ChangePage(number - 1)}>Previous</button>
              {pageNumber.map((Elem,i) => { return (<button  key={i} className="paginatebtn" onClick={() => ChangePage(Elem)}> {Elem} </button>) })}
            <button className="paginatebtn" onClick={() => ChangePage(number + 1)}>Next</button>        
      </div>
  </section>
  )
}

export default GetWithHeader(Crew);