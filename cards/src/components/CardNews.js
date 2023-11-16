class Cardnews extends HTMLElement{
   constructor(){
      super();

      const shadow = this.attachShadow({mode: "open"});
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
      
   }

      build(){
         const componentRoot = document.createElement("div");
         componentRoot.setAttribute("class", "card");

         //CARD LEFT
         const cardLeft = document.createElement("div");
         cardLeft.setAttribute("class","card_left");

         const autor = document.createElement("span");
         autor.textContent = "By " + (this.getAttribute("autor") || "Desconhecido");

         const titulo = document.createElement("a");
         titulo.textContent =this.getAttribute("titulo");
         titulo.href = this.getAttribute("url")

         const descricao = document.createElement("p");
         descricao.textContent = this.getAttribute("descricao");

         cardLeft.appendChild(autor);
         cardLeft.appendChild(titulo);
         cardLeft.appendChild(descricao);

         //CARD RIGHT
         const cardRight = document.createElement("div");
         cardRight.setAttribute("class","card_right");

         const image = document.createElement("img");
         image.src = this.getAttribute("foto") || "/assets/default-unknown.jpeg" 

         cardRight.appendChild(image);



         //Append a div principal
         componentRoot.appendChild(cardLeft);
         componentRoot.appendChild(cardRight);
         



         return componentRoot;
      }

      styles(){

         const styles = document.createElement("style");
         styles.textContent = `
         .card{
            width: 60%;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
            box-shadow: 10px 10px 10px 6px rgba(0,0,0,0.79);
         -webkit-box-shadow: 10px 10px 10px 6px rgba(0,0,0,0.79);
         -moz-box-shadow: 10px 10px 10px 6px rgba(0,0,0,0.79);
            justify-content: space-between;
         }
         
         .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
         }
         .card_left > a {
            margin-top: 15px;
            font-size: 20px;
         
         }
         .card_left > p{
            color: gray;
         }
         .card_left > span{
            font-weight: 700;
         }
         `;

         return styles;
      }

   
}

customElements.define("card-news", Cardnews);