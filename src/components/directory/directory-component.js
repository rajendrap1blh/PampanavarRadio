import React from 'react';

import './directory-style.scss'
import MenuItem from '../menu-item/menu-item-component'

class Directory extends React.Component{
constructor(props){
    super(props);

    this.state= {
        message:"Pampanavar Radio House",
        products:[
          {
            id:'1',
            name:'LED',
            primage:'https://media.istockphoto.com/photos/flat-screen-lcd-or-oled-plasma-realistic-illustration-white-blank-hd-picture-id964262476',
            company:'LG'
          },
          {
            id:'2',
            name:'Fridge',
            primage:'https://images.freeimages.com/images/large-previews/578/refrigerator-1195164.jpg',
            company:'Godrej'
          },
          {
            id:'3',
            name:'Washing Machine',
            primage:'https://images.freeimages.com/images/large-previews/027/washing-machine-1418432.jpg',
            company:'IFB'
          },
          {
            id:'4',
            name:'DTH',
            primage:'https://images.freeimages.com/images/large-previews/f25/an-aerial-1215307.jpg',
            company:'Tata Sky'
          },
          {
            id:'5',
            name:'AC',
            primage:'https://media.istockphoto.com/photos/split-air-conditioner-on-a-white-wall-picture-id586057100',
            company:'Voltas'
          }
      ]
    }
}

render(){
    return(
        <div className="directory-menu">
        {this.state.products.map(({name, primage, id}) => (<MenuItem key={id} imageUrl = {primage} name = {name}  ></MenuItem>))}
       
        </div>
    )
}

}

export default Directory;