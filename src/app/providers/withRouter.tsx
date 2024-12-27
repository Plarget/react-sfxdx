import type { TComponentFn } from "./types.ts"
import { BrowserRouter } from "react-router"

export const withRouter = (component: TComponentFn) => () => {
  return (
    <BrowserRouter>{component()}</BrowserRouter>
  )
}