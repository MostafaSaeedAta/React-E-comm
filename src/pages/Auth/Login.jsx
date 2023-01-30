import React from 'react'
import  './Auth.scss'

function Login() {
  return (
    <div>
     
  <div id="telalogin">

    
    <div className="container-fundo">

      
      <div id="logo-cliente">
        <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo.png" alt=""/>
      </div>

      
      <div className="container-logins">

       
        <div className="login">
          <input type="text" placeholder="Login"/>
          <input type="password" placeholder="Senha"/>
          <div className="flex">
            <p>Redefinir senha</p>
            <p>Criar conta</p>
          </div>
          <div className='w-100 d-flex justify-content-center'>
            <button className="botao-login">Entrar</button>
          </div>
          
        </div>

        
        <div className="autenticacao">
          <div id="google">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt=""/>
          </div>
          <div id="microsoft">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt=""/>
          </div>
        </div>
      </div>

     
      <div id="logo-empresa">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt=""/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login