import classNames from "classnames";
import { Size } from "../types/size.type";
import { ProgsessProps } from "./progress.type";

const sizeClasses: Record<Size, string> = {
  tiny: "progress-xs",
  small: "progress-sm",
  normal: "progress-md",
  large: "progress-lg",
};

const Progress: React.FC<ProgsessProps> = ({
  className,
  variant = "primary",
  size = "normal",
  value,
}) => {
  const classes = classNames("progress", className, {
    [`progress-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return <progress value={value} max={100} className={classes} />;
};

export default Progress;
