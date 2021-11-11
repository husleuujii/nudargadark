import { useRouter } from "next/router"
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Link from "next/link"
import { getStrapiMedia } from "../lib/media"
export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const categories = await fetchAPI("/categories")
  const search = await fetchAPI(`/articles?_q=${query.q}`)
  // Pass data to the page via props
  return {
    props: {
      search,
      categories,
    },
  }
}

export default function Search({ search, categories }) {
  const router = useRouter()
  const query = router.query

  const seo = {
    metaTitle: "Хайлт",
  }
  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="grid grid-cols-1 gap-4 px-8 my-5 md:px-0 md:grid-cols-3 md:grid">
        {search &&
          search.map((project, key) => {
            return (
              <Link as={`/article/${project.slug}`} href="/article/[slug]">
                <a>
                  <img src={getStrapiMedia(project.image)}  className="w-full h-56 cover"/>
                  <p>{project.title}</p>
                </a>
              </Link>
            )
          })}
      </div>
      {search.length === 0 && (
        <div className="flex items-center content-center justify-center w-full my-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 pr-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          "{query.q}"" түлхүүрт илэрц олдсонгүй.
        </div>
      )}
    </Layout>
  )
}
