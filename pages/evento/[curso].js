import { useRouter } from 'next/router';
import MenuAdminEvento from '../components/MenuAdminEvento';
import ReactPlayer from 'react-player'

export default function Curso() {
  const router = useRouter();
  const { curso } = router.query;
  return (
      <section id="administrador" className="section-bg wow fadeInUp m-0 p-0 mt-4 pt-5">
        <div className="container-fluid">
          <div className="row">
            <MenuAdminEvento />
            <div className="col-md-9">
              <div className="row">
                <ReactPlayer 
                  className='react-player'
                  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                  width='100%'
                  height='550px'

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