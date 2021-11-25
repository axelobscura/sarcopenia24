import { useState } from 'react';
import Link from 'next/dist/client/link';
import CardPonente from './components/CarPonente';
import Loader from './components/Loader';

import { usePrograma } from '../lib/swr-hooks';

export default function programa(){
  const [ eldia, setEldia ] = useState("2 DE DICIEMBRE");
  const { programa, isLoadingPrograma } = usePrograma();
  if (isLoadingPrograma && !programa) {
    return(
        <Loader/>
    )
  };
  const ofertaPonentesDia1 = programa.filter(prog => prog.dia == '2').map(evento => (
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
  const ofertaPonentesDia2S1 = programa.filter(prog => prog.dia == '3' && prog.salon == '1').map(evento => (
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
  const ofertaPonentesDia2S2 = programa.filter(prog => prog.dia == '3' && prog.salon == '2').map(evento => (
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
  const ofertaPonentesDia3S1 = programa.filter(prog => prog.dia == '4' && prog.salon == '1').map(evento => (
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
  const ofertaPonentesDia3S2 = programa.filter(prog => prog.dia == '4' && prog.salon == '2').map(evento => (
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
  const ofertaPonentesDia4S1 = programa.filter(prog => prog.dia == '5' && prog.salon == '1').map(evento => (
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
  const ofertaPonentesDia4S2 = programa.filter(prog => prog.dia == '5' && prog.salon == '2').map(evento => (
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
            <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab" onClick={() => setEldia('2 DE DICIEMBRE')}>2 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-2" role="tab" data-toggle="tab" onClick={() => setEldia('3 DE DICIEMBRE')}>3 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-toggle="tab" onClick={() => setEldia('4 DE DICIEMBRE')}>4 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-4" role="tab" data-toggle="tab" onClick={() => setEldia('5 DE DICIEMBRE')}>5 DE DICIEMBRE</a>
          </li>
        </ul>

        <h3 className="sub-heading d-none">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>

        <h5 className="text-center font-weight-bold">CONFERENCIAS DEL DÍA {eldia}</h5>

        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
            <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a className="nav-link active" href="#geriatrico-day-1-S1" role="tab" data-toggle="tab" style={{
                  'background':'#6a9e00'
                }}>PRE-CONGRESO</a>
              </li>
            </ul>

            <div role="tabpanel" className="col-lg-12 tab-pane fade show active" id="geriatrico-day-1-S1">
              {ofertaPonentesDia1}
            </div>
            <div role="tabpanel" className="col-lg-12 tab-pane fade" id="geriatrico-day-2">

            </div>

          </div>

          <div role="tabpanel" className="col-lg-9 tab-pane fade" id="day-2">

            <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a className="nav-link active" href="#geriatrico-day-2-S1" role="tab" data-toggle="tab" style={{
                  'background':'#6a9e00'
                }}>MÓDULO GERIÁTRICO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gerontologico-day-2-S2" role="tab" data-toggle="tab" style={{
                  'background':'#2c5a00'
                }}>MÓDULO GERONTOLÓGICO</a>
              </li>
            </ul>

            <div role="tabpanel" className="col-lg-12 tab-pane fade show active" id="geriatrico-day-2-S1">
              {ofertaPonentesDia2S1}
            </div>
            <div role="tabpanel" className="col-lg-12 tab-pane fade" id="gerontologico-day-2-S2">
              {ofertaPonentesDia2S2}
            </div>

          </div>

          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

            <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a className="nav-link active" href="#geriatrico-day-3-S1" role="tab" data-toggle="tab" style={{
                  'background':'#6a9e00'
                }}>MÓDULO GERIÁTRICO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#geriatrico-day-3-S2" role="tab" data-toggle="tab" style={{
                  'background':'#2c5a00'
                }}>MÓDULO GERONTOLÓGICO</a>
              </li>
            </ul>

            <div role="tabpanel" className="col-lg-12 tab-pane fade show active" id="geriatrico-day-3-S1">
              {ofertaPonentesDia3S1}
            </div>
            <div role="tabpanel" className="col-lg-12 tab-pane fade" id="gerontologico-day-3-S2">
              {ofertaPonentesDia3S2}
            </div>

          </div>

          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-4">

            <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a className="nav-link active" href="#geriatrico-day-4-S1" role="tab" data-toggle="tab" style={{
                  'background':'#6a9e00'
                }}>MÓDULO GERIÁTRICO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#geriatrico-day-4-S2" role="tab" data-toggle="tab" style={{
                  'background':'#2c5a00'
                }}>MÓDULO GERONTOLÓGICO</a>
              </li>
            </ul>

            <div role="tabpanel" className="col-lg-12 tab-pane fade show active" id="geriatrico-day-4-S1">
              {ofertaPonentesDia4S1}
            </div>
            <div role="tabpanel" className="col-lg-12 tab-pane fade" id="gerontologico-day-4-S2">
              {ofertaPonentesDia4S2}
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  )
}