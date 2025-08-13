// OpenSeadragonViewer.js
import React, { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';

const OpenSeadragonViewer = ({ tileSource }) => {
  const viewerRef = useRef(null);
  const osdRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && !osdRef.current) {
      osdRef.current = OpenSeadragon({
        element: viewerRef.current,
        prefixUrl: 'https://openseadragon.github.io/openseadragon/images/', // for nav icons
        tileSources: tileSource,
      });
    }

    return () => {
      if (osdRef.current) {
        osdRef.current.destroy();
        osdRef.current = null;
      }
    };
  }, [tileSource]);

  return (
    <div
      ref={viewerRef}
      style={{ width: '100%', height: '500px' }}
    />
  );
};

export default OpenSeadragonViewer;
