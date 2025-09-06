import {
FaHome,FaInfoCircle,FaServicestack,FaEnvelope
}from "react-icons/fa"
 const NavLink=[
{  name:"Home",
    href:"",
    icon:<FaHome />,

 },

 {  name:"About",
    href:"",
    icon:<FaInfoCircle/>,

 },

 {  name:"Service",
    href:"",
    icon: <FaServicestack/>,

 },

 {  name:"Contact",
    href:"",
    icon: <FaEnvelope/>,

 },
 ];
  
function Navbar(){
return(
    <> 
     <nav className="bg-gray-900 text-white p-4">
        <div className="container flex mx-auto items-center justify-between ">
<h1 className="font-bold text-2xl ml-9 items-center flex gap-1">🚀My Website</h1>
   <ul className="flex space-x-6 mr-9">
{NavLink.map((link,index)=>( //map(link) beacuse it loops to all items in Navlink object
<li key={index}>
    <a href="" className="flex items-center gap-1 hover:text-blue-400">
        {link.icon}
        {link.name}
        {link.href}
        
    </a>
</li>
))}
   </ul>
        </div>
        </nav> 
    </>

)
}

export default Navbar;