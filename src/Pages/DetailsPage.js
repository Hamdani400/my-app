import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import Header from 'Parts/Header';
import PageDetailTitle from 'Parts/PageDetailsTitle';
import FeaturedImage from 'Parts/FeaturedImage';
import PageDetailDescription from 'Parts/PageDetailDescription';
import BookingForm from 'Parts/BookingForm'
import Categories from 'Parts/Categories'
import Testimony from 'Parts/Testimony'
import Footer from 'Parts/Footer'

import itemDetails from 'json/itemDetails.json'

export default class DetailsPage extends Component {
  componentDidMount () {
    document.title = 'Staycation | Details Page';
    window.scrollTo (0, 0);
  }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            {pageTitle: "House Details", pageHref: ""}
      ]
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle data={itemDetails} breadcrumb={breadcrumb}></PageDetailTitle>
            <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
            <section className="container">
              <div className="row">
                <div className="col-7 pr-5">
                  <Fade bottom>
                    <PageDetailDescription data={itemDetails}></PageDetailDescription>
                    </Fade>
                </div>
                <div className="col-5">
                <Fade bottom>
                  <BookingForm itemDetails={itemDetails}></BookingForm>
                  </Fade>
                </div>
              </div>
            </section>

            <Categories data={itemDetails.categories} />
            <Testimony data={itemDetails.testimonial} />
            <Footer />
            </>
    )
  }
}
