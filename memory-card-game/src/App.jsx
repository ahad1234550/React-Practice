import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader"
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {

  const { score, move, isGameComplete, initialGame, cards, handleCardClick } = useGameLogic(cardValues);

  return (
    <>
      <div className="app">
        <GameHeader score={score} moves={move} onReset={initialGame} />

        {isGameComplete && <WinMessage move={move} />}

        <div className="cards-grid">
          {cards.map((card) => (
            <Card card={card} onClick={handleCardClick} />
          ))}
        </div>

      </div>
    </>
  )
}

export default App
