// Whytochoose.tsx

import React from 'react';
import { Img } from '../Img/index';
import { Text } from '../Text/index';


import styles from './Whytochoose.module.css'; // Import your CSS Module

type WhytochooseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    scope: string;
    subtext: string;
  }>;

const Whytochoose: React.FC<WhytochooseProps> = (props) => {
  return (
    <div className={`why__to__choose__container ${props.className || ''}`}>
      <div className={`why__to__choose__card ${styles.why__to__choose__card}`}>
        <div className={`why__to__choose__bg ${styles.why__to__choose__bg}`}>
          <Img
            className={`why__to__choose__img ${styles.why__to__choose__img}`}
            src={props.scope}
            alt="Scope"
          />
        </div>
        <Text
          className={`why__to__choose__text ${styles.why__to__choose__text}`}
          size="txtWorkSansRomanSemiBold26"
        >
          {props.title}
        </Text>
        <Text
          className={`why__to__choose__subtext ${styles.why__to__choose__subtext}`}
          size="txtWorkSansRomanRegular18"
        >
          {props.subtext}
        </Text>
      </div>
    </div>
  );
};

Whytochoose.defaultProps = {};

export default Whytochoose;
