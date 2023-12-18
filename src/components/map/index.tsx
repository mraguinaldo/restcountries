/* eslint-disable @next/next/no-img-element */
import { PropsType } from "./interface";

export const ActiveMap = ({ src }: PropsType) => {
  return (
    <div>
      <img src={src} alt="" width={490} height={490} />
    </div>
  );
};
