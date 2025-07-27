import { AnyARecord } from "node:dns";

export type ButtonProps = {
  onClick: () => any | Promise<AnyARecord>;
  label: string;
};
