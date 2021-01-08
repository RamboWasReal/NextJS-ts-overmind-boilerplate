import {useOvermind} from '../overmind';

export enum FrequencyEnum {
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Daily = 'Daily',
}

interface User {
  name: string;
  age: number;
  hobbies: Array<{
    name: string;
    frequency: FrequencyEnum
  }>
}

interface Props {
  users: User[];
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

function buildFrequency(freqency: FrequencyEnum): string {
  switch (freqency) {
    case FrequencyEnum.Daily:
      return 'Tout les jours';
    case FrequencyEnum.Monthly:
      return 'A chaque mois';
    case FrequencyEnum.Weekly:
      return 'A toute les semaines';
    default:
      return 'Rien'
  }
}

export default function HelloWorld(props: Props) {
  const { actions } = useOvermind()

  return (
    <div>
      <button onClick={() => actions.increment(10)}>+</button>
      <button onClick={() => actions.decrement(5)}>-</button>

      {props.users.map((user, i) => (
        <div key={i}>
          <h1>{user.name}</h1>
          <br/>
          <ul>
            {user.hobbies.map((h, index) => (
              <li key={i}>
                {h.name}
                <br/>
                Frequency: {buildFrequency(h.frequency)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
