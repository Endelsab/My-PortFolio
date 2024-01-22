import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
	return (
		<div className=" text-center justify-center align-middle h-screen border">
			<h1 className=" text-xl font-bold text-white md:text-2xl ">
				CONTACT
			</h1>
      <div className=" flex flex-col md:flex-row gap-10 mt-5 mx-5 md: justify-center align-middle ">
        <div className="border pl-20  border-green-500  basis-1/2 ">
         <div className="contact-wrapper ml-4 w-[250px] h-[200px] border md:ml-15 xl:ml-[180px]">
          
          <div className="text-start border-b border-gray-500 text-[#00fd9a] flex ">
          <FaLocationDot className="pt-1" />
            <p className="ml-3"> San Isidro, Northern Samar</p>
           
          </div>
          <div className="text-start border-b border-gray-500 text-[#00fd9a] flex mt-5">
          <IoCallSharp className="mt-1"/>
           <p className="text-start ml-3">09352192588
           </p>

          </div>
          <div className="text-start text-[#00fd9a] flex mt-5 border-b border-gray-500">
          <MdOutlineMail className="mt-1"/>
           <p className="text-start ml-3">wendelsabayo999@gmail.com
           </p>

          </div>

          

         </div>
        </div>

        <div className=" border border-green-500 basis-1/2">
         <h1>world</h1>
        </div>

      </div>
     
		</div>
	);
};

export default Contact;
