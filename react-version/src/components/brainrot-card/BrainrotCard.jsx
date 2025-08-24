export default function BrainrotCard({
  BrainrotName = "",
  BrainrotImage = "",
  AltText = "",
  BrainrotRarity = [["Rarity", "#COLOR"]],
  BrainrotPrice = 0,
  BrainrotMoneyPerSecond = 0,
  style = {}
}) {
  return (
    <div className="brainrot-card" style={style}>
      {BrainrotRarity.map(([name, color], index) => (
        <div key={index} style={{ color }}>
          {name}
        </div>
      ))}
      <h3>{BrainrotName}</h3>
      <img src={BrainrotImage} alt={AltText} />
      <span>${BrainrotMoneyPerSecond}/s</span>
      <span>${BrainrotPrice}</span>
    </div>
  )
}
