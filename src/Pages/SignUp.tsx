import { useState } from "react";

import { Input } from "../components/input"

import { Button } from "../components/buttom"

import { EnvelopeIcon, LockIcon, UserIcon } from "@phosphor-icons/react";

export function SignUp(){
  const [userName, setuserName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmmpassword, setconfirmPassword] = useState ("")
  const [isLoading, setisLoadin] = useState (false)       
  
  
  return (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log(email, password, userName, confirmmpassword);
    }}
    className="w-full flex flex-col gap-2"
  >
            <Input required legend="Nome" type="text" placeholder="Nome que deseja utilizar" 
             onChange={(e) => setuserName(e.target.value)} className="pl-10" icon={<UserIcon size={18} />}/>
           
            <div className="w-full h-[1px] bg-orange-200 px-18" 
            />

             <Input required legend="E-mail" type="email" placeholder="Seu CT-mail" 
              onChange={(e) => setEmail(e.target.value)} className="pl-10" icon={<EnvelopeIcon size={18} />}/>
           
            <div className="w-full h-[1px] bg-orange-200 px-18" />
            

            <Input required legend=" Senha" type="password" placeholder="123456" 
             onChange={(e) => setPassword(e.target.value)} className="pl-10" icon={<LockIcon size={18} />}/>

            <div className="w-full h-[1px] bg-orange-200 px-18" />

            <Input required legend=" Confrime a senha" type="password" placeholder="123456" 
             onChange={(e) => setconfirmPassword(e.target.value)}  className="pl-10" icon={<LockIcon size={18} />}/>

            <div className="w-full h-[1px] bg-orange-200 px-18" />
            
            <Button type="submit" isLoading={isLoading}> Cadastrar </Button> 

            <a href="/" className="text-sm font-semibold text-white-100 mt-10 mb-4 text-center hover:text-orange-100 transition ease-linear">
            Voltar ao login.</a>

        </form>

    


    )
}
