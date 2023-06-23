import { getRacers } from '@/api/racers';
import { useRacer } from '@/hooks/useRacer';
import { initRacer } from '@/utils/initRacer';
import { useQuery } from 'react-query';
import Button from '../atoms/Button';
import SimpleText from '../atoms/SimpleText';
import ListPanel from '../atoms/ListPanel';
import RacerCard from '../molecules/RacerCard';
import { useRace } from '@/hooks/useRace';

export const Home = () => {
  const { raceReady, setRaceReady, raceStatus, startRace } = useRace();
  const { racers, setRacers } = useRacer();

  const racersQuery = useQuery({
    queryKey: ['racers'],
    queryFn: () => {
      getRacers().then((data) => {
        setRacers(data ? data.map(initRacer) : []);
        setRaceReady(true);
      });
    },
    enabled: false,
  });

  if (racersQuery.status === 'error') {
    return <h1>{JSON.stringify(racersQuery.error)}</h1>;
  }

  return (
    <div className="container border w-full h-full mt-16 mx-auto flex flex-col items-center justify-center p-10">
      <h1 className="text-xl font-bold">Welcome to the Race !</h1>
      <div className="flex items-center justify-center mt-4 mb-4">
        <SimpleText size="lg" color="black">
          Race Status: {raceStatus}
        </SimpleText>

        {raceReady && (
          <Button
            label="RACE!"
            type="button"
            onClick={startRace}
            disabled={!raceReady}
            style={{ marginLeft: '20px' }}
          />
        )}
      </div>

      {racers.length > 0 && (
        <SimpleText size="lg" color="black">
          Racers
        </SimpleText>
      )}

      <ListPanel className="max-w-xs">
        {racers &&
          racers.map((racer) => <RacerCard racer={racer} key={racer.name} />)}

        {racersQuery.status === 'loading' && (
          <SimpleText size="md" color="black">
            Loading...
          </SimpleText>
        )}
      </ListPanel>

      <Button
        label="GET RACERS"
        type="button"
        onClick={() => racersQuery.refetch()}
      />
    </div>
  );
};
