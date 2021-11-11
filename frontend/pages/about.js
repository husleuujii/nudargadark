import React from "react"

import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const about = ({ about , categories, homepage}) => {
  
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="flex flex-col w-full gap-4 md:flex-nowrap">
        <h1 className="text-xl font-bold"> {about.title}</h1>
        <p>{about.description}</p>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [about, categories, homepage] = await Promise.all([
    fetchAPI("/about"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { about, categories, homepage },
    revalidate: 1,
  }
}

export default about
