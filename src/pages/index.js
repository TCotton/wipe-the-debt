import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "../../static/nhs.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Back our NHS staff</h2>

    <p>In the current national crisis, nurses, doctors and other medical staff are under extreme pressure. Not only are they caring for our loved ones who are falling ill to coronavirus, but they are also subsequently falling ill themselves.</p>

    <p>Many of these NHS staff have student debts, some totaling over £50k.</p>

    <p>It’s time to wipe the debt.</p>

    <p>We demand the government gives student loan debt forgiveness for all NHS staff.</p>

    <p><a href=''>Here is a template you can use to write to your MP.</a></p>

    <p>To find your MP, please go this site: <a href='https://members.parliament.uk/constituencies/'>https://members.parliament.uk/constituencies/</a></p>

    <p>[other campaign ideas here]</p>

    <div style={{ maxWidth: `960px`, marginBottom: `.75rem` }}>
      <img src={Img} alt="main picture" />
    </div>
  </Layout>
)

export default IndexPage
