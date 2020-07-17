import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import '../styles/main.scss'


const IndexPage = () => (
  <Layout>
    <div className="header">
      <div className="header-pics">
        <div className="header-container">
          <div className="header-pic-long"></div>
        </div>
        <div className="header-container">
          <div className="header-pic-square"></div>
          <div className="header-pic-square"></div>
        </div>
      </div>
      <div>
        <h2>Hi there!</h2>
        <h1>I'm Fahmi.</h1>
        <p>I'm a software engineer who places his heart on arts. I do illustrations, user interfaces, as well as building apps.</p>
        <div className="header-btn">
          <button className="btn-github">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </button>
          <button className="btn-instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </button>
          <button className="btn-twitter">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
