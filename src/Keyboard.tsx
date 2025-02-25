import styles from './Keyboard.module.css'

const KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  
type KeyboardProps={
    disabled?: boolean
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter:(letter:string)=>void
}

export function Keyboard({activeLetter, disabled = false,inactiveLetters,addGuessedLetter}:KeyboardProps) {
  return (<div style={{
    display:"grid", 
    gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr)",
    gap:".5rem"
    }}
    >
    {KEYS.map(key =>{
        const isActive = activeLetter.includes(key)
        const isInActive = inactiveLetters.includes(key)

        return (<button 
        onClick={() => addGuessedLetter(key)}
        className={`${styles.btn} ${isActive ? styles.active : ""}
        ${isInActive ? styles.inactive: ""
        }`} 
        disabled ={isInActive||isActive || disabled}
        key={key}
        >
          {key}
        </button>
        ) 
    })}</div>
)
}