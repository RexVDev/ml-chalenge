import { Nav } from './components/nav';
import { Home as HomeContainer } from './containers/home';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div>
        <HomeContainer />
      </div>
    </main>
  )
}
