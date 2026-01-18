interface ImageBannerProps {
  imageUrl: string;
  alt: string;
}

export default function ImageBanner({ imageUrl, alt }: ImageBannerProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
        </div>
      </div>
    </section>
  );
}
