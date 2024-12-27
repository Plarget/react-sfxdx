import type { FC } from "react"
import BackgroundBodyEllipse from "@/widgets/BackgroundBody/ui/BackgroundBodyEllipse";
import "./BackgroundBody.pcss"

const BackgroundBody: FC = () => {



  return (
    <div className="background-body">
      <BackgroundBodyEllipse className="background-body__ellipse background-body__ellipse--1"/>
      <BackgroundBodyEllipse className="background-body__ellipse background-body__ellipse--2"/>
      <BackgroundBodyEllipse className="background-body__ellipse background-body__ellipse--3"/>
      <BackgroundBodyEllipse className="background-body__ellipse background-body__ellipse--4"/>
    </div>
  )
}

export default BackgroundBody