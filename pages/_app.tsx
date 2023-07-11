import type { AppProps } from 'next/app'
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<div>
                <h1 className='text-cyan-800'>TESTING PAGES DIR!!!</h1>
                <Component {...pageProps} />
            </div>);
}