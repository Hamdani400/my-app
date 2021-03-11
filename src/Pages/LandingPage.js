import Header from 'Parts/Header'
import React, { Component } from 'react'
import LandingPageJson from 'json/landingPage.json'
import Hero from 'Parts/Hero'


export default class LandingPage extends Component {
  render () {
    return (
      <>
        <Header {...this.props}></Header>
;<Hero data={LandingPageJson.hero} />

      </>
    )
  }
}
