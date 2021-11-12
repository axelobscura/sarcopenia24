export default function CardPonente({horario, dia, salon, modulo, ponente, tema, institucion}) {
  return (
    <div className="row schedule-item">
      <div className="col-md-2"><time>{horario}</time></div>
      <div className="col-md-10">
        <div className="speaker">
          <img src="assets/img/speakers/1.jpg" alt="Brenden Legros" />
        </div>
        <h4>{tema}<br/><span>{ponente} | {institucion}</span></h4>
        <p>Día: {dia} de Diciembre, 2021 - Salón: {salon} - Especialidad: {modulo}</p>
      </div>
    </div>
  )
}