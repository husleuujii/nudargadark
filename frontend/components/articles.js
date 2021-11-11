import React from "react"
import Card from "./card"
import Featured from "./featured"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div className="flex flex-wrap gap-2 md:flex-nowrap">
      <div className="w-full md:w-2/3">
        {leftArticles.map((article, i) => {
          return <Featured article={article} key={`${article.slug}`} />
        })}
      </div>
      <div className="w-full md:w-1/3">
        {rightArticles.map((article, i) => {
          return <Card article={article} key={`${article.slug}`} />
        })}
      </div>
    </div>
  )
}

export default Articles
