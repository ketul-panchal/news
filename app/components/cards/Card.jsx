import Image from "next/image";
import React from "react";
import styles from "@/app/components/cards/cards.module.css";
import Link from "next/link";

const Card = ({ title, description, urlToImage, url }) => {
  return (
    <Link href={url} passHref>
        <div className={styles.container}>
          {urlToImage && (
            <div className={styles.imageContainer}>
              <Image 
                src={urlToImage} 
                alt={title} 
                layout="responsive" 
                width={400} 
                height={250} 
                className={styles.image} 
              />
            </div>
          )}
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}>
            <h3>{description}</h3>
          </div>
        </div>
    </Link>
  );
};

export default Card;
