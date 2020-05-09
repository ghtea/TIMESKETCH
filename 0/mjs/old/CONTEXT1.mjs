import { html, Component, render, useState, createContext} from '../common/standalone.module.js';


const Store = createContext(null);
 

function App() {

/*  사용하는 곳 사이에 div 같은거 존재하면 안된다 */
  return html`
       <${Store.Consumer}>
 
              ${store => store.message}    
      
       <//>
  `
}


 
class AppContainer extends Component {
 
 constructor() {
		super();
		this.state = {
			message: "Hello"
		};
	}

 
  render() {
     return html`
       <${Store.Provider} value=${this.state}>
         <${App} />
       <//>
       `
   }
 }

 
render(html`<${AppContainer}/>`, document.body);