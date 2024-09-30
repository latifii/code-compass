import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconProps } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.3639C14.8493 21.8787 9.1508 21.8787 5.6361 18.3639C2.12138 14.8492 2.12138 9.15074 5.6361 5.63604C9.15082 2.12132 14.8493 2.12132 18.364 5.63604"/><path fillRule="evenodd" clipRule="evenodd" d="M12.625 15.125H8.25C7.56 15.125 7 14.565 7 13.875V10.125C7 9.435 7.56 8.875 8.25 8.875H12.625C13.315 8.875 13.875 9.435 13.875 10.125V13.875C13.875 14.565 13.315 15.125 12.625 15.125Z"/><path d="M13.875 12.6099L15.983 14.3069C16.392 14.6359 17 14.3449 17 13.8199V10.1799C17 9.65493 16.392 9.36393 15.983 9.69293L13.875 11.3899"/>
    </BaseIcon>
  );
}