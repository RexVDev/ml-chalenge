'use client';
import React, {useState, useEffect} from 'react';
import { isEmpty } from 'lodash';
import Image from 'next/image';

import { useDebounce } from './hooks';

import logoMl from '../../media/logo_ml_2x.png';
import styles from './nav.module.scss';

type ItemsSuggested = {
  q: string;
  match_start: number;
  match_end: number;
  filters: string[];
}

/**
 * TODO
 *  Integrate the button inside the input text
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

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);


  const handleChange = ({ target }: any) => {
    setUserInput(target.value)
  }

  const handleClick = () => {
    console.log('click click');
  }

  return (
    <div>
      <header className={styles.container}>
        <Image 
          src={logoMl}
          alt="logo mercado libre"
          height={30}
          className={styles['container__logo']}
        />
        <div className={styles['container__search']}>
          <div className={styles['container__controls']}>
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              className={styles['container__input']}
              value={userInput}
              onChange={handleChange}
            />
          </div>

          {!isEmpty(data) ? (
            <div className={styles['container__list-suggested']}>
            {data.map((item: ItemsSuggested) => (
              <button onClick={handleClick} className={styles['container__button']} key={item.q}>
                <div className={styles['container__suggested']}>
                  <span>{item.q}</span>
                </div>
              </button>
            ))}
          </div>
          ): null }
          
        </div>
      </header>
    </div>
  );
}
