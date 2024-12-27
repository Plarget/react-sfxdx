import type {FC} from "react"
import Logo from "@/shared/ui/Logo";
import ConnectWallet from "@/features/ConnectWallet";
import "./Header.pcss"



const Header: FC = () => {

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo"/>
        <ConnectWallet className="header__connect"/>
      </div>
    </header>
  )
}

export default Header