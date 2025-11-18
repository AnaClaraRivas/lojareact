import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container-fluid p-0">
            <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`}
            </style>
            <div className="row">
                <div className="col-md-6 col-sm-12 entrar divbranca">
                    <h1 className="textoazul" style={{fontWeight: "700", textAlign: "left"}}>Faça seu login</h1>
                    <form action="" method="post">
                        <div className="divemail">
                            <img className="imgpessoa" src="/img/email.png" alt=""/>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        </div>
                        <input type="email" className="form-control input" id="exampleFormControlInput1" placeholder="Seu email"/>

                        <div className="divsenha">
                            <img className="imgsenha" src="/img/senha.png" alt=""/>
                            <label htmlFor="inputPassword5" className="form-label textoazul">Senha</label>
                        </div>
                        <input type="password" id="inputPassword5" className="form-control input" aria-describedby="passwordHelpBlock" placeholder="Sua senha"/>

                        <div className="lembrarsenha">
                            <input type="checkbox" className="form-check-input" id="remember"/>
                            <label class="form-check-label textoazul" htmlFor="remember">Lembrar senha</label>
                        </div>

                        <div className="esqueceusenha">
                            <a className="textoazul" href="#">Esqueceu a senha?</a>
                        </div>
                        
                        <input className="btnentrar textobranco btn" type="submit" value="Entrar" />
                    </form>
                </div>

                <div className="col-md-6 col-sm-12 criarconta divazul">
                    <h1 className="textobranco textoleft" style={{fontWeight: "700"}}>Ainda não tem uma conta?</h1>

                    <p className="textobranco textoleft">Crie uma conta e faça suas avaliações!</p>

                    <Link className="btnbranco textobranco btn" to="/criarconta">
                        Criar conta
                    </Link>
                    <Link to="/inicial">Ir para a página inicial</Link>

                    <img className="imglogologin" src="/img/logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;