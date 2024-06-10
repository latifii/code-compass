"use client";

import { colord } from "colord";
import { tailwindColors } from "../../../../tailwind.config";

type colorBoxType = {
  name: string;
  color: string;
};
function getTextColor(backgroundcolor: string): string {
  return colord(backgroundcolor).isDark() ? "#dddddd" : "#333333";
}
function ColorBox({ name, color }: colorBoxType) {
  return (
    <div
      className="w-80 h-60 flex flex-col items-center justify-center text-center uppercase"
      style={{ backgroundColor: color, color: getTextColor(color) }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
}
function Colors() {
  return (
    <div className="flex flex-wrap justify-center gap-4" dir="ltr" lang="en">
      {Object.entries(tailwindColors).map(([name, color]) => (
        <ColorBox key={name} name={name} color={color} />
      ))}
    </div>
  );
}
export default Colors;
