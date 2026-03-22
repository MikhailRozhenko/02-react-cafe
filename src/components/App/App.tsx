import { useState } from 'react';
import type Votes from '../../types/votes';
import type { VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';

export default function App() {
  const [votes, setInVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setInVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVotes = () => {
    setInVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const hasVotes = votes.good + votes.neutral + votes.bad > 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={hasVotes}
      />
    </div>
  );
}
