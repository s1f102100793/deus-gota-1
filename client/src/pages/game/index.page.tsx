import { useState } from 'react';

interface Player {
  id: number;
  name: string;
  score: number;
}

interface Ball {
  id: number;
  value: number;
}

const GamePage = () => {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'Player 1', score: 0 },
    { id: 2, name: 'Player 2', score: 0 }
  ]);
  const [balls, setBalls] = useState<Ball[]>([
    { id: 1, value: 3 },
    { id: 2, value: 5 },
    { id: 3, value: 7 }
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const throwBall = (ballValue: number) => {
    setPlayers(players.map((player, index) => {
      if (index === currentPlayerIndex) {
        return { ...player, score: player.score + ballValue };
      }
      return player;
    }));
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
  };

  const checkWinner = () => {
    const maxScore = Math.max(...players.map(player => player.score));
    const winners = players.filter(player => player.score === maxScore);
    return winners.length === 1 ? winners[0].name : 'Draw';
  };

  return (
    <div>
      <h1>じゃんたま Game</h1>
      <div>
        {players.map(player => (
          <div key={player.id}>{player.name}: {player.score}</div>
        ))}
      </div>
      <div>
        {balls.map(ball => (
          <button key={ball.id} onClick={() => throwBall(ball.value)}>Throw Ball {ball.value}</button>
        ))}
      </div>
      <div>
        Winner: {checkWinner()}
      </div>
    </div>
  );
};

export default GamePage;
