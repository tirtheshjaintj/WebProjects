import NewsItem from './NewsItem'
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page,setPage]=useState(1);
  const [total,setTotal]=useState(  0);
  const [loading,setLoading]=useState(true);
  
  useEffect(() => {
    props.setProgress(10);
    document.title=document.getElementById("header").innerHTML;
    setLoading(true);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;  
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setArticles(data.articles);
      setTotal(data.totalResults);
      setLoading(false);
      props.setProgress(100);
    })
    .catch(err=>console.log(err));
    setPage(page+1);
  },[]);



  async function fetchMoreData () {
    props.setProgress(10);
  setLoading(true);
  setPage(page+1);
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;  
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    setArticles(articles.concat(data.articles));
    setTotal(data.totalResults);
    setLoading(false);
    props.setProgress(100);
  })
  .catch(err=>console.log(err));

  };




  
  return (
    <div className="container" style={{marginTop:80+'px'}}>
        <h1 className={'text-center text-'+props.mode2} id='header'>TJ News- Top {props.category[0].toUpperCase()+props.category.slice(1)} Headlines</h1>
        
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== total}
          loader={<Spinner/>}
          style={{overflow:'hidden'}}
        >
          <div className="container">
          <div className="row">
      {
     articles.map((e,i)=>{
        return  <div className="col-md-4" key={i}>
        <NewsItem  title={e.title?e.title:"Comprehensive up-to-date news coverage, aggregated from sources all over the world by TJ News."} 
        author={e.author} 
        date={new Date(e.publishedAt).toDateString()} 
        description={e.description?e.description.slice(0,100)+"...":"Comprehensive up-to-date news coverage, aggregated from sources all over the world by TJ News."} 
        image={e.urlToImage?e.urlToImage:"https://c.ndtvimg.com/2024-02/es1u59uo_us-iraq_625x300_03_February_24.jpeg"} 
        link={e.url} 
        mode1={props.mode1} 
        mode2={props.mode2}
        />
        </div>     
      })
      }
        </div>
        </div>
      </InfiniteScroll>
      </div>
 

  )
}

News.propTypes={
  pageSize:PropTypes.number.isRequired,
  category:PropTypes.string
}

News.defaultProps={
  category:"general"
}


