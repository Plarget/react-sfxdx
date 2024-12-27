import type { TWithProviders } from "./types.ts"
import compose from "compose-function"
import { withRouter } from "./withRouter"

export const withProviders: TWithProviders = compose(withRouter)