import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaArrowLeft } from 'react-icons/fa6';

export default function RioGrandeDoSul() {
  const { isLightMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div id="container" className={isLightMode ? 'light' : ''}>
      <header className="header">
        <div className="back-section">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft color={isLightMode ? '#000' : '#fff'} />
          </button>
          <h1 className="header-text">Rio Grande do Sul</h1>
        </div>

        <div id="switch" onClick={() => toggleTheme()}>
          <button></button>
          <span></span>
        </div>
      </header>

      <div className="card">
        <div>
          <h1 className="title-card">
            Principais esportes de aventura no Rio Grande do Sul
          </h1>
          <p className="text-content">
            Os principais esportes de aventura incluem escalada, rapel, rafting,
            trekking, tirolesa, arvorismo, mountain bike, parapente, surf,
            kitesurf e cavalgadas, aproveitando a diversidade geográfica do
            estado.
          </p>
        </div>

        <div>
          <h1 className="title-card">Equipamentos de Segurança</h1>
          <p className="text-content">
            Os equipamentos de Segurança essenciais variam conforme a atividade,
            incluindo capacetes, coletes salva-vidas e luvas. É crucial usar
            EPIs, respeitar o meio ambiente e seguir normas de segurança para
            garantir a proteção durante as atividades.
          </p>
        </div>

        <div>
          <h1 className="title-card">
            Possibilidades de Aventura no Rio Grande do Sul
          </h1>
          <p className="text-content">
            <strong>Caminho dos Cânions:</strong> Oferece trilhas desafiadoras e
            vistas deslumbrantes, ideal para trekking e mountain bike.
          </p>
          <p className="text-content">
            <strong>Rio Jacuí:</strong> Percursos para rafting que variam em
            dificuldade, recomendados para iniciantes e aventureiros
            experientes.
          </p>
        </div>

        <div>
          <h1 className="title-card">Empresas e preços:</h1>
          <p className="text-content">
            <strong>Canyon Adventure:</strong> Rafting e trilhas de R$ 150 a R$
            400, dependendo da atividade.
          </p>
          <p className="text-content">
            <strong>Ecomotion:</strong> Pacotes de ecoturismo a partir de R$
            200, incluindo transporte e guias
          </p>
        </div>

        <div>
          <h1 className="title-card">Dicas de Segurança e Sustentabilidade</h1>
          <p className="text-content">
            É fundamental respeitar as regras locais, praticar o "leave no
            trace" e garantir a segurança de todos os participantes. Além disso,
            o estado oferece diversas opções de pousadas e campings para os
            aventureiros que desejam explorar suas belezas naturais.
          </p>
        </div>
      </div>
    </div>
  );
}
