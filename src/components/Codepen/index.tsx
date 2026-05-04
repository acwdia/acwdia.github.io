import React from 'react';
import styles from './styles.module.scss';

interface CodepenProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  children?: React.ReactNode;
}

export default function Codepen({ children, ...iframeProps }: CodepenProps): React.ReactElement {
  return (
    <div className={styles.codepen}>
      <iframe {...iframeProps}>{children}</iframe>
    </div>
  );
}
