import useIsPortrait from "@/hooks/useIsPortrait";
import { Outlet } from "react-router";
import RotationMessageForo4 from "../components/RotationMessageForo4";

export default function RotationMessageLayout() {
  const { isPortrait } = useIsPortrait();

  return (
    <>
      {isPortrait ? (
        <>
          <RotationMessageForo4 />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
