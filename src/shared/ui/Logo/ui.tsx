import type { TLogo } from "./types"
import type { FC } from "react"
import { Link } from "react-router"
import classNames from "classnames"
import logoImage from "@/shared/assets/images/logo.png"

const Logo: FC<TLogo> = (props) => {
  const {
    className
  } = props;

  return (
    <Link className={classNames(className, "logo")} to="/" aria-label="go to home page">
      <img
        className="logo__image"
        title="to home page"
        src={logoImage}
        alt="sfxdx logo"
        width="149" height="25" loading="lazy"
      />
    </Link>
  )
}

export default Logo