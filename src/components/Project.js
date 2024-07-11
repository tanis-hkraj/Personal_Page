import React from 'react'
import Card from "./Card";
import { properties } from "../constants/data";
export const Project = () => {
  return (
    <div className="container">
      <h1 style={{ color: "white",marginTop:"3%" }}>Projects:</h1>
      
      <div className="row">
        {properties.map((item) => (
          <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
