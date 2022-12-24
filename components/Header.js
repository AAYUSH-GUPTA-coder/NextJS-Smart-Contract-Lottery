import { ConnectButton } from "web3uiKit"

export default function Header() {
    return (
        <div className="border-b-2">
            Decentralized Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
