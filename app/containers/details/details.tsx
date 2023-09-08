import { Card, CardTypes } from '../../components/card';
import Image from 'next/image';

import {Button, SizeButton, KindButton } from '../../components/button';

import styles from './details.module.scss';

const RANDOM_URL = 'https://picsum.photos/600';

export function Details() {
  return (
    <div className={styles.details}>
      <Card type={CardTypes.primary} paddedXL borderS widthFluid>
        <section className={styles['details__product']}>
          <Image 
            src={RANDOM_URL}
            alt="random image"
            width={650}
            height={650}
          />
          <div className={styles['details__info']}>
            <span className={styles['details__status']}>
              Status - items selled
            </span>
            <span className={styles['details__title']}>
              title
            </span>
            <span className={styles['details__price']}>
              price
            </span>
            <Button
              size={SizeButton.medium}
              kind={KindButton.secondary}
            >
              Comprar
            </Button>
          </div>
        </section>
        <section className={styles['details__description']}>
          <p className={styles['details__description-title']}>
            Descripción del producto
          </p>
          <p className={styles['details__description-info']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eaque officiis commodi provident molestias placeat dicta quidem vel
            necessitatibus inventore, tempora itaque quo, pariatur voluptates natus
            aperiam animi, sapiente corporis neque.
          </p>
        </section>
      </Card>
    </div>
  )
}