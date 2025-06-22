import "./globals.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className={`flex wall relative`}>
      <Image
        src="/walls.svg"
        alt="A scalable graphic"
        fill
        className="object-contain object-bottom"
      />
    </div>
  );
}
