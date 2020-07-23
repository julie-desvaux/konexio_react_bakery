import React from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay'
import Button from './components/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      activeTab: 'add',
      items: [],
    }
    this.onClick = this.onClick.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onClick(value) {
    console.log('App#onClick value', value);
    this.setState({ activeTab: value})    
  }

  onAdd(price, input) {
    console.log('App#onAdd', price, input);
    let items = this.state.items;
    items.push({input, price})
    this.setState({ items });
    console.log('items', items)
    this.setState({ activeTab: 'list'})
  }

  render() {
    const { activeTab, items } = this.state;
    let renderActiveTab = '';
    let classNameAdd = 'btn btn-primary';
    let classNameList = 'btn btn-outline-secondary';
    let classNamePay = 'btn btn-outline-secondary';

    if(activeTab === 'add') {
      renderActiveTab = <Add onAdd={this.onAdd}/>
      classNameAdd = 'btn btn-primary';
      classNameList = 'btn btn-outline-secondary';
      classNamePay = 'btn btn-outline-secondary';
    } else if (activeTab === 'list') {
      renderActiveTab = <List list={items}/>
      classNameAdd = 'btn btn-outline-secondary';
      classNameList = 'btn btn-primary';
      classNamePay = 'btn btn-outline-secondary';
    } else if (activeTab === 'pay'){
      renderActiveTab = <Pay list={items}/>
      classNameAdd = 'btn btn-outline-secondary';
      classNameList = 'btn btn-outline-secondary';
      classNamePay = 'btn btn-primary';
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h1 className="text-center">Bakery</h1>
            <Button 
              className={classNameAdd} 
              onClick={(e) => this.onClick('add')}> 
                Add
            </Button>
            <Button 
              className={classNameList} 
              onClick={(e) => this.onClick('list')}>
                List
            </Button>
            <Button 
              className={classNamePay} 
              onClick={(e) => this.onClick('pay')}>
                Pay
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            {renderActiveTab}
          </div> 
        </div>
      </div>
    );
  }
}

export default App