import React, { Component } from 'react';
import axios from 'axios';

class RandomQuote extends Component {
    constructor(props) {
       super(props)
       this.state = {
          quote: '',
          author: ''
       }
    }
 
    componentDidMount() {
       this.getQuote()
    }
 
    getQuote() {
       let url = 'https://type.fit/api/quotes'
 
       axios.get(url)
          .then(res => {
             let data = res.data
             let quoteNumber = Math.floor(Math.random() * data.length) //get a random index
             let randomQuote = data[quoteNumber] //the random quote
 
             this.setState({
                quote: randomQuote['text'],
                author: randomQuote['author']
             })
          })
    }
 
    getNewQuote = () => {
       this.getQuote()
    }
 
    render() {
       const { quote, author } = this.state
       return (
          <div className="container">
             <h1 className='title'>Get your quote</h1>
             <div className="wrapper">
             <div id='quote-box'>
                <div id='text'><p><span className="qtIcon"><i class="fas fa-quote-left"></i></span>  {quote}</p></div>
                <div id='author'><p>- {author}</p></div>
                <div id='buttons'>
               <button className="bt media"><a id='tweet-quote'  href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target='_blank' title="Share this quote on Twitter!">
                <span>
                        <i className="fab fa-twitter twitter-icon" /> 
                     </span>
                  </a>
                  </button>

                  <button className="bt media"><a id='tumblr-quote'  href={`https://www.tumblr.com/share`} target='_blank' title="Share this quote on Tumblr!">
                <span>
                <i class="fab fa-tumblr"></i>
                     </span>
                  </a>
                  <script id="tumblr-js" async src="https://assets.tumblr.com/share-button.js"></script>
                  </button>

                  <button type="button" id='new-quote' className="bt" onClick={this.getNewQuote}>New Quote</button>
                
                </div>
             </div>
             </div>
          </div>
       )
    }
 }
 
 export default RandomQuote