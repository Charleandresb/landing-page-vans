import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__list">
        <a href="#" className="navigation__link">
          Compras
          <ChevronDown alt="" className="navigation__arrow" />
          <input type="checkbox" className="navigation__check" />
        </a>

        <div className="navigation__content">
          <ul className="navigation__submenu">
            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Hombre
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Mujer
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Niño
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Personalizar
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Novedades
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Outlet
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="navigation__list">
        <a href="#" className="navigation__link">
          Iconos
          <ChevronDown alt="" className="navigation__arrow" />
          <input type="checkbox" className="navigation__check" />
        </a>

        <div className="navigation__content">
          <ul className="navigation__submenu">
            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Old Skool
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Authentic
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Sk8-Hi
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Slip-On
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="navigation__list">
        <a href="#" className="navigation__link">
          Deportes
          <ChevronDown alt="" className="navigation__arrow" />
          <input type="checkbox" className="navigation__check" />
        </a>

        <div className="navigation__content">
          <ul className="navigation__submenu">
            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Skate
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                BMX
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Surf
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Snow
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="navigation__list">
        <a href="#" className="navigation__link">
          Brand
          <ChevronDown alt="" className="navigation__arrow" />
          <input type="checkbox" className="navigation__check" />
        </a>

        <div className="navigation__content">
          <ul className="navigation__submenu">
            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Sobre nosotros
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Noticias
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Trabaja con nosotros
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Sostenibilidad
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Vegan
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="navigation__list">
        <a href="#" className="navigation__link">
          Pedidos
          <ChevronDown alt="" className="navigation__arrow" />
          <input type="checkbox" className="navigation__check" />
        </a>

        <div className="navigation__content">
          <ul className="navigation__submenu">
            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Rastrea o devuelve un pedido
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Envíos
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Devoluciones
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="navigation__list">
        <a href="#" className="navigation__link">
          Atención al cliente
          <ChevronDown alt="" className="navigation__arrow" />
          <input type="checkbox" className="navigation__check" />
        </a>

        <div className="navigation__content">
          <ul className="navigation__submenu">
            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Contacta con nosotros
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Tabla de tallas
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                FAQ
              </Link>
            </li>

            <li className="navigation__li">
              <Link href="#" to="#" className="navigation__sublink">
                Descuento de estudiante
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
