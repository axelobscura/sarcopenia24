import Link from 'next/dist/client/link';
import Patrocinadores from './components/Patrocinadores';
import CardPonente from './components/CarPonente';
import Loader from './components/Loader';

import { usePrograma } from '../lib/swr-hooks';

export default function programa(){
  const { programa, isLoadingPrograma } = usePrograma();
  if (isLoadingPrograma && !programa) {
    return(
        <Loader/>
    )
  };
  const ofertaPonentes = programa.map(evento => (
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
    />
  ));
  return(
    <>
    <section id="schedule" className="section-with-bg wow fadeInUp mt-5">

      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <div align="center">
            <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'250px'}} />
          </div>
          <h2 className="pt-3">Programa de Actividades</h2>
          <hr/>
          <p>35<sup>vo</sup> Congreso Internacional AMGG 2021<br/><b>Asociación Mexicana de Gerontología y Geriatría</b></p>
        </div>

        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">2 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <Link href="#day-2"><a className="nav-link" role="tab" data-toggle="tab">3 DE DICIEMBRE</a></Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">4 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">5 DE DICIEMBRE</a>
          </li>
        </ul>

        <h3 className="sub-heading d-none">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>

        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
            {ofertaPonentes}
          </div>

          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">
            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/1.jpg" alt="Brenden Legros"/>
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>
          </div>

          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">
            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>
            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Patrocinadores />
    </>
  )
}