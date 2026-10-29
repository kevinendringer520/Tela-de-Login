export function Notfound(){
    return (<div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col">
        <h1 className="text-orange-200 font-semibold text-2xl mb-10"> Pagina inexistente!
        </h1>
        <a href="/" className="font-semibold text-center text-orange-200 hover:text-orange-100 transition ease-linear"
         >Voltar para o inicio
        </a>
        </div>
    </div>
)
}