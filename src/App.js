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
      activeTabe: 'add',
      items: [],
    }
  }

  onClickTabAdd() {
    console.log('onClickTabAdd');
    this.setState({ activeTabe: 'add'})
    
  }

  onClickTabList() {
    console.log('onClickTabList')
    this.setState({ activeTabe: 'list'})
  }

  onClickTabPay() {
    console.log('onClickTabPay')
    this.setState({ activeTabe: 'pay'})
  }

  render() {
    return(
      <div className="container">
        <div className="col">
          <h1>Bakery</h1>
          <Button 
            className={"btn btn-primary"} onClick={this.onClickTabAdd}> 
            Add
          </Button>
          <Button 
            className={"btn btn-outline-secondary"} onClick={this.onClickTabList}>
            List
          </Button>
          <Button 
            className={"btn btn-outline-secondary"} onClick={this.onClickTabPay}>
            Pay
          </Button>
          <Add />
          <List />
          <Pay />
        </div>        
      </div>
    );
  }
}

export default App