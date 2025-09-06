import react, { cloneElement } from "react";
import {
FaUser,
}from "react-icons/fa"
const Tableheading=[
    {
        colname:"Avatar",
        icon:"👤",
    },
     {
        colname:"Name",
        icon:"📛",
    },
     {
        colname:"Status",
        icon:"✅",
    },
]
const TableData=[
    {
        avatar:<FaUser/>,
        name:"Alice",
        status:"active"

    },

       {
        avatar:<FaUser/>,
        name:"Bob",
        status:"inactive"

    }
]

function Table(){
    return(
       <>
<div className="container mx-auto text-center ">
    <h2 className="text-2xl font-bold">📊User Data</h2>
    <table className="border border-collapse mx-auto mt-3">
<thead>
  <tr>
    {Tableheading.map((heading) => ( //heading can be named as 
      <th key={heading.colname} className="border border-black py-2 px-4 bg-gray-200">
        {heading.icon} {heading.colname}
      </th>
    ))}
  </tr>
</thead>
<tbody>
  {TableData.map((col, index) => (
    <tr key={index}>
      <td className="border border-gray-300 px-4 py-2">
        {col.avatar}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {col.name}
      </td>
      <td className={`border border-gray-300 px-4 py-2 ${
        col.status=="active" ? `text-green-300` :`text-red-600`
      }`}>  {/* javascript inside html use this */}

        {col.status}
      </td> 
    </tr>
  ))}
</tbody>

    </table>
</div>
       </> 
    )
}
export default Table;