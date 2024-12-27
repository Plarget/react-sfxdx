import type { SVGAttributes } from "react"

export type TSvgIcon = SVGAttributes<SVGElement> & {
  name: string,
  prefix?: string,
  color?: string,
}

