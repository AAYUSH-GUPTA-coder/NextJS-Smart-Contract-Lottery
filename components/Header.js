import { ConnectButton } from "web3uiKit"

export default function Header() {
    return (
        <div>
            Decentralized Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
