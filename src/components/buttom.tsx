type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
}

export function Button({children, isLoading, type = "button", ...rest}: Props){
    return(
    <div className="flex items-center justify-center">
        <button type={type} disabled={isLoading} className=" w-full flex items-center justify-center h-12 bg-orange-200 rounded-lg
         text-white-200 cursor-pointer hover:bg-orange-100 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed px-10 py-3 sm:w-auto" 
        {...rest}>
        {children}
        </button>
    </div>
    )
}