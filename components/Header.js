import Link from "next/link"
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { BsBag } from "react-icons/bs"

const Header = () => {
  return (
    <header className="">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-5 pt-4 lg:px-0 h-full">
        <Link href="/">
          <a className="logo">
            <h1 className="text-3xl leading-4 capitalize w-[130px]">
              da green corner
            </h1>
          </a>
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-end gap-6 text-2xl">
            <BsBag size={21} />
            <AiOutlineHeart />
            <AiOutlineUser />
          </div>
          <div className="hidden gap-2">
            <button className="h-[40px] dark:text-gray-400 text-white whitespace-nowrap rounded-full px-5 max-w-[140px] bg-green-500 text-[15px] dark:bg-transparent">
              Log in
            </button>
            <button  className="h-[40px] text-[15px] dark:text-gray-400 text-slate-500 whitespace-nowrap rounded-full px-5 max-w-[140px] bg-slate-200 dark:bg-transparent">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
