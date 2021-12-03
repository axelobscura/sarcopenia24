import Link from 'next/link';
import { ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';

export default function MenuAdmin() {
  return (
    <div className="col-md-3 text-center m-0 p-0">
      <div className="organizador evento">
        <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'250px'}} />
      </div>
      <ul>
        <li>
          <Link href="/salon/geriatria">
            <a class="menuadminu"><ArrowRightCircle className="iconoBoot" /> SALÓN 1 | GERIATRÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/gerontologia">
            <a class="menuadmind"><ArrowRightCircle className="iconoBoot" /> SALÓN 2 | GERONTOLOGÍA</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}