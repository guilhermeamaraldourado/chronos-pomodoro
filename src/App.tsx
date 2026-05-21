import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading>
         Olá mundo! 
         <button>
          <TimerIcon />
         </button>
      </Heading>
      <Heading>Olá mundo 2!</Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cumque
        incidunt accusamus commodi quasi sit, doloribus in fugiat, repellat
        laudantium voluptas praesentium labore dolore unde! Aliquam, dolorem! A,
        quia rerum!
      </p>
    </>
  );
}
