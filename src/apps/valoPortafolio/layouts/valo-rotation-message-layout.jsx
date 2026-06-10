import RotationMessage from "@/apps/valoPortafolio/components/RotationMessage/rotation-message";
import useIsPortrait from "@/hooks/useIsPortrait";
import { Outlet } from "react-router";

export default function RotationMessageLayout() {
  const { isPortrait } = useIsPortrait();

  return (
    <>
      {isPortrait ? (
        <>
          <RotationMessage />
        </>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}
