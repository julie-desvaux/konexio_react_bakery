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
    this.setState({ 
      items,
      activeTab: 'list'
    });
  }

  render() {
    const { activeTab, items } = this.state;
    console.log('activeTab', activeTab)
    console.log('this.renderTabAdd', this.renderTabAdd)
    console.log('this.renderTabList', this.renderTabList)
    console.log('this.renderTabPay', this.renderTabPay)
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h1 className="text-center">Bakery</h1>
            <Button 
              isSelected={activeTab === 'add'}
              onClick={(e) => this.onClick('add')}> 
                Add
            </Button>
            <Button 
              isSelected={activeTab === 'list'}
              onClick={(e) => this.onClick('list')}>
                List
            </Button>
            <Button 
              isSelected={activeTab === 'pay'}
              onClick={(e) => this.onClick('pay')}>
                Pay
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* {activeTab === 'add' ? <Add /> : null}
            {activeTab === 'list' ? <List /> : null}
            {activeTab === 'pay' ? <Pay /> : null} */}
            {activeTab === 'add' && <Add onAdd={this.onAdd} />}
            {activeTab === 'list' && <List list={items} />}
            {activeTab === 'pay' && <Pay list={items} />}
          </div> 
        </div>
      </div>
    );
  }
}

export default App