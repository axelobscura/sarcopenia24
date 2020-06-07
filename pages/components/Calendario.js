import { useContext } from 'react';
import UserContext from '../components/UserContext';
import 'isomorphic-fetch';

export default function Calendario(props) {
    const { usuario } = useContext(UserContext);
    return (
        <section id="schedule" className="section-with-bg">
            <div className="container wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="section-header">
                    <h2>Calendario de Actividades<br />{usuario}</h2>
                    <p>Aquí puede consultar el calendario de actividades de nuestro congreso 2020</p>
                </div>

                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">
                            2 de Noviembre de 2020
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">
                            3 de Noviembre de 2020
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">
                            4 de Noviembre de 2020
                        </a>
                    </li>
                </ul>
            </div>
            <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>
            <div className="tab-content row justify-content-center">
                <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

                    <div class="row schedule-item">
                        <div class="col-md-2"><time>09:30 AM</time></div>
                        <div class="col-md-10">
                            <h4>Registro del evento</h4>
                            <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                        </div>
                    </div>

                    <div class="row schedule-item">
                        <div class="col-md-2"><time>10:00 AM</time></div>
                        <div class="col-md-10">
                            <div class="speaker">
                                <img src="assets/img/speakers/1.jpg" alt="Brenden Legros" />
                            </div>
                            <h4>Dr. Juan García <span>Laboratorios Mexicanos</span></h4>
                            <p>Facere provident incidunt quos voluptas.</p>
                        </div>
                    </div>

                </div>
                <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-2">

                    <div class="row schedule-item">
                        <div class="col-md-2"><time>10:00 AM</time></div>
                        <div class="col-md-10">
                            <div class="speaker">
                                <img src="assets/img/speakers/1.jpg" alt="Brenden Legros" />
                            </div>
                            <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                            <p>Facere provident incidunt quos voluptas.</p>
                        </div>
                    </div>

                </div>

                <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-3">

                    <div class="row schedule-item">
                        <div class="col-md-2"><time>10:00 AM</time></div>
                        <div class="col-md-10">
                            <div class="speaker">
                                <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe" />
                            </div>
                            <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                            <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

Calendario.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json();
    console.log('chihuhauha');
    return { title: json.title }
}