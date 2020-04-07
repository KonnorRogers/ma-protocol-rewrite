import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PainScaleImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pain-scale.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1365) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Pain Scale 1-10 with faces to depict pain"
      />
      <span style={{ textAlign: "center", fontSize: "0.85rem" }}>
        Image taken from:
        <a
          style={{ display: "inline" }}
          href="https://creakyjoints.org/doctor-patient/pain-scale-not-best-way-communicate-pain/"
        >
          https://creakyjoints.org/doctor-patient/pain-scale-not-best-way-communicate-pain/{" "}
        </a>
      </span>
    </div>
  )
}

export default PainScaleImg
