import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/footer";
import "./formularioFornecedor"

function FormularioEmpresa() {
  
  const [id, setId] = useState('');
  const [cep, setCep] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nome_fantasia, setNome_fantasia] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/empresa",{
      cep,
      cnpj,
      nome_fantasia,
      estado,
    }).then(response => {
      console.log(response);
      // redirecionar para a página de listagem de empresas
      window.location.href = "/empresa";
    }).catch(error => {
      console.error(error);
    });
  };



  
  return (
    <div>
      <Header/>
      <div>
        <div>
            <h1>Nova Empresa</h1>
        </div>
        <div className="form">
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formNomeFantasia">
                    <Form.Label>Nome Fantasia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o nome fantasia"
                      value={nome_fantasia}
                      onChange={(event) => setNome_fantasia(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formEstado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o estado"
                      value={estado}
                      onChange={(event) => setEstado(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formCep">
                    <Form.Label>
                      CEP
                    </Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Digite o CEP"
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    />  
                </Form.Group>

                <Form.Group controlId="formCnpj">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o CNPJ"
                      value={cnpj}
                      onChange={(event) => setCnpj(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                Enviar
                </Button>
                <Button >
                <a href="/empresa">Voltar</a>
                </Button>
            </Form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default FormularioEmpresa;