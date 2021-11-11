import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import moment from "moment"
import "moment/locale/mn"
import Sidebar from "../../components/sidebar"
import { useRouter } from "next/router"
import ShareButton from "../../components/share"
import axios from "axios"
import { useState } from "react"

const Article = ({ article, categories, topList, newList }) => {
  const [comment, setComment] = useState()
  const [username, setUsername] = useState()
  const [description, setDescription] = useState()
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }
  moment.locale("mn")

  const router = useRouter()

  const sendComment = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/comments`, {
        username: "Зочин",
        description: description,
        article: article.id,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div id="fb-root"></div>
      <div className="flex flex-wrap w-full gap-4 lg:flex-nowrap ">
        <div className="w-full p-2 rounded">
          <div>
            <h1 className="text-2xl text-gray-100 ">{article.title}</h1>
            <div className="flex items-center justify-between w-full my-2">
              <div className="font-light text-gray-400">
                {moment(article.published_at).calendar()}
              </div>
              <ShareButton
                url={`https://zaraal.mn/article/${router.query.slug}`}
              />
            </div>
          </div>
          <div className="uk-section">
            <div className="">
              <NextImage image={article.image} />
              <div className="my-2" />
              <div
                className="w-full text-gray-200 my-7"
                style={{
                  textAlign: "justify",
                  lineHeight: 1.5,
                  fontSize: " .9em",
                  fontWeight: 300,
                  fontFamily: "Arial,helvetica neue,Helvetica,sans-serif",
                }}
              >
                <ReactMarkdown source={article.content} escapeHtml={false} />
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <div>
                  {article.author.picture && (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={getStrapiMedia(article.author.picture)}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="font-light text-gray-100">
                    Нийтэлсэн {article.author.name}
                  </p>
                  <p className="flex items-center gap-2 text-gray-100">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    {article.views}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full mx-8 mx-auto mt-3 mb-4 border-t">
            <form
              className="w-full max-w-xl px-4 pt-2 rounded"
              onSubmit={sendComment}
            >
              <div className="flex flex-wrap mb-6 -mx-3">
                <h2 className="px-4 pt-3 pb-2 text-lg text-gray-100">
                  Сэтгэгдэл бичих
                </h2>
                <div className="w-full px-3 mt-2 mb-2 lg:w-full">
                  <textarea
                    className="w-full h-20 px-3 py-2 font-medium leading-normal placeholder-gray-100 bg-gray-600 rounded resize-none focus:outline-none focus:bg-white"
                    name={description}
                    placeholder="Сэтгэгдэлээ бичнэ үү"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start w-full px-3 lg:w-full">
                  <div className="flex items-start w-full px-2 mr-auto text-gray-100">
                    <svg
                      fill="none"
                      className="w-5 h-5 mr-1 text-gray-600"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="pt-px text-xs lg:text-sm">
                      Та сэтгэгдэл бичихдээ хууль зүйн болон ёс суртахууныг
                      баримтална уу. Ёс бус сэтгэгдлийг админ устгах эрхтэй.
                    </p>
                  </div>
                  <div className="-mr-1">
                    <button
                      type="submit"
                      className="px-4 py-1 mt-3 mr-1 font-medium tracking-wide text-gray-100 bg-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-100"
                    >
                      Илгээх
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex flex-col p-3">
              <div className="my-4 font-bold">Сэтгэгдэлүүд</div>
              {article.comments &&
                article.comments.map((comment) => (
                  <div className="flex items-center dark:bg-gray-800">
                    <div className="flex max-w-lg p-2 antialiased text-black dark:bg-gray-800 dark:text-gray-200">
                    
                      <div>
                        <div className="bg-gray-600 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                          <div className="text-sm font-semibold leading-relaxed">
                            {comment.username}
                          </div>
                          <div className="leading-snug text-gray-100 text-normal md:leading-normal">
                            {comment.description}
                          </div>
                        </div>
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

export async function getServerSideProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")
  const topList = await fetchAPI("/articles?_sort=views:desc")
  const newList = await fetchAPI("/articles?_sort=published_at:desc")

  return {
    props: {
      article: articles[0],
      categories,
      topList,
      newList,
    },
  }
}

// export async function getStaticPaths() {
//   const articles = await fetchAPI("/articles")

//   return {
//     paths: articles.map((article) => ({
//       params: {
//         slug: article.slug,
//       },
//     })),
//     fallback: false,
//   }
// }

export default Article
