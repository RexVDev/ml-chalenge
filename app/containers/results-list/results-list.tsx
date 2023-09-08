'use client';
import Image from 'next/image';
import { v4 as id } from 'uuid';

import { Card, CardTypes } from '../../components/card';
import { Button, SizeButton, KindButton } from '../../components/button';

import iconShipping from '../../media/icons/icon_shipping.png';
import styles from './results-list.module.scss';

export function ResultsList() {
  const handleClick = () => {
    console.log('click click');
  };

  return (
    <div className={styles['results-list']}>
      <Card type={CardTypes.primary} paddedXL borderS widthFluid>
        {LIST_ITEMS.map(item => (
          <Button kind={KindButton.ghost} size={SizeButton.fluid} onClick={handleClick}>
            <div className={styles['results-list__item']}>
              <Image 
                src={item.image}
                alt={item.description}
                width={180}
                height={180}
                className={styles['results-list__image']}
              />
              <div className={styles['results-list__resume']}>
                <p className={styles['results-list__price']}>
                  {item.price}
                  {item.availability ? (
                    <Image
                      src={iconShipping}
                      alt="availability item"
                      width={20}
                      className={styles['results-list__icon-availability']}
                    />
                  ): null}
                </p>
                <p className={styles['results-list__description']}>
                  {item.description}
                </p>
              </div>
              <section className={styles['results-list__location']}>
                <p>{item.location}</p>
              </section>
            </div>
          </Button>
        ))}
      </Card>
    </div>
  );
}

const LIST_ITEMS = [
  {
    id: id(),
    image:'https://picsum.photos/200',
    price: '1908',
    availability: true,
    location: 'Estado de México',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    id: id(),
    image:'https://picsum.photos/210',
    price: '1908',
    availability: true,
    location: 'Puebla',
    description: 'Eaque officiis commodi provident molestias placeat dicta quidem ve.',
  },
  {
    id: id(),
    image:'https://picsum.photos/220',
    price: '1869',
    availability: false,
    location: 'Morelia',
    description:
      'dolor sit amet consectetur voluptates natus aperiam animi, sapiente corpo ommodi provident molest',
  },
  {
    id: id(),
    image:'https://picsum.photos/180',
    price: '1002',
    availability: true,
    location: 'Guerrero',
    description:
      'tempora itaque quo, pariatur voluptates natus aperiam animi, sapiente corporis neque',
  },
];