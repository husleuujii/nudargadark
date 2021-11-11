import React from "react"
import Link from "next/link"
import { useContext } from "react"
import { GlobalContext } from "../pages/_app"
function footer({ categories }) {
  const {
    siteName,
    address,
    phone,
    email,
    fb,
    youtube,
    twitter,
    instagram,
    logo,
  } = useContext(GlobalContext)
  return (
    <footer className="bottom-0 text-gray-100 bg-gray-900 body-font">
      <div className="container flex flex-col flex-wrap w-full px-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <Link href="/">
              <a className="font-bold text-gray-900">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${logo[0].url}`}
                  className="w-16 h-12 contain"
                />
              </a>
            </Link>
            
          </a>
          <p className="mt-2 text-sm text-gray-400">{address}</p>
        </div>
        <div className="flex flex-wrap flex-grow text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4">
            <nav className="list-none">
              <li>
                <Link href="/about">
                  <a className="text-white text-gray-400 hover:text-gray-300">Бидний тухай</a>
                </Link>
              </li>
              <li>
                <Link href="/ad">
                  <a className="text-white text-gray-400 hover:text-gray-300">
                    Сурталчилгаа байршуулах
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/term">
                  <a className="text-white text-gray-400 hover:text-gray-300">
                    Үйлчилгээний нөхцөл
                  </a>
                </Link>
              </li>
            </nav>
          </div>

        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container flex flex-col flex-wrap w-full px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-white text-gray-400 sm:text-left">
            © 2021 {siteName}, Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл
            хуулбарлах хориотой.
            <a
              href="https://www.facebook.com/khuslen.huslen.58"
              rel="noopener noreferrer"
              className="ml-1 text-gray-400"
              target="_blank"
            >
              @Developed by Abel
            </a>
          </p>
          <span className="flex justify-center mx-auto mt-2 center sm:justify-start">
            <div className="flex flex-wrap justify-center gap-2">
              {fb && (
                <Link href={fb}>
                  <a target="_blank">
                    <button className="inline-flex items-center p-2 space-x-2 font-semibold text-white bg-blue-500 rounded">
                      <svg
                        className="w-5 h-5 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                  </a>
                </Link>
              )}
              {twitter && (
                <Link href={twitter}>
                  <a target="_blank">
                    <button className="inline-flex items-center p-2 space-x-2 font-semibold text-white bg-blue-400 rounded">
                      <svg
                        className="w-5 h-5 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                  </a>
                </Link>
              )}
              {youtube && (
                <Link href={youtube}>
                  <a target="_blank">
                    <button className="inline-flex items-center p-2 space-x-2 font-semibold text-white bg-red-600 rounded">
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </button>
                  </a>
                </Link>
              )}
            </div>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default footer
