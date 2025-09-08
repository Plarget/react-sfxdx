import type { TIconButton } from "./types"
import type { FC } from "react"
import classNames from "classnames"
import "./IconButton.pcss"

const IconButton: FC<TIconButton> = (props) => {
  const {
    className,
    children,
    type = "button",
    ...rest
  } = props

  console.log(children)
  return (
    <button
      className={classNames(className, "icon-button")}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton
