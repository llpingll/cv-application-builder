/* eslint-disable react/react-in-jsx-scope */
import "../style.css";

function Footer() {
  return (
    <footer>
      <p>
        {`||Ping|| © ${new Date().getFullYear()} `}
        <a href="https://github.com/llpingll" aria-label="gitlogo">
          <i className="fa-brands fa-github" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
