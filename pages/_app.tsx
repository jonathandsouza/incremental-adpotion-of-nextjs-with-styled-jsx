import type { AppProps } from 'next/app'
import '../styles/tailwind-pages.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<div>
                <Component {...pageProps} />
            </div>);
}