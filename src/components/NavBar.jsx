import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isSidebar,setIsSideBar] = useState(false)


    const handleSidebar = () =>{
        setIsSideBar(!isSidebar)
    }
	return (
		<div className="text-white  flex items-center h-24 max-w-[1240px] mx-auto">
			<h1 className="text-3xl font-bold w-full uppercase  text-[#00df98e3]">
				<Link className="" to='/'>WPS.</Link>
			</h1>
			<ul className=" hidden md:flex uppercase cursor-pointer">
				<li className="p-4 text-[#00fd9a] hover:text-white "><Link to='skill'>Skill</Link></li>
				<li className="p-4 text-[#00fd9a] hover:text-white"><Link to='project'>Project</Link></li>
				<li className="p-4 text-[#00fd9a] hover:text-white"><Link to='about'>About</Link></li>
				<li className="p-4 text-[#00fd9a] hover:text-white"><Link to='contact'>Contact</Link></li>
				
			</ul>
			<div onClick={handleSidebar} className="block mr-2 md:hidden">
                {
                    isSidebar ?  <AiOutlineClose  className="hover:text-[#00df9a]" size={20}/>:
					<AiOutlineMenu className="hover:text-[#00df9a]" size={20}/> 
                }
				
				  <div className={!isSidebar? "fixed left-[-100%]": 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-200'  }>
            <h1 className="text-3xl font-bold w-full uppercase text-[#00df98e3]">
			<Link to='/'>WPS.</Link>
			</h1>
            <ul className="p-4 text-sm uppercase cursor-pointer  ">
				<li className="p-4 border-b border-gray-600 hover:text-[#00df9a]"><Link to='skill'>Skill</Link></li>
				<li className="p-4 border-b  border-gray-600  hover:text-[#00df9a]"><Link to='skill'>project</Link></li>
				<li className="p-4 border-b  border-gray-600  hover:text-[#00df9a]"><Link to='skill'>about</Link></li>
				<li className="p-4  hover:text-[#00df9a]"><Link to='skill'>contact</Link></li>
				
			</ul>
            </div>

            </div>
         
          
		</div>
	);
};

export default NavBar;
