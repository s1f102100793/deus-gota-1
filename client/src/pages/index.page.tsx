import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from '@/components/BasicHeader/BasicHeader';
import { apiClient } from '@/utils/apiClient';
import { userAtom } from '@/atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [races, setRaces] = useState([]);

  const fetchRaces = async () => {
    const races = await apiClient.public.races.$get().catch(() => null);

    if (races !== null) setRaces(races);
  };

  useEffect(() => {
    fetchRaces();
  }, []);

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <ul className={styles.races}>
          {races.map((race) => (
            <li key={race.id} className={styles.race}>
              <div className={styles.raceName}>{race.name}</div>
              <div className={styles.raceTime}>{race.startTime}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
