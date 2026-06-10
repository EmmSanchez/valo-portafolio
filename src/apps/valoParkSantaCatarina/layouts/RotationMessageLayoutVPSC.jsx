import { Outlet } from "react-router";
import useIsPortrait from "@/hooks/useIsPortrait";
import RotationMessageVPSC from "../components/RotationMessageVPSC";

export default function RotationMessageLayoutVPSC() {
  const { isPortrait } = useIsPortrait();

  return (
    <>
      <>
        {isPortrait ? (
          <>
            <RotationMessageVPSC />
          </>
        ) : (
          <Outlet />
        )}
      </>
    </>
  );
}
