import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import { Figtree } from '@next/font/google';

const googleFont = Figtree({
  weight: '400',
  subsets: ['latin'],
})


const supportedChainIds = [4, 80001]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }:{Component:any,pageProps:any}){
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
       <main className={`app ${googleFont.className}`}>
      <Component {...pageProps} />
      </main>
    </ThirdwebWeb3Provider>
  )
}

export default MyApp