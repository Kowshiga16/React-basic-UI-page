import {
FaBook,FaReact,FaRocket
}from "react-icons/fa"

const links=[
    {
        name:"Vite documentation",
        icon:<FaBook/>,
        href:"#"

    },

        {
        name:"React Guide",
        icon:<FaReact/>,
        href:"#"

    },

        {
        name:"Frontend Trends",
        icon:<FaRocket/>,
        href:"#"

    },
]
function Aside(){
    return(
       <>
<div className="bg-gray-200 mt-8 rounded shadow-xl p-6">
    <h3 className="text-xl font-bold mt-3">📌Related Links</h3>
    <ul className="mt-2 space-y-1">
       
        {links.map((link => (
 <li>
            <a href={link.href} className="flex gap-1 items-center text-blue-500 hover:underline"> 
                {link.icon} {link.name}
            </a>
        </li>
        )

        ))}
    </ul>
</div>


       </> 
    )
}
export default Aside;