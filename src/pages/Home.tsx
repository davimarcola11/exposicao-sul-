import { FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <div
      id="container"
      className={isLightMode ? 'light container-center' : 'container-center'}
    >
      <div id="profile">
        <h1>EXPOSIÇÃO 9º ANO REGIÃO SUL</h1>

        <p>@davimarcolazz</p>
      </div>
      <div id="switch" onClick={() => toggleTheme()}>
        <button></button>
        <span></span>
      </div>
      <ul className="home-list">
        <li>
          <Link to="/parana">Paraná</Link>
        </li>
        <li>
          <Link to="/rio-grande-do-sul">Rio Grande do Sul</Link>
        </li>
        <li>
          <Link to="/santa-catarina">Santa Catarina</Link>
        </li>
      </ul>
      <footer>Redes Sociais</footer>

      <div id="social-links">
        <a
          href="https://www.instagram.com/9ano.cenppri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a href="https://github.com/davimarcola11" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
