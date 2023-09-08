import { Nav } from './components/nav';
import { Home as HomeContainer } from './containers/home';
import { Details } from './containers/details';
import { ResultsList } from './containers/results-list';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles['main__contanier']}>
        <p>breadcrumb</p>
        <HomeContainer />
        <Details />
        <div className={styles['main__temp']}/>
        <ResultsList />
      </div>
    </main>
  )
}
