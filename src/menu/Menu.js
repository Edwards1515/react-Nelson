import React, { Component } from 'react';


class Menu extends Component {


    render() {
        return (

            <div className="container">
            <div className="row story_inner">
            <p>............</p>
              <div className="col-lg-6">
                <div className="story_text">
                 <h3>{this.props.restaurante.nombre}</h3>
                  
        <p>{this.props.restaurante.carta}</p>
                  
                </div>
              </div>
              <div className="col-lg-6">
                <div className="story_img">
                  <img className="img-fluid" src="img/cat-post-1.jpg" alt="No Disponible" width="30%" ></img>
                </div>
                
              </div>
            </div>
      
           
          </div>
        
        

         );

    }
  

}


export default Menu;