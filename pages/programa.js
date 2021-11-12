export default function programa(){
  return(
    <section id="schedule" className="section-with-bg mt-5">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <div align="center">
            <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'250px'}} />
          </div>
          
          <h2 className="pt-3">Programa de Actividades</h2>
          <hr/>
          <p>Actividades del 35<sup>vo</sup> Congreso Internacional AMGG 2021<br/><b>Asociación Mexicana de Gerontología y Geriatría</b></p>
        </div>

        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">2 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">3 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">4 DE DICIEMBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">5 DE DICIEMBRE</a>
          </li>
        </ul>

        <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>

        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

            <div className="row schedule-item">
              <div className="col-md-2"><time>09:30 AM</time></div>
              <div className="col-md-10">
                <h4>Registration</h4>
                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="assets/img/speakers/1.jpg" alt="Brenden Legros" />
                </div>
                <h4>Keynote <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

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
  )
}