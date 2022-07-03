import Link from "next/link"

const Header = () => {
  return (
    <header className="h-20 bg-red-500 text-white">
      <div className="max-w-4xl bg-red-400 mx-auto flex items-center justify-between px-5 lg:px-0 h-full">
        <Link href="/">
          <a className="logo">
            <h1 className="text-3xl leading-4 capitalize w-[130px]">
              da green corner
            </h1>
          </a>
        </Link>
        <div>
          <div>icons</div>
          <div>buttons</div>
        </div>
      </div>
    </header>
  )
}
export default Header
