import React, { Component } from 'react'

export default class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-auto text-center text-title text-uppercase">
            <h1 className="d-4 pt-5">404</h1>
            <h1>error</h1>
            <h1>page not found</h1>
            <h3 style={{ fontStyle: 'italic', fontSize: '1.5rem', marginTop: '1rem' }}>
              the request URL
            <span className="text-danger px-2">
                {this.props.location.pathname}
              </span>
              was not found
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
