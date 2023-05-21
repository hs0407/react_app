import styles from '../styles/Home.module.css'

export function SubTitle(props) {
  return (
    <>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>

      {props.page} Page
    </>
  )
}
