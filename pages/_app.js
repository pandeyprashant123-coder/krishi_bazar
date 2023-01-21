import '@/styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout/Layout'
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
