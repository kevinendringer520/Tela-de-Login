import type { ReactNode } from "react";

type Props = React.ComponentProps<"input"> & {
  legend?: string;
  icon?: ReactNode;
};

export function Input ({ legend, icon,  type="text", ...rest}: Props){
    return(


        <fieldset className="w-full flex flex-1 max-h-20">
            {legend && <legend>{legend}</legend>}
        
<div className="relative w-full">
          {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
            </span>
          )}

           <input 
           type={type} className="w-full h-12 rounded-lg border border-black-100 text-sm text-white-100 bg-transparent outline-none pl-10 "
           {...rest} />
        </div>
           
        </fieldset>
    )
}


