import { FaFacebookSquare, FaLinkedinIn, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://t.me/Rummancpa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/rumman-mahfuz3333/"
              target="_blank"
               rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedinIn size={25} />{" "}
            </a>
            <a
              href="https://www.facebook.com/rumman.mahfuz.2024/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaFacebookSquare size={25} />{" "}
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by FooDSee LTD.
          </p>
        </aside>
      </footer>
     
    </div>
  );
};

export default Footer;
