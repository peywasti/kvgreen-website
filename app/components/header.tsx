export default function Header() {
  return(
    <header className="flex justify-between items-center bg-gray-950 text-white p-3">
          <div className="logo">KV.Greeen</div>
          <nav className="flex gap-2">
            <a href="/">خانه</a>
            <a href="/about">درباره</a>
          </nav>
        </header>
  )
}