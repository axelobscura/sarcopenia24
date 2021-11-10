var formater = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ModalPayment({paquete}) {
  return (
    <div id="buy-ticket-modal" className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title text-bold text-uppercase"><b>{paquete[0]}</b></h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div align="center">
              <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'350px'}} />
              <h3 className="mt-3 mb-0"><b>2, 3, 4 y 5 de DICIEMBRE, 2021</b></h3>
              <p className="mt-1 mb-2">Su constancia se generará automáticamente con el título elegido de acuerdo al paquete de inscripción contratado.</p>
              <h5 className="m-0 p-0">PRECIO</h5>
              <h3><b>{formater.format(paquete[1])}</b></h3>
            </div>
            <hr/>
            <form method="POST" action="#">
              <div className="form-group">
                <label>Nombre:</label>
                <input type="text" className="form-control" name="nombre" placeholder="Ingrese su nombre" />
              </div>
              <div className="form-group">
                <label>Apellido paterno:</label>
                <input type="text" className="form-control" name="apaterno" placeholder="Ingrese su apellido paterno" />
              </div>
              <div className="form-group">
                <label>Apellido materno:</label>
                <input type="text" className="form-control" name="amaterno" placeholder="Ingrese su apellido materno" />
              </div>
              <div className="form-group">
                <label>Correo electrónico:</label>
                <input type="email" className="form-control" name="email" placeholder="Inrese su email" />
              </div>
              <div className="form-group">
                <label>Título:</label>
                <select id="ticket-type" name="ticket-type" className="form-control">
                  <option value="">-- Seleccione su titulo --</option>
                  <option value="Dra">Dra</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div className="form-group">
                <label>Teléfono:</label>
                <input type="text" className="form-control" name="telefono" placeholder="Ingrese su teléfono" />
              </div>
              <div className="form-group">
                <label>Fecha de nacimiento:</label>
                <input type="date" className="form-control" name="nacimiento" />
              </div>
              <div className="form-group">
                <label>Sexo:</label>
                <select name="sexo" className="form-control">
                  <option value="">-- Seleccione su sexo --</option>
                  <option value="Femenino">F</option>
                  <option value="Masculino">M</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn">Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}