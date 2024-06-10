import { ReactNode } from "react";
type StudentType = {
  children: ReactNode;
};
export default function StudentLayout({ children }: StudentType) {
  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center items-center"></aside>
      <main>{children}</main>
    </>
  );
}
