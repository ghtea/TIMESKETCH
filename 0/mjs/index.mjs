import { html, Component, render, useState} from '../common/standalone.module.js';

import {STORE} from './STORE.mjs';
import {ALL} from './ALL.mjs';
 
 
/* components */
class file extends Component {
 
 constructor(props) {
     super(props);
     
     
     this._changeMessage = () => {
       if (this.state.message === "Hello") {
         this.setState({
           message: "Bye bye"
         });
       } else {
         this.setState({
           message: "Hello"
         });
       }
     };
     
     
this.state = {
  message: "Hello",
  changeMessage: this._changeMessage
     };
     
     
   }

 
 
 
  render() {
     return html`
       <${STORE.Provider} value=${this.state}>
         <${ALL} />
       <//>
       `
   }
 }





function init() {
  /*loadListWebsite();*/
  render(html`<${file}/>`, document.getElementById("root"));
}

init();




   
