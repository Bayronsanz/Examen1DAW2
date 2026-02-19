'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGastoContext } from "./Providers/GastoProvider";

export default function Home() {
  const [usuario, setUsuario]=useState('')
  const [clave, setClave] = useState('')
  const {login, isLogged} = useGastoContext()
  const router = useRouter()

  useEffect(() =>{
    if(isLogged){
      router.push('/presupuesto')
    }
  }, [isLogged, router])

  const Login = () =>{
    if(usuario==='admin' && clave==='admin123'){
      login()
    }else{
      alert('usuario o la clave incorrecta')
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">
      <div className="card p-4 shadow-md">
        <h5 className="text-center mb-4">Inicio de Sesion</h5>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Usuario" value={usuario} onChange={(e) =>setUsuario(e.target.value)}/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Clave" value={clave} onChange={(e) =>setClave(e.target.value)}/>
          </div>
          <button onClick={Login} className="btn btn-primary">Iniciar Sesion</button>
      </div>

    </div>
  );
}
