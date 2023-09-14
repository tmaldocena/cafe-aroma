const Nav = () => {
  return (
    <header className="py-10 xl:mx-64 mx-32">
      <nav className="flex justify-between items-center">
        <a href="/" className="text-3xl font-montserrat">Menu</a>
        <img src="logo.svg" alt="logo" height={48} width={48} />
        <a href="/" className="text-3xl font-montserrat">Locations</a>
      </nav>
    </header>

  )
}

export default Nav