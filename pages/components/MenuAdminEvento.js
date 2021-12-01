import Link from 'next/link';
import { ListCheck, PersonCircle, ArrowDownCircle } from 'react-bootstrap-icons';
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
          <Link href="/salon/geriatria">
            <a style={{
            background: tipo === 'geriatria' ? '#f82249' : ''
            }}><ListCheck className="iconoBoot" /> SALÓN 1 | GERIATRÍA</a>
          </Link>
        </li>
        <li>
          <Link href="/salon/gerontologia">
            <a style={{
            background: tipo === 'gerontologia' ? '#f82249' : ''
            }}><ListCheck className="iconoBoot" /> SALÓN 2 | GERONTOLOGÍA</a>
          </Link>
        </li>
        <li>
          <a><ArrowDownCircle className="iconoBoot" /> CHAT</a>
        </li>
      </ul>
      <Chat/>
    </div>
  )
}