import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconProps } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="3.5779" cy="3.2879" r="2.7487"/>
    </BaseIcon>
  );
}