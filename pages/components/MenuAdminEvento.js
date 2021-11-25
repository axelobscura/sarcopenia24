import Link from 'next/link';
import { PersonCircle, FileEarmark, ListCheck, FileBinaryFill, BrightnessAltHighFill } from 'react-bootstrap-icons';

export default function MenuAdminEvento() {
  return (
    <div className="col-md-3 text-center m-0 p-0">
      <div className="organizador evento">
        <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'250px'}} />
      </div>
      <ul>
        <li>
          <Link href="/oferta-de-cursos"><a><ListCheck className="iconoBoot" /> SALÓN 1 | GERIATRÍA</a></Link>
        </li>
        <li>
          <Link href="/oferta-de-cursos"><a><ListCheck className="iconoBoot" /> SALÓN 2 | GERONTOLOGÍA</a></Link>
        </li>
      </ul>
    </div>
  )
}