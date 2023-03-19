class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "by: " + (this.getAttribute("autor") || "Anonymous")

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title")
    linkTitle.href = this.getAttribute("link-url")
    linkTitle.target = "_blank"

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "./assets/images/foto-default.jpg"
    newsImage.alt = "Darth Vader tomando café"

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style")
    style.textContent = `
    .card {
      width: 80%;
      display: flex;
      justify-content: space-between;
      box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.5);
    }
    
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span {
      font-weight: 400;
    }
    
    .card__left > a {
      margin-top: 15px;
      font-size: 25px;
      font-weight: 700;
      color: black;
      text-decoration: none;
    }
    
    .card__left > p {
      color: rgb(70, 70, 70);
    }
    `

    return style
  }
}

customElements.define("card-news", CardNews);
