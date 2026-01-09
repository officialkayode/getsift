import { cn } from "@/lib/utils";

interface ImageSlotProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  slotName: string;
  className?: string;
}

export const ImageSlot = ({
  src,
  alt,
  aspectRatio = "16/9",
  slotName,
  className,
}: ImageSlotProps) => {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  };

  return (
    <>
      {/* IMAGE SLOT: {slotName} - {src} */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200",
          aspectClasses[aspectRatio],
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </>
  );
};
