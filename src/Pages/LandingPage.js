import Header from 'Parts/Header'
import React, { Component } from 'react'
import LandingPageJson from 'json/landingPage.json'
import Hero from 'Parts/Hero'
import MostPicked from 'Parts/MostPicked'
import Categories from 'Parts/Categories'
import Testimony from 'Parts/Testimony'

export default class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.refMostPicked = React.createRef()
  }
  render () {
    return (
      <>
        <Header {...this.props}></Header>
        ;<Hero refMostPicked={this.refMostPicked} data={LandingPageJson.hero} />
        ;
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={LandingPageJson.mostPicked}
        />
        <Categories data={LandingPageJson.categories} />
        <Testimony></Testimony>
      </>
    )
  }
}
