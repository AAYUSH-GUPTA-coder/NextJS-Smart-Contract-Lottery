import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
// NotificationProvider allow us to display notification 
import { NotificationProvider } from "web3uikit"

function MyApp({ Component, pageProps }) {
    return (
        // initilize and use Moralis and all it's components
        <MoralisProvider initializeOnMount={false}>
            {/* initializeOnMount = need to hook something with server */}
            {/* // initilize and use NotificationProvider and all it's components */}
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
