import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// On importe Gatsby image
import Img from 'gatsby-image'
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    {console.log(data)}
    <SEO title="Home" />
    <h1>{data.prismicHomepage.data.title.text}</h1>
    <div dangerouslySetInnerHTML={{__html: data.prismicHomepage.data.description.html}} />
    <Img
        style={{ maxWidth: '270px' }}
        fluid={data.prismicHomepage.data.main_illustration.fluid}
      />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`

query MyHomeQuery {
  prismicHomepage {
    id
    data {
      description {
        html
      }
      title {
        text
      }
      main_illustration {
        alt
        copyright
        url
        thumbnails
        fluid{
          srcWebp
          srcSetWebp
          srcSet
          src
          sizes
          base64
          aspectRatio
        }
      }
    }
  }
}
`

export default IndexPage
