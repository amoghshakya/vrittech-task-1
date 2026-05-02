import { Carousel } from "./ui/carousel";

export function PlaceholderCard({ bg }: { bg: string }) {
  return (
    <Carousel
      style={{
        backgroundColor: bg,
      }}
    >
      <div className="flex items-center justify-center relative min-w-120 min-h-88 px-4">
        <h1 className="text-background! z-25 w-2/5">Placeholder text: {bg}</h1>
      </div>
    </Carousel>
  );
}
