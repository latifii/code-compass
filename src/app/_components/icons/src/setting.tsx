import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconProps } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.9 15.647L5.298 15.861C6.33 16.019 7.067 16.943 6.991 17.984L6.888 19.395C6.858 19.806 7.082 20.193 7.453 20.372L8.487 20.87C8.858 21.049 9.301 20.982 9.604 20.703L10.643 19.743C11.409 19.035 12.591 19.035 13.358 19.743L14.397 20.703C14.7 20.983 15.142 21.049 15.514 20.87L16.55 20.371C16.92 20.193 17.143 19.807 17.113 19.397L17.01 17.984C16.934 16.943 17.671 16.019 18.703 15.861L20.101 15.647C20.508 15.585 20.836 15.28 20.928 14.878L21.183 13.76C21.275 13.358 21.112 12.941 20.772 12.709L19.605 11.91C18.744 11.32 18.481 10.168 19.001 9.26302L19.706 8.03702C19.911 7.68002 19.877 7.23302 19.62 6.91102L18.905 6.01402C18.648 5.69202 18.22 5.55902 17.826 5.68002L16.474 6.09402C15.475 6.40002 14.41 5.88702 14.026 4.91602L13.508 3.60302C13.356 3.21902 12.985 2.96702 12.572 2.96802L11.426 2.97102C11.013 2.97202 10.643 3.22602 10.493 3.61102L9.988 4.90902C9.608 5.88602 8.538 6.40302 7.536 6.09502L6.128 5.66302C5.733 5.54102 5.303 5.67502 5.046 5.99902L4.336 6.89702C4.079 7.22202 4.048 7.67002 4.257 8.02702L4.978 9.25602C5.509 10.162 5.249 11.325 4.383 11.918L3.23 12.708C2.89 12.941 2.727 13.358 2.819 13.759L3.074 14.877C3.165 15.28 3.493 15.585 3.9 15.647V15.647Z"
      />
      <path d="M13.916 10.084C14.974 11.142 14.974 12.858 13.916 13.916C12.858 14.974 11.142 14.974 10.084 13.916C9.026 12.858 9.026 11.142 10.084 10.084C11.142 9.02603 12.858 9.02603 13.916 10.084" />
    </BaseIcon>
  );
}
