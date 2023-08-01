import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import store from "../store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer limit={1} autoClose={2000} />
      </Layout>
    </Provider>
  );
}
