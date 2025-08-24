import BrainrotCard from "./components/brainrot-card/BrainrotCard"
import "./App.css"

function App() {
  const brainrots = [
    {
      name: "Brainrot 1",
      image: "https://static.wikia.nocookie.net/character-stats-and-profiles/images/6/69/Lirili_Larila_v2.png",
      alt: "Card 1",
      rarity: [["Galaxy", "#00f"]],
      price: 100,
      mps: 5
    },
    {
      name: "Tralalero Tralala",
      image: "https://images.cults3d.com/VSyY3jKKi3zAG_246OpS54J3_8s=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/26588735/illustration-file/49a806c1-a349-4051-90db-a2e1a6e80bf9/Tralalero-Tralala.png",
      alt: "Card 2",
      rarity: [["Secret", "#0f0"]],
      price: 200,
      mps: 10
    },
    {
      name: "Brainrot 3",
      image: "https://via.placeholder.com/200x300",
      alt: "Card 3",
      rarity: [["Rare", "#f00"]],
      price: 300,
      mps: 20
    }
  ]

  return (
    <div className="content">
      {brainrots.map((b, i) => (
        <BrainrotCard
          key={i}
          BrainrotName={b.name}
          BrainrotImage={b.image}
          AltText={b.alt}
          BrainrotRarity={b.rarity}
          BrainrotPrice={b.price}
          BrainrotMoneyPerSecond={b.mps}
          style={{ animationDelay: `${i * 3}s` }}
        />
      ))}
    </div>
  )
}

export default App
