import React from "react";
import Form from "./Form";
//import { useState } from "react";
//import ReactTable from "react-table";

export default function Table2() {



  var rIndex;
  var table = document.getElementById("table");

  // check the empty input
  const checkEmptyInput=() =>{
    var isEmpty = false;
    var Bm = document.getElementById("Bm").value;
    var Sl = document.getElementById("Sl").value;
    var An = document.getElementById("An").value;
    var Nop = document.getElementById("Nop").value;
    var Price = document.getElementById("Price").value;
    var Dop = document.getElementById("Dop").value;

    if (Bm === "") {
      alert("Book Name Connot Be Empty");
      isEmpty = true;
    } else if (Sl === "") {
      alert("Sl no Connot Be Empty");
      isEmpty = true;
    } else if (An === "") {
      alert("Auther Name Connot Be Empty");
      isEmpty = true;
    } else if (Price === "") {
      alert("Price Connot Be Empty");
      isEmpty = true;
    } else if (Nop === "") {
      alert("No of pages Connot Be Empty");
      isEmpty = true;
    } else if (Dop === "") {
      alert("Date of bublication Connot Be Empty");
      isEmpty = true;
    }
    return isEmpty;
  }

  const addHtmlTableRow=()=> {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
      var newRow = table.insertRow(table.length);
      let  cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        Bm = document.getElementById(" Bm").value,
        Sl = document.getElementById("Sl").value,
        Am = document.getElementById("An").value,
        Nop = document.getElementById("Nop").value,
        Price = document.getElementById("Price").value,
        Dop = document.getElementById("Dop").value;

      cell1.innerHTML = Bm;
      cell2.innerHTML =Sl ;
      cell3.innerHTML =Am ;
      cell4.innerHTML = Nop;
      cell5.innerHTML = Price;
      cell6.innerHTML =Dop;
      // call the function to set the event to the new row
     selectedRowToInput();
    }
  }

          //display selected row data into input text
         const selectedRowToInput=()=>
          {
              
              for(var i = 1; i < table.rows.length; i++)
              {
                  table.rows[i].onclick = ()=>
                  {
                    // get the seected row index
                    rIndex = this.rowIndex;
                    document.getElementById("Sl").value = this.cells[0].innerHTML;
                    document.getElementById("Bm").value = this.cells[1].innerHTML;
                    document.getElementById("An").value = this.cells[2].innerHTML;
                    document.getElementById("Nop").value = this.cells[3].innerHTML;
                    document.getElementById("Price").value = this.cells[4].innerHTML;
                    document.getElementById("Dop").value = this.cells[5].innerHTML;
                  };
              }
          }
          selectedRowToInput();
          
           const editHtmlTbleSelectedRow=()=>
          {
              var  Bm = document.getElementById(" Bm").value,
              Sl = document.getElementById("Sl").value,
              Am = document.getElementById("An").value,
              Nop = document.getElementById("Nop").value,
              Price = document.getElementById("Price").value,
              Dob = document.getElementById("Dop").value;
             if(!checkEmptyInput()){
              table.rows[rIndex].cells[0].innerHTML = Sl;
              table.rows[rIndex].cells[1].innerHTML = Bm;
              table.rows[rIndex].cells[2].innerHTML = Am;
              table.rows[rIndex].cells[3].innerHTML = Nop;
              table.rows[rIndex].cells[4].innerHTML = Price;
              table.rows[rIndex].cells[5].innerHTML = Dob;
            }
          }
          
          const removeSelectedRow=()=>
          {
              table.deleteRow(rIndex);
              // clear input text
              document.getElementById("Sl").value = "";
              document.getElementById("Bm").value = "";
              document.getElementById("An").value = "";
              document.getElementById("Nop").value = "";
              document.getElementById("Price").value = "";
              document.getElementById("Dop").value = "";
          }

  return (
    <>


      <Form addHtmlTableRow={addHtmlTableRow} editHtmlTbleSelectedRow={editHtmlTbleSelectedRow} removeSelectedRow={removeSelectedRow}/>
      {/* <Form />  */}

      <div className="container">
        <table className="table table-bordered" id="table">
          <thead className="text-center">
            <tr className="table-danger">

            <th scope="col" id="Sl">
                Sl No
              </th>
              <th scope="col" id="Bm">
                Book Name
              </th>
             
              <th scope="col" id="An">
                Auther Name
              </th>
              <th scope="col" id="Nop">
                No of pages
              </th>
              <th scope="col" id="Price">
                Price
              </th>
              <th scope="col" id="Dop">
                Date of Publication
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
