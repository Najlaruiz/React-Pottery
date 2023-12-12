import React from 'react';

const CollectionSection = () => {
  return (
    <section className="section collection text-center" aria-labelledby="collection-label">
      <div className="container">
        <h2 className="h2 section-title" id="collection-label">
          Unique Handicrafts Collection
        </h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie ligula dignissim.
        </p>
        <ul className="grid-list">
          <CollectionCard
            imageUrl="images/collection-1.jpeg"
            title="Pottery & Ceramics set"
            description="Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam."
          />
          <CollectionCard
            imageUrl="images/collection-2.jpeg"
            title="Pottery Craft"
            description="Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam."
          />
          <CollectionCard
            imageUrl="images/collection-3.jpeg"
            title="Home Decoration"
            description="Cras fermentum augue ac purus pharetra man aliquam fringilla ornare quam."
          />
         
        </ul>
      </div>
    </section>
  );
};

const CollectionCard = ({ imageUrl, title, description }) => {
  return (
    <li>
      <div className="collection-card">
        <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 550 }}>
          <img src={imageUrl} width="500" height="550" loading="lazy" alt={title} className="img-cover" />
        </figure>
        <div className="card-content">
          <h3 className="h3 card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <a href="#" className="btn">
            <span className="span">View Gallery</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </div>
    </li>
  );
};

export default CollectionSection;


