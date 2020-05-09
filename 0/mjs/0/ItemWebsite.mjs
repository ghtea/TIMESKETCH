import { html, Component, render, useState} from '../../common/standalone.module.js';

import {g} from '../X.mjs';

import {Move, Edit} from '../../svg/basicIcons.mjs';


function ItemWebsite({objWebsite, forceRerender, storeListWebsite}) {
  
  
  
  const colorMain = g.listColor[ objWebsite["color"] ];
  
  const colorSub = g.listColorSub[ objWebsite["color"] ];
  
  objWebsite["sinceLastClick"]= Date.now() - objWebsite["lastClick"];
  
  if (objWebsite["sinceLastClick"] > 7 * 24 * 60 * 60 * 1000) {
    objWebsite["hp"] = 0.4;
  } else if (objWebsite["sinceLastClick"] < 1 * 24 * 60 * 60 * 1000) {
    objWebsite["hp"] = 0.8;
  }
  
  storeListWebsite();
  
  function moveThisItem(e) {
  }
  
  
  function clickThisItem(e) {
  const link = e.currentTarget;
  const keyCommon = link.getAttribute("data-key");
  
  
  const item = document.querySelector('.itemWebsite[data-key="'+keyCommon+'"]');
  
  const cWebsite = listWebsite.find(function(itemEach) {
    return itemEach.key === keyCommon;
  });
  
  console.log(cWebsite["url"]);
  cWebsite["numberClick"] += 1;
  storeListWebsite();
  
  
  objWebsite["lastClick"]= Date.now();
  storeListWebsite();
  /*window.location.href = cWebsite["url"];*/
  }
  
  
  
  function editThisItem(e) {
  
  /*event.stopPropagation();*/
  const btn = e.currentTarget;
  
  const keyCommon = btn.getAttribute("data-key");
  
  
  g.editingKey = keyCommon;
  
  g.editingTf = true;
    
  forceRerender();
  }
  
  
  
  
  
  
  /*
  <div class="groupEye">
  <div class="eyeLeft"></div>
  <div class="eyeRight"></div>
  </div>
  */
  
   return html`
   
<div 
  class="itemWebsite"
  data-key="${objWebsite["key"]}"
  >
   
<div
  class="headWebsite">
  
  <div class="groupEye">
  <div class="eyeLeft"></div>
  <div class="eyeRight"></div>
  </div>
  
  <div 
  class="hpNow"
  style="
  background-color:${colorMain};
  width:${objWebsite["hp"] * 60}px;
  "
  ></div>
  

  
</div>
   
   
<div 
  class="bodyWebsite"
  style="background-color:${colorMain};"
  >
  
  <div 
  class="bodyInside"
  style="background-color:${colorSub};"
  >
  </div>
  
   <a 
   href="${objWebsite["url"]}"
   style=""
   data-key="${objWebsite["key"]}"
   onClick=${clickThisItem}
   target="_blank"
   >
      ${objWebsite["title"]}
      </a>
      
</div>
    
    
      
      
      
<div class="handWebsite">
    
    <div 
    class="handLeft"
    style="background-color:${colorMain};"
    >
      <div 
    class="btnMoveThisItem"
    data-key="${objWebsite["key"]}"
    onClick=${moveThisItem}> 
    <${Move} />
    </div>
    </div>
    
    
    <div 
    class="handRight"
    style="background-color:${colorMain};"
    > 
      <div 
    class="btnEditThisItem"
    data-key="${objWebsite["key"]}"
    onClick=${editThisItem}
    > 
      <${Edit} />
      </div>
    </div>
</div>
      
    
<div class="legWebsite">
    <div class="legLeft"> </div>
    <div class="legRight"> </div>
</div>

      
</div>
    `
}


export {ItemWebsite};