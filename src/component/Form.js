import React from "react";
import Table2 from "./Table2";

export default function Form(props) {
  return (
    <div>
      <div className="container  ">
        <div className="tab p-5">
          Book Name:
          <input
            type="text"
            aria-label="Book name"
            className="form-control mt-3"
            id="bname"
          ></input>
          Auther Name:
          <input
            type="text"
            aria-label="Auther name"
            className="form-control mt-3"
           
          ></input>
          No of pages:
          <input
            type="number"
            aria-label="Pages"
            className="form-control mt-3"
        
          ></input>
          Price:
          <input
            type="number"
            aria-label="Pages"
            className="form-control mt-3"
          
          ></input>
          Date of Publication:
          <input
            type="Date"
            aria-label="Dop"
            className="form-control mt-3"
            
          ></input>

          {/* <div className="container flex">
            <button type="button" className="btn btn-success my-3 mx-3 "> Ad</button>
            <button type="button" className="btn btn-success my-3 mx-3"> Edit</button>
            <button type="button" className="btn btn-success my-3 mx-3"> Remove</button>
            </div> */}
            <div className="container flex">
                        <button type="button" className="btn btn-success my-3 mx-3 " onClick={props.addHtmlTableRow}>Add</button>
                        <button type="button" className="btn btn-success my-3 mx-3" onClick={props.editHtmlTbleSelectedRow}>Edit</button>
                        <button type="button" className="btn btn-success my-3 mx-3" onClick={props.removeSelectedRow}>Remove</button>
              </div> 
          </div>
        </div>
      </div>
    
  );
}
