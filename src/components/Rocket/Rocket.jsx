import React, { useRef } from 'react'
import GetWithHeader from '../GetWithHeader/GetWithHeader'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Loader from '../Loader/Loader'
import { useAPI } from "../../context/usecontext";
import { sideScroll } from '../../utils/HorizontalScroll';
import "./Rocket.css"
import Card from './Card'

const Rocket = () => {
  const { rockets } = useAPI();
   const contentWrapper= useRef(null)
  return (
    <div className='rocket-container w-11/12 mr-auto'>
      {rockets.length>0 ? (
        <section className="py-10 max-width">
        <div className="heading-container">
        <h1>Rockets</h1>
        <div className="arrow-btn-container">
          <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 800, -10)}}>
            <IoIosArrowBack />
          </button>
          <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 800, 10)}}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
          <div ref={contentWrapper} id="grid-list" className="card-container">
            {rockets.map((data,i) => <Card key={i} data={data}/>)}
          </div>
        </section>
      ) : (
        <Loader/>
      )}
    </div>
  )
}

export default GetWithHeader(Rocket)