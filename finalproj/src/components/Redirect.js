import React from 'react';

function get_params(url_address) {
    const reducer = (accumulator, current_val) => {
        const [id, value] = current_val.split('=');
        accumulator[id] = value;
        return accumulator;
    }
    url_address.slice(1).split('&').reduce(reducer, {});   
};

class Redirect extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        try{
            if(typeof(location.hash) === 'undefined') {
                return history.push('/home');
            } else {
                const access_token = get_params(location.hash);
                localStorage.setItem('parsed_values', JSON.stringify(access_token));
                this.props.history.push('/home');
            }
        } catch(error) {
            console.log(error);
            history.push('/');
        } 
    }
    render(){
        return null;
    }
}

export default Redirect;