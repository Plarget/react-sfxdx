import {withProviders} from "./providers";
import {Route, Routes} from "react-router";
import Layout from "@/widgets/Layout";
import BackgroundBody from "@/widgets/BackgroundBody";
import "./styles"

const App = () => {
  return (
    <>
      <BackgroundBody/>
      <Routes>
        <Route path="/" element={<Layout/>}>
        </Route>
      </Routes>
    </>
  )
}

export default withProviders(App)
