import type { FC } from "react"
import type { TSvgIcon } from "./types.ts"

const SvgIcon: FC<TSvgIcon> = (props) => {
  const {
    name,
    prefix = "icon",
    color,
    ...rest
  } = props

  const symbolId = `#${prefix}-${name}`

  return (
    <svg  {...rest} aria-hidden="true">
      <use href={symbolId} fill={color}/>
    </svg>
  )
}

export default SvgIcon