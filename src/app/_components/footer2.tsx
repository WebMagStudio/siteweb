import Logo from "./logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between">
      <div>
        <Logo src="/logo.png" width={73} height={66} alt="Logo Marine Magnin" />
      </div>
      <div className="text-sm text-white">
        <h3 className="font-bold">Services</h3>
        <ul>
          <li>
            {" "}
            <Link href="/services/sites-web-et-app">Sites web et app</Link>
          </li>
          <li>
            {" "}
            <Link href="/services/strategie-digitale">Stratégie digitale</Link>
          </li>
          <li>
            {" "}
            <Link href="/services/maintenance">Maintenance</Link>
          </li>
        </ul>
      </div>
      <div className="text-sm text-white">
        <h3 className="font-bold">Liens utiles</h3>
        <ul>
          <li>
            {" "}
            <Link href="#">Mentions légales</Link>
          </li>
          <li>
            {" "}
            <Link href="#">Politique de confidentialité</Link>
          </li>
        </ul>
      </div>
      <div className="text-sm text-white">
        <h3 className="font-bold">Contact</h3>
        <ul>
          <li>
            {" "}
            <Link href="#">Prendre RDV</Link>
          </li>
          <li>
            {" "}
            <Link href="marine.magnin73@gmail.com">
              marine.magnin73@gmail.com
            </Link>
          </li>
          <li>
            {" "}
            <Link href="tel:+33670455984">06.70.45.59.84</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
