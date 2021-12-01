import Link from 'next/link';
import { ListCheck, ArrowRightCircle } from 'react-bootstrap-icons';

export default function MenuAdmin() {
  return (
    <div className="col-md-3 text-center m-0 p-0">
      <div className="organizador evento">
        <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'250px'}} />
      </div>
      <ul>
        <li>
          <Link href="/evento/congreso2021"><a><ArrowRightCircle className="iconoBoot" /> CONFERENCIAS</a></Link>
        </li>
        <li>
          <Link href="/salon/geriatria">
            <a style={{'background':'#6a9e00'}}><ArrowRightCircle className="iconoBoot" /> SALÓN 1 | GERIATRÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/gerontologia">
            <a style={{'background':'#2c5a00'}}><ArrowRightCircle className="iconoBoot" /> SALÓN 2 | GERONTOLOGÍA</a>
          </Link>
        </li>
        {/* 
        <li>
          <Link href="/patrocinadores"><a><BrightnessAltHighFill className="iconoBoot" /> PATROCINADORES</a></Link>
        </li>
        
        <li>
          <Link href="/perfil-de-usuario"><a><PersonCircle className="iconoBoot" /> PERFIL DE USUARIO</a></Link>
        </li>
        */}
      </ul>
    </div>
  )
}