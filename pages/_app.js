import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <comanLayout>
      <Component {...pageProps} />
    </comanLayout>
    </>
  );
}

export default MyApp
