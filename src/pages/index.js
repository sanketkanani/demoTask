import * as React from "react"
import Banner from "./Component/Banner/Banner";
import Benifit from "./Component/Benifit/Benifit";
import Jamstack from "./Component/Jamstack/Jamstack";
import Technologies from "./Component/Technologies/Technologies";
import './Index.scss'

// styles
const pageStyles = {
  color: "#232129",
  padding: 10,
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  background: "#100818",
  color: "#ffffffe6",
  fontFamily: "'Poppins', sans-serif"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Banner />
      <Jamstack />
      <Benifit />
      <Technologies />
    </main>
  )
}

export default IndexPage
