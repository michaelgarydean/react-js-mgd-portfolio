import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.scss'; // Global styles (fonts, resets, header/hero/media slides, etc.)

const Music = () => {
  useEffect(() => {
    // For testing, ensure the page wrapper is visible
    const wrapper = document.getElementById('page-wrapper');
    if (wrapper) {
      // Remove any fade-out or delayed fade-in logic for now:
      wrapper.style.opacity = '1';
    }
  }, []);

  return (
    <div id="page-wrapper" style={{ opacity: 1 }}>
      <Header />
      
      <div className="container">
        <div className="content-wrapper">
          {/* Spotify Embed 1 */}
          <div className="spotify-embed">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/album/35vEfWoH2YFxYk2qM9m3Dy?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed 1"
            ></iframe>
          </div>
          
          {/* Spotify Embed 2 */}
          <div className="spotify-embed">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/album/14Mc1UxeA3pTGCN5VaBPiG?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed 2"
            ></iframe>
          </div>
          
          {/* Spotify Embed 3 */}
          <div className="spotify-embed">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/album/2byng1o9ISIUQHENCWfSFi?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed 3"
            ></iframe>
          </div>
          
          {/* Spotify Embed 4 */}
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/album/70Am9MRKpqQDsXm7Kmj5CG?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed 4"
            ></iframe>
          </div>
          
          {/* Spotify Embed 5 */}
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/album/29Y1JB62U4z1JTxnzjvI6t?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed 5"
            ></iframe>
          </div>
          
          {/* Spotify Embed 6 */}
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/album/7aIZ2gozYlEna353LhAFS1?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify Embed 6"
            ></iframe>
          </div>
          
          {/* "More on Bandcamp" Link */}
          <a className="see-more-link" href="https://michaelgarydean.bandcamp.com/">
            More on Bandcamp &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Music;
