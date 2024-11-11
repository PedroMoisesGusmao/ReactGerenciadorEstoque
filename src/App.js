import logo from './logo.svg';
import styles from './App.module.css';
import Card from './components/Card/Card';

function App() {
  return (
    <>
    <div className={styles.principal}>
      <Card title="FREE" free={true} />
      <Card title="PREMIUM" premium={true} />
      <Card title="PRO" pro={true} />
    </div>
    </>
  );
}

export default App;
