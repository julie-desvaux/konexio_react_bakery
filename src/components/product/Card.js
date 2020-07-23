import React from 'react';
import specimen from '../../specimen.jpg';
import Button from '../core/Button';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: specimen
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log('Card#componentDidMount this.props.item', this.props.item);
        let url = 'http://konexio.codiscovery.co/bakery/api/?q=' + this.props.item.input
        if (this.props.item.input === 'coffee' || this.props.item.input === 'cake' || this.props.item.input === 'cookie' || this.props.item.input === 'croissant'){  
            var request = {method: 'GET'}         
            fetch(url, request)
                .then(res => res.json())
                .then(json => {
                    console.log('json', json);
                this.setState({ source: json.source });
            });
            
        } else {
            this.setState({ source: specimen })
        }
        console.log('Card#componentDidMount source', this.state.source)
    }

    onClick() {
        this.props.onClickProduct(this.props.item.input, this.props.item.price);
    }

    render(){
        const { item } = this.props;
        const { source } = this.state;
        console.log('Card#render item', item)
        return(
            <>
                <Button 
                    className="btn_picture"
                    onClick={this.onClick}>
                    <img src={source} alt="picture"/>
                </Button>
            </>
        );
    }
}

export default Card;