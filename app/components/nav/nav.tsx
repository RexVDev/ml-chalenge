'use client';
import React, {useState, useEffect} from 'react';

import { isEmpty } from 'lodash';
import Image from 'next/image';
import { v4 as id } from 'uuid';

import {Button, SizeButton, KindButton } from '../button';
import { useDebounce } from './hooks';

import logoMl from '../../media/logo_ml_2x.png';
import iconSearch from '../../media/icons/icon_search.png';
import styles from './nav.module.scss';

type ItemsSuggested = {
  q: string;
  match_start: number;
  match_end: number;
  filters: string[];
}

/**
 * TODO
 *  Integrate the navigation to click option or search button
 *  Move the api request to their own function component
 *  Integrate the axios or reactQuery library
 */

export function Nav() {
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState([]);
  const debounceValue = useDebounce({value:userInput, delay: 500});

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://http2.mlstatic.com/resources/sites/MLM/autosuggest?showFilters=true&limit=6&api_version=2&q=${debounceValue}`
      );
      const result = await data.json();
      setData(result.suggested_queries);
    };

    userInput ? getData(): setData([]);
  }, [debounceValue]);

  const handleChange = ({ target }: any) => {
    setUserInput(target.value)
  }

  const handleClick = () => {
    console.log('click click');
  }

  return (
    <header className={styles.nav}>
      <Image 
        src={logoMl}
        alt="logo mercado libre"
        height={30}
        className={styles['nav__logo']}
      />
      <div className={styles['nav__search']}>
        <div className={styles['nav__controls']}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            className={styles['nav__input']}
            value={userInput}
            onChange={handleChange}
          />
          <Button
            size={SizeButton.small}
            icon={<Image src={iconSearch}  alt="icon search"/>}
            onClick={handleClick}
            kind={KindButton.primary}
          />
        </div>

        {!isEmpty(data) ? (
          <div className={styles['nav__list-suggested']}>
          {data.map((item: ItemsSuggested) => (
            <button onClick={handleClick} className={styles['nav__button']} key={id()}>
              <div className={styles['nav__suggested']}>
                <span>{item.q}</span>
              </div>
            </button>
          ))}
        </div>
        ): null }
        
      </div>
    </header>
  );
}
