export const oddsDatabase = [
  // ===== VELDIG VANLIGE (LIVSTID) =====
  { id: 1, label: "Miste mobilen minst én gang i livet", probability: 0.80 },
  { id: 2, label: "Knuse mobilskjermen minst én gang i livet", probability: 0.70 },
  { id: 3, label: "Miste nøkler minst én gang i livet", probability: 0.75 },
  { id: 4, label: "Låse deg ute minst én gang i livet", probability: 0.55 },
  { id: 5, label: "Få hull i en tann i løpet av livet", probability: 0.85 },
  { id: 6, label: "Få en heftig forkjølelse hvert år i perioder av livet", probability: 0.95 },
  { id: 7, label: "Oppleve matforgiftning minst én gang i livet", probability: 0.40 },
  { id: 8, label: "Søle kaffe/energidrikk på noe viktig", probability: 0.60 },
  { id: 9, label: "Sende melding til feil person", probability: 0.65 },
  { id: 10, label: "Glemme PIN-koden og måtte resette", probability: 0.50 },

  // ===== HVERDAGS-UFLAKS =====
  { id: 11, label: "Miste bankkort minst én gang i livet", probability: 0.45 },
  { id: 12, label: "Miste AirPod eller ørepropp og aldri finne den igjen", probability: 0.35 },
  { id: 13, label: "Spille av lyd høyt offentlig ved en feil", probability: 0.30 },
  { id: 14, label: "Gå av på feil stopp og late som det var planen", probability: 0.40 },
  { id: 15, label: "Glemme hvor du parkerte og gå i sirkel", probability: 0.50 },
  { id: 16, label: "Stå i feil kø og tape minst 20 minutter", probability: 0.70 },
  { id: 17, label: "Oppleve at en oppdatering gjør alt verre", probability: 0.90 },
  { id: 18, label: "Miste data fordi du ikke tok backup", probability: 0.35 },
  { id: 19, label: "Slette en fil og innse at det var den viktigste", probability: 0.40 },
  { id: 20, label: "Glemme en avtale du selv foreslo", probability: 0.30 },

  // ===== SOSIALE “WTF”-TILFELDIGHETER =====
  { id: 21, label: "Møte en gammel bekjent i en tilfeldig by", probability: 0.10 },
  { id: 22, label: "Møte eksen tilfeldig i løpet av livet", probability: 0.20 },
  { id: 23, label: "Høre noen si navnet ditt uten at det var deg de mente", probability: 0.35 },
  { id: 24, label: "Møte noen med samme fornavn og samme bursdagsmåned", probability: 0.25 },
  { id: 25, label: "Møte noen med samme fødselsdato", probability: 1 / 365 },
  { id: 26, label: "To personer deler bursdag i en gruppe på 23 (birthday paradox)", probability: 0.507 },
  { id: 27, label: "Møte noen med samme navn og samme fødselsdato", probability: 1 / 1000000 },
  { id: 28, label: "Møte noen som har samme fødselsdato OG samme fornavn OG samme bransje", probability: 1 / 1000000000 },

  // ===== KROPP, HELSE, UHELL (LIVSTID) =====
  { id: 29, label: "Besvime minst én gang i livet", probability: 0.25 },
  { id: 30, label: "Brekk et bein i løpet av livet", probability: 0.35 },
  { id: 31, label: "Få sting minst én gang i livet", probability: 0.20 },
  { id: 32, label: "Trenge akutt legehjelp etter et uhell", probability: 0.30 },
  { id: 33, label: "Bli sendt til sykehus etter en ulykke", probability: 0.20 },
  { id: 34, label: "Trenge en akutt operasjon i løpet av livet", probability: 0.10 },
  { id: 35, label: "Få en kraftig allergisk reaksjon minst én gang", probability: 0.05 },
  { id: 36, label: "Sette noe i halsen og få panikk (men det går fint)", probability: 0.15 },
  { id: 37, label: "Miste stemmen rett før noe viktig", probability: 0.10 },

  // ===== TRANSPORT OG REISE (LIVSTID) =====
  { id: 38, label: "Være i en trafikkulykke (uansett alvorlighetsgrad)", probability: 0.25 },
  { id: 39, label: "Være i en mindre bilkollisjon", probability: 0.30 },
  { id: 40, label: "Være i en alvorlig trafikkulykke", probability: 0.05 },
  { id: 41, label: "Oppleve at bagasjen din forsvinner på flyplass", probability: 0.15 },
  { id: 42, label: "Miste passet eller oppdage passproblem rett før avreise", probability: 0.05 },
  { id: 43, label: "Bli stoppet i sikkerhetskontroll for “tilfeldig ekstra sjekk”", probability: 0.20 },

  // ===== DYR OG NATUR (LIVSTID) =====
  { id: 44, label: "Bli stukket av veps minst én gang i livet", probability: 0.75 },
  { id: 45, label: "Få kraftig reaksjon på vepsestikk", probability: 1 / 10000 },
  { id: 46, label: "Bli bitt av hund i løpet av livet", probability: 0.10 },
  { id: 47, label: "Bli alvorlig skadet av hund", probability: 1 / 50000 },
  { id: 48, label: "Dø av hundrelatert hendelse", probability: 1 / 7000000 },
  { id: 49, label: "Bli bitt av en edderkopp i løpet av livet", probability: 0.20 },
  { id: 50, label: "Bli bitt av slange", probability: 1 / 100000 },
  { id: 51, label: "Bli bitt av hai", probability: 1 / 11000000 },
  { id: 52, label: "Dø av hai", probability: 1 / 300000000 },
  { id: 53, label: "Dø av ku (ja, det skjer)", probability: 1 / 20000000 },

  // ===== TING SOM FALLER / “DETTE ER TULLETE, MEN MULIG” =====
  { id: 54, label: "Bli truffet av fallende is/snø fra tak", probability: 1 / 200000 },
  { id: 55, label: "Bli truffet av et fallende tre", probability: 1 / 5000000 },
  { id: 56, label: "Bli truffet av et fallende objekt i byen", probability: 1 / 2000000 },
  { id: 57, label: "Bli truffet av en golfball", probability: 1 / 500000 },
  { id: 58, label: "Bli truffet av en champagnekork", probability: 1 / 150000 },
  { id: 59, label: "Bli truffet av en kokosnøtt", probability: 1 / 10000000 },
  { id: 60, label: "Dø av en kokosnøtt", probability: 1 / 250000000 },

  // ===== LYN OG EKSTREM-UFLAKS =====
  { id: 61, label: "Se lyn slå ned veldig nært deg (innen ca. 50 meter)", probability: 1 / 500000 },
  { id: 62, label: "Bli truffet av lyn", probability: 1 / 15000000 },
  { id: 63, label: "Dø av lyn", probability: 1 / 20000000 },
  { id: 64, label: "Bli truffet av lyn to ganger", probability: 1 / 900000000 },
  { id: 65, label: "Bli truffet av lyn tre ganger", probability: 1 / 15000000000 },

  // ===== KOSMOS / ABSURD FLAX-UFLAKS =====
  { id: 66, label: "Bli truffet av meteoritt", probability: 1 / 1600000000 },
  { id: 67, label: "Bli truffet av meteoritt og overleve", probability: 1 / 2000000000 },
  { id: 68, label: "Bli truffet av romskrot", probability: 1 / 10000000000 },
  { id: 69, label: "Bli truffet av romskrot og overleve", probability: 1 / 20000000000 },

  // ===== DØDSFALL (GROVE LIVSTIDS-RISIKOER, IKKE LANDSPESIFIKKE) =====
  { id: 70, label: "Dø av drukning", probability: 1 / 1000000 },
  { id: 71, label: "Dø i flyulykke", probability: 1 / 11000000 },
  { id: 72, label: "Dø i heisulykke", probability: 1 / 10000000 },
  { id: 73, label: "Dø i bilulykke", probability: 1 / 10000 },

  // ===== MATEMATIKK-EVENTS (SUPER NYTTIG FOR Å DEKKE ODDS) =====
  { id: 74, label: "Kaste mynt 10 ganger og få kron hver gang", probability: 1 / 1024 },
  { id: 75, label: "Kaste mynt 12 ganger og få kron hver gang", probability: 1 / 4096 },
  { id: 76, label: "Kaste mynt 15 ganger og få kron hver gang", probability: 1 / 32768 },
  { id: 77, label: "Kaste mynt 18 ganger og få kron hver gang", probability: 1 / 262144 },
  { id: 78, label: "Kaste mynt 20 ganger og få kron hver gang", probability: 1 / 1048576 },
  { id: 79, label: "Kaste mynt 22 ganger og få kron hver gang", probability: 1 / 4194304 },
  { id: 80, label: "Kaste mynt 25 ganger og få kron hver gang", probability: 1 / 33554432 },
  { id: 81, label: "Kaste mynt 28 ganger og få kron hver gang", probability: 1 / 268435456 },
  { id: 82, label: "Kaste mynt 30 ganger og få kron hver gang", probability: 1 / 1073741824 },
  { id: 83, label: "Kaste mynt 32 ganger og få kron hver gang", probability: 1 / 4294967296 },
  { id: 84, label: "Kaste mynt 35 ganger og få kron hver gang", probability: 1 / 34359738368 },
  { id: 85, label: "Kaste mynt 40 ganger og få kron hver gang", probability: 1 / 1099511627776 },

  { id: 86, label: "Rulle en terning og få 6 seks ganger på rad", probability: 1 / 46656 },
  { id: 87, label: "Rulle en terning og få 6 åtte ganger på rad", probability: 1 / 1679616 },
  { id: 88, label: "Rulle en terning og få 6 ti ganger på rad", probability: 1 / 60466176 },

  // ===== “SYKE KOMBOER” (MULTIPLIKASJON) =====
  { id: 89, label: "Bli truffet av lyn og bli bitt av hund (samme liv)", probability: (1 / 15000000) * 0.10 },
  { id: 90, label: "Bli truffet av lyn og være i trafikkulykke (samme liv)", probability: (1 / 15000000) * 0.25 },
  { id: 91, label: "Bli bitt av hai og truffet av lyn (samme liv)", probability: (1 / 11000000) * (1 / 15000000) },
  { id: 92, label: "Bli truffet av meteoritt og lyn (samme liv)", probability: (1 / 1600000000) * (1 / 15000000) },
  { id: 93, label: "Bli truffet av romskrot og lyn (samme liv)", probability: (1 / 10000000000) * (1 / 15000000) },

  // ===== EKSTRA “WTF MEN IKKE UMULIG” =====
  { id: 94, label: "Overleve fall fra 10+ etasjer", probability: 1 / 20000000 },
  { id: 95, label: "Bli truffet av en ball i ansiktet på arrangement", probability: 1 / 100000 },
  { id: 96, label: "Få en fugl som bæsjer på deg minst én gang i livet", probability: 0.30 },
  { id: 97, label: "Få fuglebæsj på deg OG søle på klærne samme dag", probability: 0.30 * 0.60 },
  { id: 98, label: "Miste mobilen OG låse deg ute samme uke", probability: 0.80 * 0.55 * 0.02 }, // “samme uke” som ekstra sjeldenhetsfaktor
  { id: 99, label: "Bli truffet av lyn tre ganger OG fortsatt leve", probability: 1 / 20000000000 },
  { id: 100, label: "Bli truffet av lyn og meteoritt i samme liv", probability: (1 / 15000000) * (1 / 1600000000) },
];
