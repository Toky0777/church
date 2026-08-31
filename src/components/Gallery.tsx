import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={
            index === 0
              ? "col-span-2 aspect-[16/10] overflow-hidden bg-sand sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full"
              : "aspect-square overflow-hidden bg-sand"
          }
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={640}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
