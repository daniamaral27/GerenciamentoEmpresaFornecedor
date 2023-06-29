import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/footer";

function FormularioFornecedor() {
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [cnpj_cpf, setCnpj_cpf] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [id_empresa, setId_empresa] = useState("");
  const [tipo_pessoa, setTipo_pessoa] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/fornecedor", {
      nome,
      cep,
      cnpj_cpf,
      data_nascimento,
      email,
      rg,
      id_empresa,
      tipo_pessoa,
    }).then(response => {
      console.log(response);
      // redirecionar para a página de listagem de fornecedores
      window.location.href = "/fornecedor";
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <Header/>
      <div>
        <div>
          <div>
            <h1>
              Novo Fornecedor
            </h1>
          </div>
          <div className="form">
              <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o nome"
                      value={nome}
                      onChange={(event) => setNome(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formCnpjCpf">
                    <Form.Label>CNPJ/CPF</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o CNPJ/CPF"
                      value={cnpj_cpf}
                      onChange={(event) => setCnpj_cpf(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formRg">
                    <Form.Label>RG</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o RG"
                      value={rg}
                      onChange={(event) => setRg(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formDataNascimento">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite a data de nascimento"
                      value={data_nascimento}
                      onChange={(event) => setData_nascimento(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Digite o email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o CEP"
                      value={cep}
                      onChange={(event) => setCep(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formIdEmpresa">
                    <Form.Label>ID da Empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o ID da empresa"
                      value={id_empresa}
                      onChange={(event) => setId_empresa(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formTipoPessoa">
                    <Form.Label>Tipo de Pessoa</Form.Label>
                    <Form.Control
                      as="select"
                      value={tipo_pessoa}
                      onChange={(event) => setTipo_pessoa(event.target.value)}
                    >
                      <option value="">Selecione</option>
                      <option value="fisica">Física</option>
                      <option value="juridica">Jurídica</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formSubmit">
                      <Button type="submit">
                        Salvar
                      </Button>
                      <Button >   
                        <a href="/fornecedor">Voltar</a>
                      </Button>
                  </Form.Group>
              </Form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default FormularioFornecedor;