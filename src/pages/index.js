import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import '../styles/main.scss'


const IndexPage = () => (
  <Layout>
    <div className="header">
      <h2>Hi there!</h2>
      <h1>I'm Fahmi.</h1>
      <p>I'm a software engineer who places his heart on arts. I do illustrations, user interfaces, as well as building apps.</p>
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </div>
  </Layout>
)

export default IndexPage
