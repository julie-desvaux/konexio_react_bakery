import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { list } = this.props;         
        return(
            <>
                <ul className="list-group mt-3 mb-3">
                    {list.map((item, key) => {
                        console.log('item', item)
                        return(
                            <>
                                <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item.input}
                                    <span className="badge badge-primary badge-pill">{item.price} €</span>
                                </li>
                            </>
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}

export default List;