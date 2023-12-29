import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#FBFBF2] to-[#847577] mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className=" text-4x1 md:text-6xl font-bold text-black mb-4">
            Winter Sale
          </h1>
          <p className="text-lg md:text-xl text-black mb-2">
            Enjoy discouts on selected items
          </p>
          <p className=" text-2xl md:text-5xl text-yellow-400 font-bold">
            GET 50% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner-image.png"
            fill
            alt="Banner Image"
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
