import type {TConnectWallet} from "./types.ts";
import {FC, useEffect} from "react";
import {useState} from "react"
import Button from "@/shared/ui/Button";
import classNames from "classnames";
import SvgIcon from "@/shared/ui/SvgIcon";
import IconButton from "@/shared/ui/IconButton";
import connectServices from "@/shared/services/connectServices.ts";
import {AMOY_POLYGON_PARAMS} from "@/shared/constants/server.ts";
import "./ConnectWallet.pcss"

const ConnectWallet: FC<TConnectWallet> = (props) => {
  const {
    className,
  } = props

  const [account, setAccount] = useState<null | string>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const onAccountChanged = (accounts: string[]) => {
      setAccount(accounts[0] || null);
    }
    const onChainChanged = (chain: string) => {
      if (chain !== AMOY_POLYGON_PARAMS.chainId) location.reload()
    }
    if (account !== null) {
      window.ethereum.on('accountsChanged', onAccountChanged);
      window.ethereum.on('chainChanged', onChainChanged);
    }
    return () => {
      if (account !== null) {
        window.ethereum.off('accountsChanged', onAccountChanged);
        window.ethereum.off('chainChanged', onChainChanged);
      }
    }
  }, [account])


  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') return alert('MetaMask не установлен!');
    setIsConnecting(true);

    connectServices.connectMetamask()
      .then((address) => {
        setAccount(address);
      })
      .catch(() => {
        alert('Ошибка при подключении кошелька:');
      })
      .finally(() => {
        setIsConnecting(false);
      })
  }

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