import { useParams } from "react-router";
import KuulaComponent from "@/components/shared/Kuula/KuulaComponent";
import { LOCALES_KUULA } from "@/apps/foro4/data/locales-kuula";

export default function DetalleLocalRecorrido360() {
  const { slug } = useParams();
  const KUULA_ID = LOCALES_KUULA[slug];
  if (!KUULA_ID) return null;

  return (
    <div className="flex w-full h-full justify-center items-center">
      <KuulaComponent
        src={`https://kuula.co/share/collection/${KUULA_ID}?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0`}
      />
    </div>
  );
}
