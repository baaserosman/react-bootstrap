import logo from "../img/react-bootstrap.svg";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        <img src={logo} alt="" />
        Copyright by Bascher {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
