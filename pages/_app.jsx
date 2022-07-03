import "../styles/globals.css"
import Header from "../components/Header"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
