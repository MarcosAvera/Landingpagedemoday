import './index.css'
import Logo from './img/Logo.png'
import Video from './img/video.mp4'
import Inovalem from './img/LogoIno.png'
import Visumei from './img/LogoVisu.png'
import Tc from './img/LogoTc.png'
import Code from './img/QRcode.svg'
export function Pagina() {
    return (
        <div className="Pagina">
            <header>
                <nav className="navigation">
                    <div className="Logo">
                        <img className="img" src={Logo} />
                        <a className="Nome" href="#"><span>Um</span>Estilo</a>
                    </div>
                    <div className="Botao">
                        <a href="#">Seja estiloso </a>
                    </div>
                </nav>
            </header>

            <section className="BlocoUm">
                <div>
                    <video className="Video" src={Video} controls loop />
                </div>
                <div className="Login">
                    <a href="#" className="btn">Login</a>
                    <p className ="linhaUm">Faça o login para ingressar
                    </p><p>na nossa plataforma</p>
                </div>
            </section>

            <section className="BlocoDois">
                <div className="txtUm">
                    <p className="tituUm">Quem é a <span>Um</span>Estilo?</p>
                    <p>Somos uma rede de divulgação de MEI`s (Microempreendedores Individuais)</p> <p> do ramo de Estética de rápido consumo<p>com foco em oferecer a visibilidade para empreendedores da periferia.</p></p>
                </div>
                <div className="txtDois">
                    <p className="tituDois">O que nos inspirou?</p>
                    <p>O empreendedorismo no Brasil vem crescendo e gerando empregos e novas fontes de renda aos brasileiros<p>, entretanto,na mesma proporção que se criam novos empreendimentos</p></p><p>são desfeitos alguns empreendimentos por falta de clientes, falta de visibilidade no mercado.</p><p>Nós da Um Estilo  queremos que os empreendedores consigam manter o seu negócio no mercado.</p><p> Queremos que você,  empreendedor, compartilhe seu sonho - seu negócio - com estilo.</p>
                </div>
                <div className="txtTres">
                    <p className="tituTres">Como funcionamos</p>
                    <p>Somos uma plataforma de divulgação baseada em</p><p>vídeos de até 1 minuto, onde o empreendedor divulga o seu trabalho, esses vídeos são de rápido consumo</p><p> pois tem um tempo de duração relativamente curto. Na plataforma existem 2 tipos de usuário: Empreendedor e Cliente.</p><p> Nosso objetivo com o empreendedor é fazer com que ele consiga criar a sua visibilidade no mercado alcançando os clientes com um engajamento.</p><p> Nosso objetivo com o Cliente é fazer com que ele descubra novos serviços e os contrate gerando uma relação de consumo com o empreendedor diretamente da plataforma.</p>
                </div>
            </section>
            <section className = "BlocoParc">
            <div className="Parcerias">
                    <p>Parcerias</p>
                </div>
                <div className="Logomarcas">
                    <div className="Inovalem">
                        <img src={Inovalem} />
                        <p>Inovalem</p>
                    </div>
                    <div className="Visumei">
                        <img src={Visumei} />
                        <p>Visumei</p>
                    </div>
                    <div className="Tc">
                        <img src={Tc} />
                        <p>Fundação T&C</p>
                    </div>
                </div>
            </section>
            <section className ="Footer">
                <div className ="LogoFooter">
                <img className="img" src={Logo} />
                <a className="Nome" href="#"><span>Um</span>Estilo</a>
                <h4>Oportunidade,Visão e Estilo</h4>
                <a className="Linktree" href="https://linktr.ee/umestiloproa">Linktree <span>estiloso</span></a>
                <img className="Code" src={Code} />
                </div>
            </section>
        </div>




    )
}