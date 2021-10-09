import React from 'react';

const url = "https://type.fit/api/quotes";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false
    }
  }

  componentDidMount(){
    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        this.setState({
          loaded: true,
          items: json
        })
      });
  }

  render() {
    var {loaded, items} = this.state;
    var quote_text= items[Math.floor(Math.random() * items.length)];
    if(!loaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="quote-container">
          <div className ="quote-text"> <strong>Quote of the day: </strong>{quote_text.text}
            <div> - {quote_text.author}</div>
          </div> 
        </div>
      )
    }
  }
}

export default Quote;