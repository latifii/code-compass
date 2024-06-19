import React from "react";
import { LoadingProps } from "./loading.types";
import classNames from "classnames";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${variant}`]: variant },
    { [`loading-${type}`]: type },
    { [`${sizeClasses[size]}`]: size }
  );
  return <span className={classes}></span>;
};
