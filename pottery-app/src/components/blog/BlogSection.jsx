import React from 'react';


const BlogCard = ({ imageUrl, title, author, date, category }) => {
  return (
    <li>
      <div className="blog-card">
        <figure className="card-banner img-holder" style={{ '--width': 1024, '--height': 683 }}>
          <img src={imageUrl} width="1024" height="683" loading="lazy" alt={title} className="img-cover" />
        </figure>
        <div className="card-content">
          <h3 className="h4">
            <a href="#" className="card-title">{title}</a>
          </h3>
          <div className="card-meta">
            <a href="#" className="card-meta-wrapper">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
              <span className="span">{author}</span>
            </a>
            <time className="card-meta-wrapper" dateTime={date}>
              <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>
              <span className="span">{date}</span>
            </time>
            <a href="#" className="card-meta-wrapper">
              <ion-icon name="folder-open-outline" aria-hidden="true"></ion-icon>
              <span className="span">{category}</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

const BlogSection = () => {
  return (
    <section className="section blog" aria-labelledby="blog-label">
      <div className="container">
        <h2 className="h2 section-title text-center" id="blog-label">Blog & News</h2>
        <p className="section-text text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie ligula dignissim.
        </p>
        <ul className="grid-list">
          <BlogCard
            imageUrl="images/blog-1.jpeg"
            title="The Detail       Terre cuite (Earthenware)"
            author="admin"
            date="November 30, 2023"
            category="Tips & Trick"
          />
          <BlogCard
            imageUrl="images/blog-2.jpeg"
            title="Techniques To Make Faience potery"
            author="admin"
            date="November 30, 2023"
            category="Tips & Trick"
          />
           <BlogCard
            imageUrl="images/blog-3.jpeg"
            title="Durable China potery"
            author="admin"
            date="November 30, 2023"
            category="Tips & Trick"
            />
             <BlogCard
            imageUrl="images/blog-4.jpeg"
            title=" Stoneware potery"
            author="admin"
            date="November 30, 2023"
            category="Tips & Trick"
            />
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;

