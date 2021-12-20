import React from "react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import NextImage from "./image"
import "swiper/css"
import "swiper/css/pagination"
import SwiperCore, { Pagination } from "swiper"
import moment from "moment"
import "moment/locale/mn"

import { getStrapiMedia } from "../lib/media"
SwiperCore.use([Pagination])

const catArticle = ({ articles }) => {
  moment.locale("mn")

  return articles.map((article) => {
    return (
      <div className="flex py-1 border-b" key={article.id}>
        <div className="w-1/3">
          <Link as={`/article/${article.slug}`} href="/article/[slug]">
            <a>
              {article.image && (
                <img
                  src={getStrapiMedia(article.image.formats.thumbnail)}
                  className="w-full h-16 cover"
                  style={{ objectFit: "cover" }}
                />
              )}
            </a>
          </Link>
        </div>
        <div className="flex flex-col w-2/3">
          <Link as={`/article/${article.slug}`} href="/article/[slug]">
            <a>
              <h2 className="pl-2 text-sm text-gray-100 line-clamp-3">
                {article.title}
              </h2>
            </a>
          </Link>
          <span className="pl-2 text-xs text-gray-400">
            {
              // moment(article.published_at).startOf("day").fromNow()
              moment(article.published_at).startOf("hour").fromNow()
            }
          </span>
        </div>
      </div>
    )
  })
}

export default catArticle
