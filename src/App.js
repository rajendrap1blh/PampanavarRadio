import React from 'react';

import Homepage from './pages/homepage/homepage-component'

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      message:"Pampanavar Radio House",
      products:[
        {
          id:'1',
          name:'LED',
          company:'LG'
        },
        {
          id:'2',
          name:'Fridge',
          company:'Godrej'
        },
        {
          id:'3',
          name:'Washing Machine',
          company:'IFB'
        },
        {
          id:'4',
          name:'DTH',
          company:'Tata Sky'
        },
        {
          id:'5',
          name:'AC',
          company:'Voltas'
        }
    ]
  }
}

  

  render(){
    console.log(this.state);
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <Homepage />
        {/* <div>{this.state.products.map(product => product.name)}</div> */}
      </div>
    );
  }
}

export default App;
