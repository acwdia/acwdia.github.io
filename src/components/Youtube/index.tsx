import React from 'react';
import styles from './styles.module.scss';

interface YoutubeProps {
  src: string;
  children?: React.ReactNode;
}

export default function Youtube({ src, children }: YoutubeProps): React.ReactElement {
  return (
    <div className={styles.video}>
      <div className={styles.videoContainer}>
        <iframe
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      {children && <p className={styles.attribution}>{children}</p>}
    </div>
  );
}
