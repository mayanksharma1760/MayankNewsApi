import React, { Component } from 'react'
import NewsItem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }
    
        constructor() {
            super();
        this.state = {
                articles: [],
                page:1,
                totalResults:0
            }
        }
        async updatenews(){
            this.props.setprogress(0);
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb1926ecc8a2492daf81b225365cbe37&pageSize=${this.props.pageSize}`
            let data=await fetch(url);
            this.props.setprogress(30);

                let parsedData =await data.json()
            console.log(parsedData)
            this.props.setprogress(70);

            this.setState({
                    articles: parsedData.articles,
                    totalResults: parsedData.totalResults
                })
                this.props.setprogress(100);
        }
  async  componentDidMount(){
          this.updatenews();
        }
        fetchMoreData=async()=>{
            this.setState({page:this.state.page+1})
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb1926ecc8a2492daf81b225365cbe37&pageSize=${this.props.pageSize}`
            let data=await fetch(url);
                let parsedData =await data.json()
            console.log(parsedData)
            this.setState({
                    articles:this.state.articles.concat (parsedData.articles),
                    totalResults: parsedData.totalResults
                })
        }
    render() {
            return(
            
            <>

            <h1 className='text-center my-4 ' style={{padding:'35px'}}>MayankNews Top Headlines</h1>
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4 className='text-center'>Loading...</h4>}
        >
            <div className="container">
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url}>
                                 <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt}/>
                            </div>
                })}
                   
                </div>
                </div>
</InfiniteScroll>

            </>
        )
    }
}
