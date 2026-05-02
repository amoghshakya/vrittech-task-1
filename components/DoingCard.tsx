import Image from "next/image";
import { Carousel } from "./ui/carousel";

export function DoingCard({ bg }: { bg: string }) {
  return (
    <Carousel
      style={{
        backgroundColor: bg,
      }}
    >
      <div className="flex items-center justify-center relative min-w-120 min-h-88 px-4">
        <h1 className="text-background! z-25 w-2/5 absolute top-1/4 left-15 -translate-y-1/2">
          Focused faces&mdash;learning mode: ON!
        </h1>
        <Image
          src="/images/doing-body.png"
          alt="Two people working alongside each other on a project"
          width={450}
          height={200}
          className="object-cover absolute bottom-0 -right-20"
        />
      </div>
      <div className="flex items-center justify-center relative min-w-130 min-h-88 px-4 mx-8">
        <h1 className="text-background! z-25 absolute top-1/4 -translate-y-1/2">
          Laptops, lessons, and a whole lot of growth!
        </h1>
        <Image
          src="/images/doing-body-2.png"
          alt="A group of people working together on a project"
          height={200}
          width={550}
          className="object-cover absolute bottom-0 right-1/2 translate-x-1/2"
        />
      </div>
    </Carousel>
  );
}
