import {useState} from 'react';
import HelloWorld, {FrequencyEnum} from '../components/HelloWorld';
import {sum} from '../lib/sum';
import {useOvermind} from '../overmind';

export default function Home() {
    const {state} = useOvermind();
    const [value, setValue] = useState<number>()

    return (
        <div style={{maxWidth: 500, margin: '0 auto'}}>
            <h1>Value: {state.value}</h1>

            <HelloWorld
                increment={v => setValue(sum(value, v))}
                decrement={v => setValue(value - v)}
                users={[
                    {
                        name: 'Bob',
                        age: 20,
                        hobbies: [
                            {
                                name: 'Hockey',
                                frequency: FrequencyEnum.Daily,
                            }
                        ]
                    },
                    {
                        name: 'Luc',
                        age: 30,
                        hobbies: [
                            {
                                name: 'Star Wars',
                                frequency: FrequencyEnum.Monthly,
                            }
                        ]
                    }
                ]}/>
        </div>
    )
}
