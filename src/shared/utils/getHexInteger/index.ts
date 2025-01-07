import type {TGetHexInteger} from "./type.ts";

const getHexInteger: TGetHexInteger = (string) => {
  return '0x' + string.toString(16);
}

export default getHexInteger