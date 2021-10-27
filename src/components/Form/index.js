import {Component} from 'react';
import './style.css'
import'../Mock'

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {name: "", lastname:"", expertise: "", email: "", expertises: []}
    }

    handleChange = (event) => {

        const {value, name} = event.target /*Desconstrução do código para simplificar */

        this.setState({[name]: value}) /*colchete para pegar uma varível dinâmica */
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.checkValidity(); /*para chamar a checagem programatica do html5 */
        console.log('handleSubmit');
    }

    async componentDidMount(){
        const result = await fetch("/api/expertises");
        const data = await result.jason();
        this.setState({expertises: data.expertises})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Digite um nome"
                    required/>
                </label>
                <label>
                    Sobrenome:
                    <input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    placeholder="Digite um sobrenome"></input>
                </label>
                <label>
                    E-mail:
                    <input
                     type="email"
                     name="email"
                     value={this.state.email}
                     onChange={this.handleChange}
                     placeholder="example@site.com"
                     pattern=".+@.+\..+"/>
                </label>
                <label>
                    Especialidade:
                    <select name="expertise" value={this.state.expertise}>
                        <option value="" selected disabled>{/*para desabilitar a seleção da opção, ela aparece, mas não pode ser selecionada */}
                            Selecione...
                        </option>
                        {this.state.expertises.map(expertise => <option value={expertise}>{expertise}</option>)}
                        {/* ^^ Dinamizando o option com uso de Moke, dados externos  <option value="React Developer">React Developer</option>
                        <option value="Java Developer">Java Developer</option>*/}
                    </select>
                </label>
            </form>
        )
    }
}

export default Form;