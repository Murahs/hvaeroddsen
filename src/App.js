import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getMoreLikelyEvents, formatProbability } from "./utils/oddsEngine";
import logo from "./assets/images/ny_logo.png";


function App() {
  const [oddsInput, setOddsInput] = useState("");
  const [statusLine, setStatusLine] = useState("Skriv inn oddsen din. Jeg skal være helt ærlig.");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const judgingLines = useMemo(
    () => [
      "Ok… jeg regner.",
      "Dette lukter håp, ikke matte.",
      "Casino-gudene hvisker.",
      "Jeg prøver å være snill, men statistikken nekter.",
      "Vent litt… jeg finner noe som faktisk er mer sannsynlig."
    ],
    []
  );

  function handleGenerate() {
    setIsLoading(true);
    setResults([]);

    let step = 0;
    const timer = setInterval(() => {
      setStatusLine(judgingLines[Math.floor(Math.random() * judgingLines.length)]);
      step += 1;

      if (step >= 3) {
        clearInterval(timer);

        const out = getMoreLikelyEvents(oddsInput, 5);

        if (!out.ok) {
          setStatusLine(out.error);
          setIsLoading(false);
          return;
        }

        const formatted = out.results.map((r) => {
          const pText = formatProbability(r.probability);
          return `✅ ${r.text} (${pText})`;
        });

        const userPText = formatProbability(out.probability);
        setStatusLine(`Oddsen din tilsvarer ${userPText}. Her er 5 ting som er mer sannsynlig:`);

        setResults(formatted);
        setIsLoading(false);
      }
    }, 320);
  }

  return (
    <div className="page">
      <div className="shell">
        <div className="headerRow">
          <div className="brand">
            <img src={logo} alt="Hva er Oddsen logo" className="logoImage" />
            <div>
              <p className="brandTitle">Hva er Oddsen?</p>
              <p className="brandTag">En liten reality check, bare for deg</p>
            </div>
          </div>
          <div className="pill">Odds inn → fakta ut</div>
        </div>

        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="heroInner">
            <h1 className="title">Sjekk bongen din</h1>
            <p className="subtitle">
              Skriv inn total odds fra Norsk Tipping. Du får 5 hendelser med høyere sannsynlighet enn at kupongen går inn.
            </p>

            <div className="inputRow">
              <input
                className="input"
                placeholder="Eks: 11382.83"
                value={oddsInput}
                onChange={(e) => setOddsInput(e.target.value)}
              />

              <motion.button
                className="button"
                onClick={handleGenerate}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isLoading}
              >
                {isLoading ? "Regner…" : "Kjør"}
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={statusLine}
                className="statusLine"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {statusLine}
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="results"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
              }}
            >
              <AnimatePresence>
                {results.map((text, idx) => (
                  <motion.div
                    key={`${idx}-${text}`}
                    className="resultItem"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="footerNote">
              Tallene er estimater. Ikke sats penger du ikke har råd til å tape.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
