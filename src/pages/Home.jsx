import React from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import '/GerenciamentoEmpresaFornecedor/src/components/header/Header';
import computer3 from "/GerenciamentoEmpresaFornecedor/src/assets/3-computer.png";
import shop1 from "/GerenciamentoEmpresaFornecedor/src/assets/shop 1.png";
import shop2 from "/GerenciamentoEmpresaFornecedor/src/assets/shop 2.png";
import shop3 from "/GerenciamentoEmpresaFornecedor/src/assets/shop 3.png";
import noteD from "/GerenciamentoEmpresaFornecedor/src/assets/noteaberto-desktop.png";
import icon1 from "/GerenciamentoEmpresaFornecedor/src/assets/icon1.png";
import icon2 from "/GerenciamentoEmpresaFornecedor/src/assets/icon2.png";
import icon3 from "/GerenciamentoEmpresaFornecedor/src/assets/icon3.png";
import icon4 from "/GerenciamentoEmpresaFornecedor/src/assets/icon4.png";


export default function Home() {
  return (
<>
<Header/>
            <div className="home">
                <section className="banner-container"></section>
                <section className="top-section">
                    <div className="top-section-txt">
                        <h2 className="top-section-subtitle">Gerenciamento</h2>
                        <h1 className="top-section-title"> Empresa e Fornecedor </h1>

                        <p className="top-section-description">
                            Cadastro de Fornecedores disponivel com filtros por Nome / CPF-CNPJ!  
                        </p>
                    </div>
                
                    <img className="top-section-banner" src={computer3} alt="infocardbanner" />
                </section>

                <section className="top-cards">
                    <div className="top-card123">
                        <img className="top-card-img" src={shop1} alt="card1" />

                        <p className="top-card-txt">
                            Funções Editar e Deletar facéis! 
                        </p>
                    </div>

                    <div className="top-card123">
                        <img className="top-card-img" src={shop2} alt="card2" />

                        <p className="top-card-txt">
                             
                        </p>
                    </div>

                    <div className="top-card123">
                        <img className="top-card-img" src={shop3} alt="card3" />

                        <p className="top-card-txt">
                        Validação de Cep funcionando! 
                        </p>
                    </div>

                </section>

                <section className="bottom-cards">
                    <div className="bottom-card-wrapper">
                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon1} alt="bottom-card-img1" />

                            <p className="bottom-card-txt">
                                Acesso rápido com possibilidade de várias cadastros de empresas e fornecedores.
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon2} alt="bottom-card-img2" />

                            <p className="bottom-card-txt">
                                O pagamento é feito com total segurança no tráfego de dados, tudo com controle do sistema da loja virtual.  
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon3} alt="bottom-card-img3" />

                            <p className="bottom-card-txt">
                             Todos os produtos vão com garantia, e prazo para troca ou devolução de 30 dias.   
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon4} alt="bottom-card-img4" />

                            <p className="bottom-card-txt">
                            Qualquer informação coletada no site, respeita a sua privacidade, solicitamos apenas informações pessoais para fornecer um serviço de qualidade.  
                            </p>

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
          
        </>

   
  )
}