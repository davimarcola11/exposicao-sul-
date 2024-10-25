import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaArrowLeft } from 'react-icons/fa6';

export default function SantaCatarina() {
  const { isLightMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div id="container" className={isLightMode ? 'light' : ''}>
      <header className="header">
        <div className="back-section">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft color={isLightMode ? '#000' : '#fff'} />
          </button>
          <h1 className="header-text">Santa Catarina</h1>
        </div>

        <div id="switch" onClick={() => toggleTheme()}>
          <button></button>
          <span></span>
        </div>
      </header>

      <div className="card">
        <div>
          <h1 className="title-card">
            Possibilidades de Aventura em Santa Catarina
          </h1>
          <p className="text-content">
            Santa Catarina oferece uma diversidade de atividades para os
            aventureiros, como:
          </p>

          <ul className="list-container">
            <li className="list-item">
              <strong>Trilhas:</strong> Explorar trilhas em meio à natureza
              exuberante, como as trilhas da Serra do Tabuleiro ou as trilhas
              costeiras.
            </li>
            <li className="list-item">
              <strong>Canyoning:</strong> Descer cânions com rapel, tirolesa e
              natação em rios cristalinos.
            </li>
            <li className="list-item">
              <strong>Rafting:</strong> Desbravar rios em jangadas infláveis,
              enfrentando corredeiras e paisagens deslumbrantes. Escalada:
              Conquistar picos e rochas, testando seus limites e admirando
              vistas panorâmicas.
            </li>
            <li className="list-item">
              <strong>Mountain bike: </strong> Pedalar por trilhas desafiadoras,
              explorando paisagens diversas.
            </li>
            <li className="list-item">
              <strong>Mergulho:</strong> Descobrir a rica vida marinha em locais
              como a Ilha do Campeche.
            </li>

            <li className="list-item">
              <strong>Voo livre:</strong> Sentir a adrenalina de voar de
              parapente ou asa delta sobre paisagens espetaculares.
            </li>

            <li className="list-item">
              <strong>Stand-up paddle:</strong> Navegar em pé sobre uma prancha,
              explorando rios, lagos e praias.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Equipamentos de Segurança</h1>
          <p className="text-content">
            A segurança é fundamental em qualquer atividade de aventura. É
            essencial utilizar os equipamentos adequados e seguir as orientações
            dos profissionais. Alguns equipamentos indispensáveis incluem:
          </p>

          <ul className="list-container">
            <li className="list-item">
              <strong>Capacete:</strong> Protege a cabeça em caso de quedas ou
              impactos.
            </li>

            <li className="list-item">
              <strong>Colete salva-vidas:</strong> Essencial para atividades
              aquáticas.
            </li>

            <li className="list-item">
              <strong>Tênis de trekking:</strong> Para carregar água, alimentos
              e outros itens essenciais.
            </li>

            <li className="list-item">
              <strong>Mochila:</strong> Proporcionam maior aderência e proteção
              aos pés.
            </li>

            <li className="list-item">
              <strong>Corda:</strong> Utilizada em atividades como rapel e
              escalada. Harness: Equipamento de segurança para escalada e rapel.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Regras de Visitação</h1>
          <p className="text-content">
            Para garantir a preservação dos ambientes naturais e a segurança dos
            visitantes, é importante seguir algumas regras básicas:
          </p>

          <ul className="list-container">
            <li className="list-item">
              <strong>Respeitar a sinalização: </strong> As placas indicam os
              caminhos seguros e as áreas proibidas.
            </li>

            <li className="list-item">
              <strong>Não deixar lixo:</strong> Mantenha os locais limpos e
              preserve a natureza.
            </li>

            <li className="list-item">
              <strong>Não alimentar os animais:</strong> Proteja a fauna local.
              Acampar apenas em locais permitidos: Respeite as áreas de
              preservação ambiental.
            </li>

            <li className="list-item">
              <strong>Contratar guias credenciados:</strong> Garanta maior
              segurança e conhecimento sobre os locais.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Dois Atrativos Naturais </h1>
          <p className="text-content">
            <strong>Cânions da Serra Geral:</strong> Uma das maiores atrações
            naturais de Santa Catarina, com paisagens exuberantes e diversas
            atividades de aventura.
          </p>

          <p className="text-content">
            <strong>Praia do Rosa:</strong> Uma das praias mais charmosas do
            Brasil, com águas cristalinas, dunas e trilhas ecológicas.
          </p>
        </div>

        <div>
          <h1 className="title-card">Uma Atividade Realizada:</h1>
          <p className="text-content">
            Trilha na Serra do Tabuleiro A Serra do Tabuleiro é um dos maiores
            parques estaduais do Brasil e oferece diversas trilhas para todos os
            níveis de dificuldade. Uma das trilhas mais populares é a Trilha da
            Cachoeira do Rio do Boi, que leva a uma belíssima cachoeira com
            piscinas naturais.
          </p>
        </div>

        <div>
          <h1 className="title-card">Mapeamento e Cálculo das Distâncias</h1>
          <p className="text-content">
            Distância da Trilha da Serra do Tabuleiro até a Praia do Rosa é de
            60,8 milhas e a viagem leva 1 hora e 53 minutos.
          </p>

          <p className="text-content">
            A distância da Trilha da Serra do Tabuleiro até os Cânions da Serra
            Geral é de 205 milhas e a viagem leva 5 horas e 21 minutos.
          </p>

          <p className="text-content">
            A distância da Praia do Rosa até os Cânions da Serra Geral é de 154
            milhas e a viagem leva 4 horas e 5 minutos.
          </p>
        </div>
      </div>
    </div>
  );
}
