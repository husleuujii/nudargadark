import React, { useState, useCallback } from "react"
import Link from "next/link"
import { useContext } from "react"
import { useRouter } from "next/router"
import { StyledOffCanvas, Menu, Overlay } from "styled-off-canvas"
import { GlobalContext } from "../pages/_app"
import { getStrapiMedia } from "../lib/media"
const Nav = ({ categories }) => {
  const [queryName, setQueryName] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const search = useCallback(
    (e) => {
      e.preventDefault()
      router.push({
        pathname: `/search`,
        query: { q: queryName },
      })
    },
    [queryName]
  )

  const { phone, email, fb, youtube, twitter, logo } = useContext(GlobalContext)

  return (
    <StyledOffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <header className="z-50 flex flex-col w-full py-2 mx-auto bg-black shadow-md lg:py-0 lg:px-0">
      
        <div className="py-3 lg:bg-gray-900">
          <div className="container flex flex-col flex-wrap items-center justify-between w-full gap-5 px-0 py-1 ">
            <Link href="/">
              <a className="flex font-bold text-gray-900">
                <img
                  // src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${logo[0].url}`}
                  src="/logo.png"
                  className="w-28 contain"
                />
              </a>
            </Link>
            <ul className="flex justify-between hidden w-full gap-3 overflow-auto lg:flex">
              <li className="font-bold text-gray-300 rounded hover:text-gray-100">
                <Link href="/">
                  <a>НҮҮР</a>
                </Link>
              </li>
              {categories.map((category) => {
                return (
                  <li
                    key={category.id}
                    className="font-bold text-gray-300 rounded hover:text-gray-100"
                  >
                    <Link
                      as={`/category/${category.slug}`}
                      href="/category/[slug]"
                    >
                      <a className="">{category.name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>


            <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <Menu>
              <ul className="flex flex-col block lg:hidden ">
                <li
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 text-xl border-b rounded hover:bg-gray-400 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <a>Хаах</a>
                </li>
                <li
                  className={
                    router.pathname === "/"
                      ? " px-3 py-2 text-xl border-b rounded bg-gray-300 text-white"
                      : "px-3 py-2 text-xl border-b rounded hover:bg-gray-500 hover:text-white"
                  }
                >
                  <Link href="/">
                    <a>НҮҮР</a>
                  </Link>
                </li>
                {categories.map((category) => {
                  return (
                    <li
                      key={category.id}
                      className="px-3 py-2 text-xl border-b rounded hover:bg-gray-400 hover:text-white"
                    >
                      <Link
                        as={`/category/${category.slug}`}
                        href="/category/[slug]"
                      >
                        <a className="">{category.name}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Menu>
          </div>
        </div>
      </header>
      <Overlay />
    </StyledOffCanvas>
  )
}

export default Nav
