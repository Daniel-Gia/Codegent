import Header from "@/components/header";
import Menu from "@/components/menu";
import { Varela_Round } from "next/font/google";

const varelaRound = Varela_Round(
  { 
      subsets: ["latin"],
      variable: '--font-varelaRound',
      weight: "400",
  }
)

type Props = {
    children: React.ReactNode
}

const Layout = ({ children}: Props) => {
  return (
    <div className="h-screen relative flex flex-col bg-[#FFDAB9]">
      <Header />
      <div className="flex h-full">
        <Menu />
        <div className="w-full flex flex-col gap-6 h-full bg-white rounded-tl-[3rem] pl-24 pt-10 overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
            {children}
        </div>
      </div>

      <div className='absolute right-20 bottom-10 cursor-pointer flex gap-2 justify-between items-center text-nowrap px-6 py-4 rounded-xl bg-[#FFF0E3]'>
        <div><h1 className={`text-6xl ${varelaRound.variable} font-varelaRound`}>+</h1></div>
        <h1 className='font-medium text-[1.3rem]'>New</h1>
      </div>
    </div>
  )
}

export default Layout