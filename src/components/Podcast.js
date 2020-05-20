import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import '../App.css';

const Podcast = ({ podcast }) => (
  <div className="list-item">
    <div className="list-item-image-container">
        <img alt={podcast.title} src={podcast.thumbnail} />
     </div>
     <span className="list-item-name">
        {podcast.title}
        <span className="list-item-power">{podcast.url}</span>
        <Link to={{ pathname: `detail/${podcast.id}`}}> <span className="list-lihat"> Lihat >></span></Link>
    </span>
  </div>
);



Podcast.propTypes = {
  podcast: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default Podcast;


