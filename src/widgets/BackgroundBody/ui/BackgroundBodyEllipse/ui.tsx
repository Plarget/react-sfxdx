import type {TBackgroundBodyEllipse} from "./types.ts";
import type {FC} from "react"
import {useEffect, useState} from "react"
import {motion} from "framer-motion";
import classNames from "classnames";
import "./BackgroundBodyEllipse.pcss"
import getRandomInt from "@/shared/utils/getRandomInt";

const BackgroundBodyEllipse: FC<TBackgroundBodyEllipse> = (props) => {
  const {
    className
  } = props

  const [pos, setPos] = useState({ x: 0, y: 0 });


  useEffect(() => {
    setPos({
      x: getRandomInt(-200,200),
      y: getRandomInt(-150,150),
    });
    const interval = setInterval(() => {
      setPos({
        x: getRandomInt(-200,200),
        y: getRandomInt(-150,150),
      });
    }, 5000);
    return () => clearInterval(interval);

  }, []);

  return (
    <motion.div
      className={classNames(className, "background-body-ellipse")}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ duration: 5, ease: 'linear' }}


    />
  )
}

export default BackgroundBodyEllipse