import Header from 'Parts/Header'
import React, { Component } from 'react'
import LandingPageJson from 'json/landingPage.json'
import Hero from 'Parts/Hero'
import MostPicked from 'Parts/MostPicked'
import Categories from 'Parts/Categories'
import Testimony from 'Parts/Testimony'
import Footer from 'Parts/Footer'

export default class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  componentDidMount() {
    document.title = "Staycation | Home"
    window.scrollTo(0, 0);
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
        <Testimony data={LandingPageJson.testimonial} />
        <Footer />
      </>
    )
  }
}
