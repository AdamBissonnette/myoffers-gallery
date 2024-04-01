import './App.css';
import React from 'react';


function App() {
  // useState to set the state of the filter by storeId
  const [filter, setFilter] = React.useState("sof");

  function card(id, title, description, image, tagline, taglineIcon, taglineColor, storeList, leftMeta) {
    const showTagline = tagline !== ""
    const taglineClass = " ui ribbon label " + taglineColor
    const backgroundImage = "url(" + image + ")"
    return (
      <div class="column">
        <div class="ui fluid link card">
          <div class="loaded"></div>
          <div class="image">
            { showTagline?
              <div class={taglineClass}><i class={"icon " + taglineIcon}></i><span>{tagline}</span></div>:
              null
            }
            <div class="img" style={{backgroundImage: backgroundImage}}></div>
          </div>
          <div class="content">
            <div class="header">{title}</div>
            <div class="description">{description}</div>
          </div>
          <div class="extra content">
            <a class="right floated ui"><i class="icon info circle"></i></a>
            <span>{leftMeta}</span>
          </div>
        </div>
      </div>
    );
  }

  const stores = [
    { id: "sof", name: "Save-On-Foods"},
    { id: "psf", name: "PriceSmartFoods"},
    { id: "blf", name: "Buy-Low Foods"},
    { id: "uf", name: "Urban Fare"},
    { id: "nm", name: "Nesters Market"},
    { id: "qf", name: "Quality Foods"}
  ];
  
  const offers = [
    {
      id: 1,
      type: "standard",
      title: "Pay $4.99 for Salads",
      description: "Western Family, 283g, First 1",
      image: "https://myoffers.saveonfoods.com/mediaCache/ecoupon_4321461.jpg",
      tagline: "Hot Offer",
      taglineIcon: "fire",
      taglineColor: "red",
      storeList: ["sof", "psf", "qf", "nm", "uf", "blf"],
      leftMeta: "7 Days Left"
    },
    {
      id: 2,
      type: "standard",
      title: "Earn 4x points",
      description: "Earn three additional More Rewards points on each $1 of qual...",
      image: "https://myoffers.saveonfoods.com/mediaCache/ecoupon_4319135.jpg",
      tagline: "Bonus Points",
      taglineIcon: "trophy",
      taglineColor: "blue",
      storeList: ["sof", "psf"],
      leftMeta: "7 Days Left"
    },
    {
      id: 6,
      type: "standard",
      title: "Buy 2 Get 1200 Points on Cereal", 
      description: "General Mills, 516g-778g, Limit 2 Promotional Offers",
      image: "https://myoffers.saveonfoods.com/mediaCache/ecoupon_4321494.jpg",
      tagline: "Hot Offer",
      taglineIcon: "fire",
      taglineColor: "red",
      storeList: ["sof", "psf", "nm"],
      leftMeta: "7 Days Left"
    },
    {
      id: 3,
      type: "standard",
      title: "Pay $4.99 for Cinnamon Buns",
      description: "Iced or Un-Iced, 420g or 480g, First 2",
      image: "https://myoffers.saveonfoods.com/mediaCache/ecoupon_4321467.jpg",
      tagline: "",
      taglineIcon: "",
      taglineColor: "",
      storeList: ["sof", "uf"],
      leftMeta: "7 Days Left"
    },
    {
      id: 4,
      type: "standard",
      title: "Flash Sale",
      description: "Pay $8.99 for Seven Layer Dip",
      image: "https://myoffers.saveonfoods.com/mediaCache/ecoupon_4321470.jpg",
      tagline: "Flash Sale",
      taglineIcon: "lightning",
      taglineColor: "yellow",
      storeList: ["sof", "psf", "blf"],
      leftMeta: "7 DaysLeft"
    }, 
    {
      id: 5,
      type: "standard",
      title: "Pay $10.99 for Mitchell's Toupie Ham",
      description: "Smoked, 1kg or 1.5kg, First 2",
      image: "https://myoffers.saveonfoods.com/mediaCache/ecoupon_4321473.jpg",
      tagline: "",
      taglineIcon: "",
      taglineColor: "",
      storeList: ["sof", "qf"],
      leftMeta: "7 Days Left"
    },

  ]


  return (
    <div class="wrapper">
      <div class="ui column stackable grid container">
        <div class="ui huge labels" id="filters">
          { stores.map(store =>
              {
                const storeId = "store_" + store.id;
                const active = store.id === filter;
                const className = active? "ui label blue": "ui label";

                return (
                  <a onClick={() => setFilter(store.id)} id={storeId} class={className}>
                    {store.name}
                  </a>
                )
              }
            )
          }
        </div>
      </div>
      <div class="ui four column stackable grid container">
        { 
          offers.filter(offer => offer.storeList.includes(filter)).map(offer =>
            card(offer.id,
            offer.title,
            offer.description,
            offer.image,
            offer.tagline,
            offer.taglineIcon,
            offer.taglineColor,
            offer.storeList,
            offer.leftMeta)
          )
        }
      </div>
    </div>
  );
}

export default App;
