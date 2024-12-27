import type {TGetRandomInt} from "./type.ts";

const getRandomInt: TGetRandomInt = (min, max)=>  {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default getRandomInt