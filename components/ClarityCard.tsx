import Image from "next/image";
import { Carousel } from "./ui/carousel";

export function ClarityCard({ bg }: { bg: string }) {
  return (
    <Carousel style={{ backgroundColor: bg }}>
      <div className="relative min-w-120 min-h-88">
        <h1 className="text-background! text-xl z-25 absolute w-1/3 top-1/4 -translate-y-1/2 right-5 drop-shadow-2xl">
          Clarity unlocked&mdash;stickers, sips, and skills all in one go!
        </h1>
        <Image
          src="/images/clarity-body.png"
          alt="A person who seems to be clarified"
          height={200}
          width={300}
          className="absolute object-cover bottom-0 left-0"
        />
        <Image
          src="/images/wow.png"
          alt="wow"
          height={100}
          width={100}
          className="absolute top-1/2 left-6/10 drop-shadow-2xl"
        />
        <Image
          src="/images/wow.png"
          alt="wow"
          height={100}
          width={100}
          className="absolute top-8 left-1/9 drop-shadow-2xl"
          style={{
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </Carousel>
  );
}
