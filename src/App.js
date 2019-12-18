import React, { Component } from 'react';

import Menu from './menu/Menu';

class App extends Component {

  constructor() {
    super();

    this.state = {

      arrayDePromo:[]
    }
  }

  componentDidMount() {

        fetch('https://react-ananke.herokuapp.com/data/obtenerPromociones')
        .then(response => {
          response.json()
            .then(datos =>{
              this.setState({
                arrayDePromo: datos.Promo
              })
              
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  

  render() {

    return (
      <React.Fragment>
               
                <div className="container">
                    <div className="main_title">
                    <h1>MENÚ PROMOCIONES</h1>
              <br></br>
                        
                    </div>
                    {/* {this.obtenerCardsConTarjetasDePersonas()} */}
                    {this.obtenerCardsConDocentesDesdeElBack()}
                </div>
            </React.Fragment>
    );
  }

  obtenerCardsConDocentesDesdeElBack = () => {
    let arrayDeCardsHTML = [];
    for (let i = 0; i < this.state.arrayDePromo.length; i++) {
      arrayDeCardsHTML.push(
        <Menu promocion="2x1" restaurante={this.state.arrayDePromo[i]}></Menu>
        
      )
     
     
    }
    return arrayDeCardsHTML;
  }

 
}



export default App;
