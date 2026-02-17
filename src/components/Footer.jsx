import Navigation from "./Navigation";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__nav">
        <Navigation />
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text">&copy; Vans 2025</p>
      </div>
    </div>
  );
}
