import React, { Component, useState } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import firebase from '../../Firebase';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };

    this.acessar = this.acessar.bind(this);
  }

  async acessar(){
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then(() => {
      window.location.href = "./principal";
    })
    .catch((error) => {
      alert("Usuário não cadastrado");
    });
  }

  render() {
    return (
      <div className="login-form">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="E-mail" onChange={e => this.setState({email:e.target.value})} />
        </div>
        <div>
          <input type="password" placeholder="Senha" onChange={e => this.setState({senha:e.target.value})} />    
        </div>
        <div>
          <button onClick={this.acessar}>Acessar</button>
        </div>   
        <div>
          <button onClick={() => window.location.href = "/cadastro"}>Cadastrar</button>
        </div>  
      </div>
    );
  
   }
}

export default LoginForm;