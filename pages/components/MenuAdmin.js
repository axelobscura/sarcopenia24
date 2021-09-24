import Link from 'next/link';
import { PersonCircle, FileEarmark, ListCheck, FileBinaryFill, BrightnessAltHighFill } from 'react-bootstrap-icons';

export default function MenuAdmin() {
  return (
    <div className="col-md-3 text-center m-0 p-0">
      <h3>MENÚ DE USUARIO</h3>
      <ul>
        <li>
          <Link href="/perfil-de-usuario"><a><PersonCircle className="iconoBoot" /> PERFIL DE USUARIO</a></Link>
        </li>
        <li>
          <Link href="/constacias"><a><FileEarmark className="iconoBoot" /> CONSTANCIAS</a></Link>
        </li>
        <li>
          <Link href="/oferta-de-cursos"><a><ListCheck className="iconoBoot" /> OFERTA DE CURSOS</a></Link>
        </li>
        <li>
          <Link href="/documentos"><a><FileBinaryFill className="iconoBoot" /> DOCUMENTOS</a></Link>
        </li>
        <li>
          <Link href="/patrocinadores"><a><BrightnessAltHighFill className="iconoBoot" /> PATROCINADORES</a></Link>
        </li>
      </ul>
    </div>
  )
}