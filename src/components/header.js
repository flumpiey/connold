import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header ClassName="absolute top-0 left-0 z-50 w-full px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
    <div class="items-center">
      <div class="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
        <div class="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div class="inline-flex items-center">
              <StaticImage
                src="../images/logo.png"
                width={300}
                      quality={95}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="A Gatsby astronaut"
              />
            </div>
          </a>
          <nav class="flex flex-wrap items-center justify-left text-base md:ml-auto md:mr-auto">
            <ul class="items-center inline-block list-none lg:inline-flex">
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Now
                </a>
              </li>
            </ul>
          </nav>
          <button class="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </header>

  // <header className="mb-6 bg-blue-800">
  //   <div className="max-w-[960px] px-4 py-6 mx-auto my-0">
  //     <h1 className="text-4xl font-bold">
  //      <Link
  //         to="/"
  //         className="text-white no-underline"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  //   </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
