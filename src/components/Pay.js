import React from 'react';
import Card from './product/Card';

class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            subTotal: 0,
            total: 0,
            totalVat: 0,
            totalEcoTax: 0,
        }
        this.onClickProduct = this.onClickProduct.bind(this);
    }

    onClickProduct(name, price) {
        let basket = this.state.basket;
        basket.push(name + ' x 1');
        this.setState({ basket });

        let subTotal = this.state.subTotal + price;
        this.setState({ subTotal });
        console.log('subTotal ', subTotal);

        let totalEcoTax = this.state.totalEcoTax + (basket.length * 0.03);
        this.setState({ totalEcoTax });
        console.log('totalEcoTax ', totalEcoTax);

        let totalVat = this.state.totalVat + (subTotal * 0.2);
        this.setState({ totalVat });
        console.log('totalVat ', totalVat);

        let total = subTotal + totalEcoTax + totalVat;
        total.toFixed(2);
        console.log('total ', total);
        this.setState({ total });

    }

    render() {
        const { basket, subTotal, total, totalVat, totalEcoTax } = this.state;
        const { list } = this.props;
        console.log('Pay#render list', list);
        return(
            <div className="mt-3">
                <div className="row">
                    <div className="col">
                        {basket.map((el, key) => {
                            console.log('item', el)
                            return(
                                <>
                                    <p key={key}>
                                        {el}
                                    </p>
                                </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-6">
                        <p className="text-right">Sub Total : {subTotal} €</p>
                        <p className="text-right">VAT : {totalVat} €</p>
                        <p className="text-right">Eco Tax : {totalEcoTax} €</p>
                        <p className="text-right font-weight-bold">Total : {total} €</p>
                    </div>
                </div>
                {list.map((item, key) => {
                    console.log('item', item)
                    return(
                        <>
                            <Card 
                                item={item} 
                                onClickProduct={this.onClickProduct}/>
                        </>
                        )
                    })
                }                
            </div>
        );
    }
}

export default Pay;