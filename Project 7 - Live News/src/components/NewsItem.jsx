import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className="my-3">
        <div className="card" data-bs-theme="dark">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%', zIndex: '1' }}>
            {source}
          </span>
          <img 
            src={imageUrl ? imageUrl : "https://via.placeholder.com/400x200.png?text=No+Image+Available"} 
            className="card-img-top" 
            alt="News Thumbnail" 
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 50) : "No Title"}...
            </h5>
            <p className="card-text">
              {description ? description.slice(0, 100) : "No description available for this article."}...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-light">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;