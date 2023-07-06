import { useState } from 'react';
import Link from 'next/dist/client/link';
import CardPonente from './components/CarPonente';
import Loader from './components/Loader';

import { usePrograma } from '../lib/swr-hooks';

export default function programa(){
  const [ eldia, setEldia ] = useState("29 DE JUNIO");
  const { programa, isLoadingPrograma } = usePrograma();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [elmomento, setElmomento] = useState('geriatrico');
  if (isLoadingPrograma && !programa) {
    return(
        <Loader/>
    )
  };
  const ofertaPonentesDia1 = programa.filter(prog => prog.dia == '29 JUNIO').map(evento => (
    <CardPonente
        key={evento.id}
        id={evento.id}
        horario={evento.horario}
        dia={evento.dia}
        salon={evento.salon}
        modulo={evento.modulo}
        ponente={evento.ponente}
        tema={evento.tema}
        institucion={evento.institucion}
        especialidad={evento.especialidad}
        elmomento={elmomento}
        bandera={evento.bandera}
        video={evento.video}
    />
  ));
  const ofertaPonentesDia2S1 = programa.filter(prog => prog.dia == '30 JUNIO').map(evento => (
    <CardPonente
        key={evento.id}
        id={evento.id}
        horario={evento.horario}
        dia={evento.dia}
        salon={evento.salon}
        modulo={evento.modulo}
        ponente={evento.ponente}
        tema={evento.tema}
        institucion={evento.institucion}
        especialidad={evento.especialidad}
        elmomento={elmomento}
        bandera={evento.bandera}
        video={evento.video}
    />
  ));
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return(
    <>
    <section id="schedule" className="section-with-bg wow fadeInUp mt-5">

      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2 className="pt-3">Programa de Actividades</h2>
          <p>II SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN FRAGILIDAD Y SARCOPENIA<br/>29 y 30 de JUNIO 2023</p>
          <hr/>
          <div align="center">
            <a href="https://capuletbeta.com/congreso2021/programa.pdf" className="nav-descarga" target="_blank">DESCARGAR PROGRAMA DE ACTIVIDADES EN PDF</a>
          </div>
        </div>

        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab" onClick={() => setEldia('29 DE JUNIO')}>29 DE JUNIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-2" role="tab" data-toggle="tab" onClick={() => setEldia('30 DE JUNIO')}>30 DE JUNIO</a>
          </li>
        </ul>

        <h5 className="text-center font-weight-bold">CONFERENCIAS DEL DÍA {eldia}</h5>

        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

          <div role="tabpanel" className="col-lg-9  tab-pane fade show active" id="day-4">
            <div role="tabpanel" className="col-lg-12 tab-pane fade show active" id="geriatrico-day-4-S1">
              {elmomento === 'geriatrico' ? ofertaPonentesDia4S1 : ofertaPonentesDia4S2}
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}