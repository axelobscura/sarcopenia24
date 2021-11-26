import Link from 'next/link';
import { PersonCircle, FileEarmark, ListCheck, FileBinaryFill, BrightnessAltHighFill } from 'react-bootstrap-icons';

export default function MenuAdmin() {
  return (
    <div className="col-md-3 text-center m-0 p-0">
      <div className="organizador">

      </div>
      <ul>
        <li>
          <Link href="/evento/congreso2021"><a><ListCheck className="iconoBoot" /> CONFERENCIAS</a></Link>
        </li>
        <li>
          <Link href="/patrocinadores"><a><BrightnessAltHighFill className="iconoBoot" /> PATROCINADORES</a></Link>
        </li>
        {/* 
        <li>
          <Link href="/perfil-de-usuario"><a><PersonCircle className="iconoBoot" /> PERFIL DE USUARIO</a></Link>
        </li>
        */}
      </ul>
    </div>
  )
}