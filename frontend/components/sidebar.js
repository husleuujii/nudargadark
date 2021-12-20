import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { getStrapiMedia } from "../lib/media"
import Link from "next/link"
// import moment from "moment"
import "moment/locale/mn"
import moment from "moment"
function sidebar({ newList, topList }) {
  moment.locale("mn")
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-light">Эрэлттэй</span>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-light">Шинэ</span>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            {topList.map((article) => (
              <div className="flex py-1 border-b" key={article.id}>
                <div className="w-1/3">
                  <Link as={`/article/${article.slug}`} href="/article/[slug]">
                    <a>
                      <img
                        src={getStrapiMedia(article.image)}
                        className="w-20 h-16 cover"
                        style={{objectFit:"cover"}}
                      />

                    </a>
                  </Link>
                </div>
                <div className="flex flex-col w-2/3">
                  <Link as={`/article/${article.slug}`} href="/article/[slug]">
                    <a>
                      <h2 className="pl-2 text-sm font-light line-clamp-3">
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
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {newList.map((article) => (
              <div className="flex py-1 border-b" key={article.id}>
                <div className="w-1/3">
                  <Link as={`/article/${article.slug}`} href="/article/[slug]">
                    <a>
                      <img
                        src={getStrapiMedia(article.image)}
                        className="w-20 h-16 cover"
                        style={{objectFit:"cover"}}
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col w-2/3">
                  <Link as={`/article/${article.slug}`} href="/article/[slug]">
                    <a>
                      <h2 className="pl-2 text-sm font-light line-clamp-3">
                        {article.title}
                      </h2>
                    </a>
                  </Link>
                  <span className="pl-2 text-xs text-gray-400">
                    {
                      // set this instance to use French
                      moment(article.published_at).startOf("hour").fromNow()
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  )
}

export default sidebar
