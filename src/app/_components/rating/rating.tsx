import { IconStar } from "../icons/icons";
import { Size } from "../types/size.type";
import { RatingProps } from "./rating.types";

const sizeClasses: Record<Size, number> = {
  tiny: 14,
  small: 18,
  normal: 24,
  large: 30,
};

const Rating: React.FC<RatingProps> = ({
  rate,
  className,
  size = "normal",
  variant = "warning",
  lengthRate = 5,
}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: lengthRate }, (_, index) => (
        <IconStar
          key={`star-${index}`}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          fill={rate > index ? `var(--color-${variant})` : ""}
          color={rate > index ? `var(--color-${variant})` : "currentColor"}
        />
      ))}
    </div>
  );
};

export default Rating;
