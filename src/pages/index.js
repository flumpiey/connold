import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <h1 className="mb-6 text-4xl font-bold">Hi people</h1>
//     <p className="mb-4">
//       Welcome to your new Gatsby site. I've done the bare minumum to get this
//       working with TailwindCSS (including JIT) because I was sick of looking it
//       up every time.
//     </p>
//     <p className="mb-4">Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />

//     <p>
//       <Link className="text-blue-500 underline" to="/page-2/">
//         Go to page 2
//       </Link>{" "}
//       <br />
//       <Link className="text-blue-500 underline" to="/using-typescript/">
//         Go to "Using TypeScript"
//       </Link>
//       <br />
//       <a className="text-blue-500 underline" href="https://tailwindcss.com/">
//         About Tailwind CSS
//       </a>
//       <br />
//       <a
//         className="text-blue-500 underline"
//         href="https://tailwindcss.com/docs/just-in-time-mode"
//       >
//         About TailwindCSS JIT ("Just in Time" mode)
//       </a>
//     </p>
//   </Layout>
// )

export default function Home({ data }) {
  //highlight-line
  return (
    <Layout>
      {/* <SEO title="home" /> */}
      {/* highlight-start */}
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map(node => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      {/* highlight-end */}
    </Layout>
  )
}

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
//highlight-end

// export default IndexPage
