import React, { Component } from "react";
import firebase from '../../Firebase';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            dataNascimento: ''
        };
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                var uid = user.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {

                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            dataNascimento: retorno.data().dataNascimento
                        });
                    });
            }
        });

    }

    render(){
        return(
            <div>
                Nome: {this.state.nome} <br/>
                Sobrenome: {this.state.sobrenome} <br/>
                DataNascimento: {this.state.dataNascimento} <br/>
                <div>
                    <a href="./"><button>Voltar</button></a>
                </div>
            </div>
            
        )
    }
}

export default Principal;