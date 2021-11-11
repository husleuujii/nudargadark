import Articles from "../../components/articles"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Sidebar from "../../components/sidebar"
import Link from "next/link"
import { getStrapiMedia } from "../../lib/media"
import "moment/locale/mn"
import moment from "moment"

const Category = ({ category, categories, newList, topList }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `Бүх ${category.name} нийтлэлүүд`,
  }
  moment.locale("mn")

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="flex flex-wrap w-full gap-4 lg:flex-nowrap">
        <div className="w-full">
          <div className="flex flex-col">
            <h2 className="items-center py-1 mb-4 mb-5 font-semibold text-center text-gray-100 rounded">
              {category.name}
            </h2>
            <div className="grid grid-cols-1">
              {category.articles.map((article) => (
                <div
                  className="flex my-2 rounded shadow-md"
                  key={`${article.slug}`}
                >
                  <div className="w-1/5">
                    <Link
                      as={`/article/${article.slug}`}
                      href="/article/[slug]"
                    >
                      <a>
                        <img
                          src={getStrapiMedia(article.image)}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="w-full bg-gray-900">
                    <div className="p-2">
                      <p className="text-base font-light text-gray-100">
                        <Link
                          as={`/article/${article.slug}`}
                          href="/article/[slug]"
                        >
                          <a>{article.title}</a>
                        </Link>
                      </p>
                      <p className="text-sm text-gray-400">
                        {article.description}
                      </p>
                      <span className="font-light text-gray-500">
                        {moment(article.published_at).format("lll")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories")

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
  const categories = await fetchAPI("/categories")
  const newList = await fetchAPI("/articles?_sort=views:desc")
  const topList = await fetchAPI("/articles?_sort=published_at:desc")

  return {
    props: { category, categories, newList, topList },
    revalidate: 1,
  }
}

export default Category
