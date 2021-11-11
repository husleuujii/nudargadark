import React from "react"

import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Ad = ({ ad , categories, homepage}) => {
  console.log(ad);
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="flex flex-col w-full gap-4 md:flex-nowrap">
        <h1 className="text-xl font-bold"> {ad.title}</h1>
        <ReactMarkdown source={ad.ad} escapeHtml={false} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [ad, categories, homepage] = await Promise.all([
    fetchAPI("/ad"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { ad, categories, homepage },
    revalidate: 1,
  }
}

export default Ad
