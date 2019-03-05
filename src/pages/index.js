import React, { useContext } from "react"

import Layout from "../components/layout"
import MastHead from '../components/mastHead'
import Projects from '../components/projects'
import Topics from '../components/topics'
import useSiteMetadata from '../hooks/siteMetaData'
import { ThemeContext } from "../theme-context"

function IndexPage() {
  const { state: { style }, dispatch } = useContext(ThemeContext)
  const { layout } = useSiteMetadata()
  return layout === 'stacked' ? <Layout>
    <div className="container-lg py-6 p-responsive text-center">
      <MastHead />
      <div className="my-6">
        <Projects />
      </div>
      <div className="my-6">
        <Topics />
      </div>
      {/* <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Theme</button> */}
    </div>
  </Layout> :
    <Layout>
      <div className={`d-md-flex ${style === 'dark' ? 'border-md-bottom' : ''}`}>
        <div className={`flex-self-stretch ${style === 'dark' ? 'bg-gray-dark' : 'border-md-right border-gray-light bg-white'} col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6`}>
          <MastHead />
        </div>
        <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0" style={{ backgroundColor: style === 'dark' ? "#2f363d" : "#fafbfc" }}>
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <Projects />
            <Topics />
            {/* <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Theme</button> */}
          </div>
        </div>
      </div>
    </Layout>
}

export default IndexPage
