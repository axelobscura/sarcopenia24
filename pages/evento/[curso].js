import { useRouter } from 'next/router';
import MenuAdminEvento from '../components/MenuAdminEvento';
import ReactPlayer from 'react-player';
import Patrocinadores from '../components/Patrocinadores';

export default function Curso() {
  const router = useRouter();
  const { curso } = router.query;
  return (
      <section id="administrador" className="section-bg wow fadeInUp m-0 p-0 mt-4 pt-5">
        <div className="container-fluid">
          <div className="row vh-80">
            <MenuAdminEvento />
            <div className="col-md-9 vh-80">
              <div className="row vh-100">
                <ReactPlayer 
                  className='react-player'
                  url='https://www.youtube.com/watch?v=FhRKmIeRQj8gv'
                  width='100%'
                  height='100vh'
                  config={{
                    youtube: {
                      playerVars: { showinfo: 0 }
                    }
                  }}
                />
              </div>
            </div>
          </div>
          
        </div>
        
        <style global jsx>{`
                  body {
                  background: #04091B;
                  }
              `}</style>
      </section>
  )
}