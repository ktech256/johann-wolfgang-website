import Image from "next/image";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ImagePlaceholder({
  src,
  alt,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-amber-500/20 bg-zinc-900/60 shadow-[0_0_40px_rgba(255,202,128,0.12)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
