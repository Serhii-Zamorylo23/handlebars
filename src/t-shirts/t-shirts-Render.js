import Handlebars from "handlebars";
import { TShirts } from './t-shirts-data'

const item = `
<div class="product-card">
<img src="{{image}}" alt="{{title}}" class="product-image">
<h2 class"product-title">{{title}}</h2>
<h2 class"product-size">{{size}}</h2>
<h2 class"product-price">{{price}}</h2>
<h2 class"product-sku">{{sku}}</h2>
</div
`
const template=Handlebars.compile(item)


const TShirtsDiv = document.getElementById('T-Shirts-list');

TShirts.forEach(item=>{
  const TShirtsHTML = template(item);
  TShirtsDiv.innerHTML+=TShirtsHTML
})