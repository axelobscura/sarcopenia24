import Link from 'next/link';
import { ListCheck, ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import Chat from './Chat';
import { useRouter } from 'next/router';
import Loader from './Loader';

export default function MenuAdminEvento() {
  const router = useRouter();
  const { tipo } = router.query;
  return (
    <div className="col-md-3 text-center m-0 p-0">
      <div className="organizador evento">
        <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'250px'}} />
      </div>
      <ul>
        <li>
          <Link href="/salon/uno-geriatria">
            <a style={{
            background: tipo === 'geriatria' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 1 | 2 DE DIC. | GERIATRÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/uno-gerontologia">
            <a style={{
            background: tipo === 'gerontologia' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 2 | 2 DE DIC. | GERONTOLOGÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/dos-geriatria">
            <a style={{
            background: tipo === 'geriatria' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 1 | 3 DE DIC. | GERIATRÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/dos-gerontologia">
            <a style={{
            background: tipo === 'gerontologia' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 2 | 3 DE DIC. | GERONTOLOGÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/tres-geriatria">
            <a style={{
            background: tipo === 'geriatria' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 1 | 4 DE DIC. | GERIATRÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/tres-gerontologia">
            <a style={{
            background: tipo === 'gerontologia' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 2 | 4 DE DIC. | GERONTOLOGÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/cuatro-geriatria">
            <a style={{
            background: tipo === 'geriatria' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 1 | 5 DE DIC. | GERIATRÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/cuatro-gerontologia">
            <a style={{
            background: tipo === 'gerontologia' ? '#f82249' : ''
            }}><ArrowRightCircle className="iconoBoot" /> SALÓN 2 | 5 DE DIC. | GERONTOLOGÍA</a>
          </Link>
        </li>
        {/* 
        <li className="lichat">
          <ArrowDownCircle className="iconoBoot" /> CHAT
        </li>
        */}
      </ul>
      {/*<Chat tipo={tipo}/>*/}
    </div>
  )
}