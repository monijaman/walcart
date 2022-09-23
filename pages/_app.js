import { wrapper } from "../redux/store";
import '../styles/globals.css';

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
