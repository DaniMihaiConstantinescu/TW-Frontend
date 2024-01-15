import styles from '@/css/dashboard.module.css'
import Header from './Header'
import MainFrame from './MainFrame'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard({ id }) {
  const [stack, setNewStack] = useState({});
  const { currentUser } = useAuth();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + '/stack/' + currentUser.uid + '/' + id
      );
      setNewStack(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
        // console.log("New Data");
      fetchData();
    }, 3500);

    return () => clearInterval(intervalId);
  }, [currentUser.uid, id]); 

  return (
    <div className={styles.mainContainer}>
      <Header stack={stack} />
      <MainFrame stack={stack} />
    </div>
  );
}
