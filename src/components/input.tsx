type Props = React.ComponentProps<"input"> & {
    legend?: string
}

export function Input ({ legend, type="text", ...rest}: Props){
    return(
        <fieldset className="w-full flex flex-1 max-h-20">
            {legend && <legend>{legend}</legend>}
        
           <input 
           type={type} className="w-full h-12 rounded-lg border border-black-100 text-sm text-white-100 bg-transparent outline-none "
           {...rest} />

           
        </fieldset>
    )
}


