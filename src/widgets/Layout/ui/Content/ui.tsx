import type { FC } from "react"
import type { PropsWithChildren } from "react"
import "./Content.pcss"

const Content: FC<PropsWithChildren> = (props) => {
  const {
    children
  } = props

  return (
    <main className="content">
      {children}
    </main>
  )
}

export default Content