import ArrowClosed from "@/components/arrows/arrowClosed";
import ArrowOpen from "@/components/arrows/arrowOpen";
import FilesSection from "@/components/FilesSection";
import FoldersSection from "@/components/FoldersSection";
import Header from "@/components/header";
import Menu from "@/components/menu";
import New from "@/components/New";

export default function Home() {
  return (
    <div className="h-screen relative flex flex-col bg-[#FFDAB9]">
      <Header />
      <div className="flex h-full">
        <Menu />
        <div className="w-full flex flex-col gap-6 h-full bg-white rounded-tl-[3rem] pl-24 py-10 overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
          <div className="flex gap-2 items-center">
            <div className="bg-[#FFF0E3] rounded-2xl px-2 py-2">
              <h1 className="font-semibold opacity-40 text-4xl">My Cogent</h1>
            </div>

            <div className="opacity-50">
              <ArrowClosed />
            </div>

            <div className="rounded-2xl">
              <h1 className="font-semibold text-4xl">Grade 11 English</h1>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="cursor-pointer flex justify-between items-center gap-1 py-4 px-5 rounded-full bg-[#FFDAB9]">
              <h1 className="font-semibold text-lg">Type</h1>
              <ArrowOpen />
            </div>

            <div className="cursor-pointer flex justify-between items-center gap-1 py-4 px-5 rounded-full bg-[#FFDAB9]">
              <h1 className="font-semibold text-lg">Modified</h1>
              <ArrowOpen />
            </div>

            <div className="cursor-pointer flex justify-between items-center gap-1 py-4 px-5 rounded-full bg-[#FFDAB9]">
              <h1 className="font-semibold text-lg">People</h1>
              <ArrowOpen />
            </div>
          </div>

          <div className="cursor-pointer flex flex-col gap-4 mt-4 ml-2">
            <h1 className="font-bold text-lg">Folders</h1>
            <FoldersSection />
          </div>

          <div className="flex flex-col gap-4 mt-4 ml-2">
            <h1 className="font-bold text-lg">Files</h1>
            <FilesSection />
          </div>
        </div>
      </div>

      <New />
    </div>
  );
}
