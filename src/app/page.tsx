import MainSection from "@/Sections/MainSection";
import News from "@/Sections/News";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 p-4 top-0 sm:w-[100%] bg-[#2e2e2e]">
  <div className="rounded-lg shadow-md p-6 gap-6 w-full">
    <Image
      src="/football.png"
      width={100}
      height={100}
      className="w-full h-[250px] object-top rounded-3xl mb-6"
      alt="Football"
      priority
      unoptimized
    />
    <div className="rounded-xl bg-[#222222]">
      <MainSection />
    </div>
  </div>

  <div
    className="bg-[#222222] rounded-lg shadow-md p-6 flex flex-col h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide"
  >
    <News />
  </div>
</div>
  );
}
