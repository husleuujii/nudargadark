import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children, categories, seo }) => (
  <div className="flex flex-col h-screen">
    <Nav categories={categories} />
    <main className="flex-1 pt-5 bg-black md:px-0">
      <div className="container w-full px-5">{children}</div>
    </main>
    <Footer categories={categories} />
  </div>
)

export default Layout
