import React, { Component } from 'react';

class services extends Component {
  render() {

    if(this.props.data){
      var services = this.props.data.services.map(function(services){
        return  <li key={services.user}>
            <blockquote>
               <p>{services.text}</p>
               <cite>{services.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="services">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client services</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {services}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default services;
