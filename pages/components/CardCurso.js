import Link from 'next/link';
import { ArrowRight } from 'react-bootstrap-icons';

export default function CardCurso({id,imagen,titulo,fecha,link}) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body admin">
          <div className="capsulaimg">
            <img src={imagen} alt={titulo} title={titulo} className="adminCard" />
          </div>
          <h5 className="card-title text-muted text-uppercase text-center">{titulo}</h5>
          <h6 className="card-price text-center">{fecha}</h6>
          <hr />
          <div className="text-center">
            <Link href={{
              pathname: '/programa',
              query: { id },
            }}>
              <button type="button" className="btn cardCurso" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access">
                VER PROGRAMA <ArrowRight/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};