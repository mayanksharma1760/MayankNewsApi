import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let {title,description,imageurl,newsurl,date}=this.props
        return (
            <div>
                    <div className="card" style={{width: '18rem'}}>
                    <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p class="card-text"><small class="text-muted">Last updated on {new Date(date).toGMTString()}</small></p>

                                <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

