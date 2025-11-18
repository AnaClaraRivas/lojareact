import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";

function Criarconta() {
    return (
        <div className="container-fluid p-0">
            <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`}
            </style>
            <div className="row">
                <div className="col-md-6 col-sm-12 fazerlogin divazul">
                    <h1 className="textobranco textoleft" style={{fontWeight: "700"}}>Já possui uma conta?</h1>

                    <p className="textobranco textoleft">Clique no botão e realize seu login!</p>
                    
                    <Link className="btnbranco textobranco btn" to="/login">
                        Fazer login
                    </Link>

                    <img className="imglogologin" src="/img/logo.png" alt="" />
                </div>

                <div className="col-md-6 col-sm-12 entrar divbranca">
                    <h1 className="textoazul" style={{fontWeight: "700", textAlign: "left"}}>Crie sua conta</h1>
                    <form action="" method="post">

                        <div className="divnome">
                            <img className="imgpessoa" src="/img/email.png" alt=""/>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nome completo</label>
                        </div>
                        <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Seu nome completo" />

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

                            <div className="perfil-toggle" role="group" aria-label="Escolha de perfil">
                                <input type="radio" className="btn-check" name="perfil" id="admin" autoComplete="off" defaultChecked />
                                <label className="btn btn-outline-custom" htmlFor="admin">Administrador</label>

                                <input type="radio" className="btn-check" name="perfil" id="avaliador" autoComplete="off"/>
                                <label className="btn btn-outline-custom" htmlFor="avaliador">Avaliador</label>
                            </div>


                        <input className="btnentrar textobranco btn" type="submit" value="Criar conta" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Criarconta;