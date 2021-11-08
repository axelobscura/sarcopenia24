import { useContext } from 'react';
import UserContext from '../../UserContext';

export default function Patrocinadores(props) {
  const { usuario } = useContext(UserContext);
  return (
    <section id="supporters" class="section-with-bg">

      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Sponsors</h2>
        </div>

        <div class="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="https://capuletbeta.com/nutricion/images/Avicola.jpeg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="https://capuletbeta.com/nutricion2021/images/logo-abbot.png" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="https://capuletbeta.com/nutricion/images/logo-amsa.png" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="https://capuletbeta.com/nutricion/images/logo-angeles.png" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="https://capuletbeta.com/nutricion/images/Fresenius.jpeg" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="https://capuletbeta.com/nutricion/images/Fresubin.png" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets/img/supporters/7.png" class="img-fluid" alt=""/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src="assets/img/supporters/8.png" class="img-fluid" alt=""/>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
