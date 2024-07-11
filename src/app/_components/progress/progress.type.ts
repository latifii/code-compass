import { ComponentBase } from "../types/component-base.type";

export type ProgsessProps = Omit<ComponentBase, "isDisabled"> & {
  value: number;
};
