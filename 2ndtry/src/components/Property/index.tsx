// Property.tsx

import React from "react";
import { Img } from "../Img/index";
import { Text } from "../Text/index";
import styles from "./Property.module.css"; // Import your CSS Module
import property1 from "../../assets/property1.png";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import square from "../../assets/square.png";

type PropertyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    address: string;
    beds : string;
    baths : string;
    sqft : string;
  }>;

const Property: React.FC<PropertyProps> = (props) => {
  return (
    <div className={`container ${props.className || ''}`}>
          <div className={styles.propertyCard}>
        <div className={styles.propertyContainer}>
          <Img className={styles.propertyImage} src={property1} alt="katiemusialzf" />
        </div>
        <div className={styles.propertyDetails}>
          <Text className={styles.propertyTitle} size="txtWorkSansRomanSemiBold26">
            {props.title}
          </Text>
          <Text className={styles.propertyAddress} size="txtWorkSansRomanRegular18">
            {props.address}
          </Text>
          <div className={styles.propertyFeatures}>
            <div className={styles.propertyFeature}>
              <Img src={bed} alt="labed" />
              <Text className={`${styles.propertyFeatureText} ${styles.propertyFeatureTextBlue}`} size="txtWorkSansRomanRegular16WhiteA700">
                {props.beds}
              </Text>
            </div>
            <div className={styles.propertyFeature}>
              <Img src={bath} alt="labath" />
              <Text className={`${styles.propertyFeatureText} ${styles.propertyFeatureTextBlue}`} size="txtWorkSansRomanRegular16WhiteA700">
                {props.baths}
              </Text>
            </div>
            <div className={styles.propertyFeature}>
              <Img src={square} alt="lavectorsquare" />
              <Text className={`${styles.propertyFeatureText} ${styles.propertyFeatureTextBlue}`} size="txtWorkSansRomanRegular16WhiteA700">
                {props.sqft}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

Property.defaultProps = {};

export default Property;
