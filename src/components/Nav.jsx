const Nav = () => {
  return (
    <header className="py-10 xl:mx-64 mx-8">
      <nav className="flex justify-between items-center">
        <a href="/" className="xl:text-3xl text-xl font-montserrat">Menu</a>
        <img className="xl:h-12 xl:w-12 h-9 w-9" src="logo.svg" alt="logo" />
        <a href="/" className="xl:text-3xl text-xl font-montserrat">Locations</a>
      </nav>
    </header>

  )
}

export default Nav