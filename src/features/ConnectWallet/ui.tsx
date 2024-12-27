import type {TConnectWallet} from "./types.ts";
import type {FC} from "react";
import {useState} from "react"
import Button from "@/shared/ui/Button";
import classNames from "classnames";
import {BrowserProvider} from "ethers"
import SvgIcon from "@/shared/ui/SvgIcon";
import IconButton from "@/shared/ui/IconButton";
import "./ConnectWallet.pcss"

const AMOY_POLYGON_PARAMS = {
  chainId: '0x13882', // замените на реальный chainId в 16-ричном формате
  chainName: 'Polygon Amoy',
  nativeCurrency: {
    name: 'POL',
    symbol: 'POL',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-amoy.polygon.technology'],
  blockExplorerUrls: ['https://amoy.polygonscan.com'],
};

const ConnectWallet: FC<TConnectWallet> = (props) => {
  const {
    className,
  } = props

  const [account, setAccount] = useState<null | string>(null);
  const [isConnecting, setIsConnecting] = useState(false);


  const isNotExistChainError = (error: unknown) => {
    if (typeof error !== 'object' || !error) return false;

    if( !('code' in error) ) return false;

    return error.code === 4902
  }

  // По хорошему не должна быть тут, а так же упрощена
  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') return alert('MetaMask не установлен!');

    setIsConnecting(true);

    try {
      await window.ethereum.request({method: 'eth_requestAccounts'});

      const provider = new BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.then((sign) => sign.getAddress());

      const {chainId} = await provider.getNetwork();
      const hexChainId = '0x' + chainId.toString(16);

      if (hexChainId.toLowerCase() !== AMOY_POLYGON_PARAMS.chainId.toLowerCase()) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: AMOY_POLYGON_PARAMS.chainId}],
          });
        } catch (switchError) {
          if (isNotExistChainError(switchError)) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [AMOY_POLYGON_PARAMS],
            });
          } else {
            throw Error()
          }
        }
      }
      setAccount(address);

      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });
      window.ethereum.on('chainChanged', (chain: string) => {
      if (chain !== AMOY_POLYGON_PARAMS.chainId) location.reload()
      });
    } catch {
      alert('Ошибка при подключении кошелька:');
    } finally {
      setIsConnecting(false);
    }
  };

  const copyWallet = () => {
    navigator.clipboard.writeText(account || "")
  }

  const hasAccount = account != null
  const textWallet = hasAccount && `${account.slice(0, 8)}...${account.slice(-4)}`

  return (
    <div className={classNames(className, "connect-wallet")}>
      {hasAccount ? (
        <div className="connect-wallet__profile">
          <SvgIcon className="connect-wallet__profile-metamask" name="metamask"/>
          <span className="connect-wallet__profile-wallet">{textWallet}</span>
          <IconButton className="connect-wallet__profile-copy" aria-label="copy wallet" onClick={copyWallet}>
            <span className="connect-wallet__profile-copy-wrapper" title="copy wallet">
              <SvgIcon className="connect-wallet__profile-copy-icon" name="copy"/>
            </span>
          </IconButton>
        </div>
      ) : (
        <Button className="connect-wallet__button" onClick={connectWallet} disabled={isConnecting}>
          Connect Wallet
        </Button>
      )}
    </div>
  )
}

export default ConnectWallet