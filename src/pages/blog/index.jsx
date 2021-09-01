import React from 'react'
import "./style.scss"

const Blog = () => {
  return (
    <div className="blog__mainContainer">
      <div className="row1__mainContainer">
        <div className="row1__bigCard"></div>
        <div className="row1__medCardContainer">
          <div className="row1__medCard"></div>
          <div className="row1__medCard"></div>
        </div>
      </div>
      <div className="row2__mainContainer">
        <div className="row2__popularStoriesContainer">
          <div className="sectionTitleDiv">
            <div className="sectionTitle">
              Popular Stories
            </div>
            <div className="dash"></div>
          </div>
          <div className="popularStories__content">
            <div className="row2__smallCardContainer">
              <div className="dBlogContainer2"></div>
              <div className="dBlogContainer2"></div>
              <div className="dBlogContainer2"></div>
              <div className="dBlogContainer2"></div>
            </div>
            <div className="row2__bigCard"></div>
          </div>
        </div>
        <div className="row2__mostReadsContainer">
          <div className="sectionTitleDiv">
            <div className="sectionTitle">
              Most Read
            </div>
            <div className="dash"></div>
          </div>
          <div className="row2__smallCardContainer">
            <div className="dBlogContainer2"></div>
            <div className="dBlogContainer2"></div>
            <div className="dBlogContainer2"></div>
            <div className="dBlogContainer2"></div>
          </div>
        </div>
      </div>
      <div className="row3__mainContainer">
        <div className="row3__content">
          <div className="row3__bigCard"></div>
          <div className="row3__medCardContainer">
            <div className="row3__medCard"></div>
            <div className="row3__medCard"></div>
            <div className="row3__medCard"></div>
            <div className="row3__medCard"></div>
          </div>
        </div>
      </div>
      <div className="row4__mainContainer"></div>
      <div className="row5__mainContainer">
        <div className="sectionTitleDiv">
          <div className="sectionTitle">
            Related Posts
          </div>
          <div className="dash"></div>
        </div>
        <div className="row5__content">
          <div className="dBlogContainer1"></div>
          <div className="dBlogContainer1"></div>
          <div className="dBlogContainer1"></div>
          <div className="dBlogContainer1"></div>
          <div className="dBlogContainer1"></div>
          <div className="dBlogContainer1"></div>
          <div className="dBlogContainer1"></div>
          <div className="dBlogContainer1"></div>
        </div>
      </div>
    </div>
  )
}

export default Blog
