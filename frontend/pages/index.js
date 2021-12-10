import React from "react"
import Articles from "../components/articles"
import { getStrapiMedia } from "../lib/media"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import dynamic from "next/dynamic"
import Sidebar from "../components/sidebar"
const CategoryArticle = dynamic(
  () => import("../components/category_article"),
  { ssr: false }
)

const Home = ({
  articles,
  categories,
  homepage,
  ulstur,
  niigem,
  sensatsi,
  topList,
  newList,
  ad1,
  delhii,
  ediinzasag,
  sport,
}) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      {/* {ad1 &&  <img className="my-2" src={getStrapiMedia(ad1.ad1)}/>} */}
      <div className="flex flex-col flex-wrap w-full gap-4 lg:flex-nowrap">
        <Articles articles={articles} />
        <div className="">
              <div className="grid grid-cols-1 gap-3 my-10 md:grid-cols-3 ">
                <div>
                  <h2 className="items-center py-1 mb-4 text-xl font-semibold text-gray-100 border-b-2 border-red-600 ">
                    Улс төр
                  </h2>
                  <section class="flex flex-wrap mx-auto">
                    <CategoryArticle articles={ulstur} />
                  </section>
                </div>
                <div>
                  <h2 className="items-center py-1 mb-4 mb-5 text-xl font-semibold text-gray-100 border-b-2 border-red-600 ">
                    Нийгэм
                  </h2>

                  <section class="flex flex-wrap mx-auto">
                    <CategoryArticle articles={niigem} />
                  </section>
                </div>
                <div>
                  <h2 className="items-center py-1 mb-4 text-xl font-semibold text-gray-100 border-b-2 border-red-600 ">
                  Сэнсаци
                  </h2>
                  <section class="flex flex-wrap mx-auto">
                    <CategoryArticle articles={sensatsi} />
                  </section>
                </div>
              </div>
              {ad1 && <img className="my-2" src={getStrapiMedia(ad1.ad1)} />}
              <div className="grid grid-cols-1 gap-3 my-10 md:grid-cols-3 ">
                <div>
                  <h2 className="py-1 mb-4 text-xl font-semibold text-gray-100 border-b-2 border-red-600 text-gray-items-center ">
                 
Эдийн засаг
                  </h2>
                  <section class="flex flex-wrap mx-auto">
                    <CategoryArticle articles={ediinzasag} />
                  </section>
                </div>
                <div>
                  <h2 className="items-center py-1 mb-4 text-xl font-semibold text-gray-100 border-b-2 border-red-600 ">
                  
                  Дэлхий
                  </h2>
                  <section class="flex flex-wrap mx-auto">
                    <CategoryArticle articles={delhii} />
                  </section>
                </div>
                <div>
                  <h2 className="items-center py-1 mb-4 text-xl font-semibold text-gray-100 border-b-2 border-red-600 ">
                  Спорт
                  </h2>
                  <section class="flex flex-wrap mx-auto">
                    <CategoryArticle articles={sport} />
                  </section>
                </div>
              </div>
            </div>

      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articles,
    categories,
    homepage,
    ulstur,
    niigem,
    sensatsi,
    topList,
    newList,
    ad1,
    ediinzasag,
    delhii,
    sport,
  ] = await Promise.all([
    fetchAPI("/articles?_limit=3&featured=true"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/articles?_limit=3&_category=2&_sort=published_at:desc"),
    fetchAPI("/articles?_limit=3&_category=3&_sort=published_at:desc"),
    fetchAPI("/articles?_limit=3&_category=7&_sort=published_at:desc"),
    fetchAPI("/articles?_sort=views:desc&_limit=10"),
    fetchAPI("/articles?_sort=published_at:desc&_limit=10"),
    fetchAPI("/ad-1"),
    fetchAPI("/articles?_limit=3&_category=5&_sort=published_at:desc"),
    fetchAPI("/articles?_limit=3&_category=6&_sort=published_at:desc"),
    fetchAPI("/articles?_limit=3&_category=4&_sort=published_at:desc"),
  ])

  return {
    props: {
      articles,
      categories,
      homepage,
      ulstur,
      niigem,
      sensatsi,
      topList,
      newList,
      ad1,
      ediinzasag,
      delhii,
      sport,
    },
    revalidate: 1,
  }
}

export default Home
