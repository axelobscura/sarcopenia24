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
              <p className="mt-3">Su constancia se generará automáticamente con el título elegido de acuerdo al paquete de inscripción contratado.</p>
            </div>
            <hr/>
            <form method="POST" action="#">
              <div className="form-group">
                <input type="text" className="form-control" name="your-name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="your-email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <select id="ticket-type" name="ticket-type" className="form-control">
                  <option value="">-- Select Your Ticket Type --</option>
                  <option value="standard-access">Standard Access</option>
                  <option value="pro-access">Pro Access</option>
                  <option value="premium-access">Premium Access</option>
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