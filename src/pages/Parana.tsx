import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaArrowLeft } from 'react-icons/fa6';

export default function Parana() {
  const { isLightMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div id="container" className={isLightMode ? 'light' : ''}>
      <header className="header">
        <div className="back-section">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft color={isLightMode ? '#000' : '#fff'} />
          </button>
          <h1 className="header-text">Paraná</h1>
        </div>

        <div id="switch" onClick={() => toggleTheme()}>
          <button></button>
          <span></span>
        </div>
      </header>

      <div className="card">
        <div>
          <h1 className="title-card">Canoagem em Foz do Iguaçu - PR</h1>
          <ul className="list-container">
            <li className="list-item">
              Destino ideal: Foz do Iguaçu oferece uma experiência única para
              praticantes de esportes aquáticos, cercada pela exuberante
              natureza das Cataratas.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Principais locais de prática:</h1>
          <ul className="list-container">
            <li className="list-item">
              Rio Iguaçu: Percursos tranquilos e desafiadores. Nas proximidades
              das Cataratas, a prática é recomendada para experientes.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Empresas e preços:</h1>
          <ul className="list-container">
            <li className="list-item">
              Macuco Safari: Passeios de canoagem de R$ 200 a R$ 300.
            </li>
            <li className="list-item">
              Ecomotion: Preços de R$ 150 a R$ 250, com pacotes ecológicos.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Equipamentos de segurança essenciais:</h1>
          <ul className="list-container">
            <li className="list-item">
              Colete salva-vidas, capacete, remo adequado, calçados de proteção.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Ciclismo (Montain bike) no Paraná</h1>
          <p className="text-content">
            Equipamentos: Sapatilhas MTB, joelheiras, cotoveleiras, capacete e
            luvas
          </p>
        </div>

        <div>
          <h1 className="title-card">Lugares para praticar:</h1>
          <ul className="list-container">
            <li className="list-item">Curitiba (e região ao redor)</li>
            <li className="list-item">Estrada da graciosa</li>
            <li className="list-item">Campos gerais</li>
          </ul>
        </div>

        <div>
          <h1 className="title-card">Orçamento:</h1>
          <p className="text-content">
            O orçamento pode variar conforme o equipamento e o nível de proteção
            desejado, bicicletas específicas podem custas de R$2.500,00 à
            R$10.000,00
          </p>
        </div>
      </div>
    </div>
  );
}
