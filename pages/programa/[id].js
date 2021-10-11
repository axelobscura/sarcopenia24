import { useRouter } from 'next/router';

export default function programa() {
  const router = useRouter();
  const { id } = router.query;
  return(
    <section id="administrador" className="section-bg wow fadeInUp m-0 p-0">
      <div className="container-fluid">
        <p>Post: {id}</p>
      </div>

      <style global jsx>{`
          body {
          background: #04091B;
          }
      `}</style>
    </section>
  )
  
}