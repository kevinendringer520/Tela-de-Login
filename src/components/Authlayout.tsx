import { Outlet} from "react-router";

import icone from "../assets/icone.svg";

export function Authlayout() {
    return (
    <div className=" min-h-screen
  w-full
  flex
  items-center
  justify-center
  bg-orange-100
  px-4
  py-6
 text-white-100">

   
        <main className="  max-w-\[635px\]
  min-h-\[490px\]
  sm:p-10
  md:p-12 bg-black-100 p-20 rounded-md flex items-center flex-col md: min-[462px]:">
            <img src={icone} alt="Logo" />
           
            <Outlet />
        </main>
    </div>
    )
}