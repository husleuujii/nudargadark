import React from "react"
import Link from "next/link"
import NextImage from "./image"
import { getStrapiMedia } from "../lib/media"
import moment from "moment"
import "moment/locale/mn"
const Featured = ({ article }) => {
  moment.locale("mn")
  console.log(article)
  return (
    <div
      key={article.slug}
      className="relative w-full mx-auto mb-4 md:mb-0"
      style={{ height: "24em" }}
    >
      <Link as={`/article/${article.slug}`} href="/article/[slug]">
        <a>
          <div
            className="absolute bottom-0 left-0 z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.image.url}`}
            className="absolute top-0 left-0 z-0 object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 z-20 p-4">
            <a className="inline-flex items-center justify-center px-4 py-1 mb-2 text-xs text-gray-200 bg-black">
              {article.category.name}
            </a>
            <h2 className="text-3xl font-semibold leading-tight text-gray-100">
              {article.title}
            </h2>
            <div className="flex mt-3">
              <div>
                <p className="text-xs font-semibold text-gray-400">
                  {" "}
                  {moment(article.published_at).calendar()}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Featured
