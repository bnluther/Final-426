import React from 'react';

const url="https://api.kanye.rest";

class Kanye extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      loaded: false
    }
  }

  componentDidMount(){
    fetch(url, {Method: 'GET'})
      .then(response => response.json())
      .then(json => {
        this.setState({
          loaded: true,
          quote: json
        })
      });
  }

  render() {
    var {loaded, quote} = this.state;
    var kanye_quote = quote;
    if(!loaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="quote-container">
            <div className="quote-text">
                <strong>Kanye's quote of the day:</strong> {kanye_quote.quote}
            </div>
        </div>
      );
    }
  }
}

export default Kanye;