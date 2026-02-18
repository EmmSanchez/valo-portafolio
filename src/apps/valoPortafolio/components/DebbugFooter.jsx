import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function DebbugComponent() {
  const values = useContext(AppContext);

  return (
    <div className="absolute top-5 right-5 px-4 py-3 text-2xl rounded-2xl bg-black/90">
      {JSON.stringify(values, null, 2)}
    </div>
  );
}
