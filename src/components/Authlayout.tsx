import { Outlet} from "react-router";

import icone from "../assets/icone.svg";

export function Authlayout() {
    return (
    <div className="w-screen h-screen bg-orange-100 flex flex-col justify-center items-center
    text-white-100">
        <main className=" bg-black-100 p-20 rounded-md flex items-center flex-col md: min-[462px]:">
            <img src={icone} alt="Logo" />
           
            <Outlet />
        </main>
    </div>
    )
}