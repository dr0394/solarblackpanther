interface ImageBannerProps {
  imageUrl: string;
  alt: string;
}

export default function ImageBanner({ imageUrl, alt }: ImageBannerProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      </div>
    </section>
  );
}
