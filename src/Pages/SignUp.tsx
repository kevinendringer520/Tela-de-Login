import { Input } from "../components/input"

import { Button } from "../components/buttom"

export function SignUp(){
        return (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert("cadastrado!");
    }}
    className="w-full flex flex-col gap-2"
  >
            <Input required legend="Nome" type="E-mail" placeholder="Seu nome" />
           
            <div className="w-full h-[1px] bg-orange-200 px-18" />

             <Input required legend="E-mail" type="E-mail" placeholder="Seu CT-mail" />
           
            <div className="w-full h-[1px] bg-orange-200 px-18" />
            

            <Input required legend=" Senha" type="password" placeholder="Senha" />

            <div className="w-full h-[1px] bg-orange-200 px-18" />

            <Input required legend=" Confrime a senha" type="password" placeholder="mesma senha" />

            <div className="w-full h-[1px] bg-orange-200 px-18" />
            
            <Button type="submit"> Cadastrar </Button> 

            <a href="/" className="text-sm font-semibold text-white-100 mt-10 mb-4 text-center hover:text-orange-100 transition ease-linear">
            Voltar ao login.</a>

        </form>

    


    )
}
