import { Header } from './components/Header'
import { FormTask } from './components/FormTask'
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
      <FormTask />
      </main>
    </div>
  )
}

