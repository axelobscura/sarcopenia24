import Patrocinadores from './Patrocinadores';
import { useRouter } from 'next/router';

export default function Footer() {
    const router = useRouter();

    console.log(router.pathname);

    return (
        <footer id="footer">
            {router.pathname === "/patrocinadores" ? '' : <Patrocinadores />}
            <div className="container">
                <div className="copyright">
                    &copy; 1983 - 2024 <strong>AMGG MÉXICO</strong>. Todos Los Derechos Reservados.
                </div>
            </div>
        </footer>
    )
}