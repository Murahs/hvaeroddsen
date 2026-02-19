// src/utils/oddsEngine.js
import { oddsDatabase } from "../data/oddsData";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function parseOddsInput(raw) {
  const cleaned = String(raw ?? "")
    .trim()
    .replace(/\s+/g, "")
    .replace(",", ".");

  if (!cleaned) return { ok: false, error: "Skriv inn oddsen din først." };

  const value = Number(cleaned);
  if (!Number.isFinite(value)) return { ok: false, error: "Det der ser ikke ut som et tall." };
  if (value <= 1) return { ok: false, error: "Odds må være større enn 1.00. Ellers er det bare selvtillit." };

  return { ok: true, value };
}

export function getProbabilityFromOdds(oddsInput) {
  const parsed = parseOddsInput(oddsInput);
  if (!parsed.ok) return null;
  return 1 / parsed.value;
}

export function formatProbability(p) {
  if (!Number.isFinite(p) || p <= 0) return "≈ 0%";
  if (p >= 1) return "≈ 100%";

  // Veldig liten? Vis som 1 av N
  if (p < 0.001) {
    const n = Math.round(1 / p);
    return `ca. 1 av ${n.toLocaleString("no-NO")}`;
  }

  // Ellers prosent
  const pct = p * 100;
  if (pct >= 10) return `ca. ${pct.toFixed(1).replace(".", ",")}%`;
  if (pct >= 1) return `ca. ${pct.toFixed(2).replace(".", ",")}%`;
  return `ca. ${pct.toFixed(3).replace(".", ",")}%`;
}

function buildDynamicMathEvents(userProbability) {
  const events = [];
  const targetOdds = 1 / userProbability;

  // Coin flips: 1 / 2^k
  const approxK = Math.log2(targetOdds);
  const kMin = clamp(Math.floor(approxK) - 8, 8, 60);
  const kMax = clamp(Math.ceil(approxK) + 8, 8, 60);

  for (let k = kMin; k <= kMax; k += 1) {
    events.push({
      id: `coin-${k}`,
      probability: 1 / Math.pow(2, k),
      text: `Kaste mynt ${k} ganger og få kron hver gang`,
    });
  }

  // Dice streak: 1 / 6^k
  const approxKD = Math.log(targetOdds) / Math.log(6);
  const dMin = clamp(Math.floor(approxKD) - 5, 3, 20);
  const dMax = clamp(Math.ceil(approxKD) + 5, 3, 20);

  for (let k = dMin; k <= dMax; k += 1) {
    events.push({
      id: `dice-${k}`,
      probability: 1 / Math.pow(6, k),
      text: `Rulle en terning og få 6, ${k} ganger på rad`,
    });
  }

  // Birthday paradox-ish: minst to deler bursdag i gruppe n
  for (let n = 15; n <= 60; n += 5) {
    const approx = 1 - Math.exp(-(n * (n - 1)) / (2 * 365));
    events.push({
      id: `bday-${n}`,
      probability: approx,
      text: `Minst to personer deler bursdag i en gruppe på ${n}`,
    });
  }

  return events;
}

export function getMoreLikelyEvents(oddsInput, count = 5) {
  const parsed = parseOddsInput(oddsInput);
  if (!parsed.ok) {
    return {
      ok: false,
      error: parsed.error,
      odds: null,
      probability: null,
      results: [],
    };
  }

  const odds = parsed.value;
  const pUser = 1 / odds;

  const staticEvents = oddsDatabase.map((e) => ({
    id: e.id,
    text: e.label,
    probability: e.probability,
    kind: "real",
  }));

  const dynamicEvents = buildDynamicMathEvents(pUser).map((e) => ({
    ...e,
    kind: "math",
  }));

  const all = [...staticEvents, ...dynamicEvents].filter(
    (e) => Number.isFinite(e.probability) && e.probability > 0 && e.probability <= 1
  );

  const candidates = all
    .filter((e) => e.probability > pUser)
    .sort((a, b) => a.probability - b.probability); // nærmest over først

  // 1) Ta først "real life" events
  const real = candidates.filter((e) => e.kind === "real");

  // 2) Matte er kun backup (maks 1 stk)
  const math = candidates.filter((e) => e.kind === "math");

  const picked = [];
  const seen = new Set();

  function addUnique(list, maxToAdd) {
    for (const e of list) {
      if (picked.length >= count) break;
      if (maxToAdd !== undefined && maxToAdd <= 0) break;

      if (!seen.has(e.id)) {
        picked.push(e);
        seen.add(e.id);
        if (maxToAdd !== undefined) maxToAdd -= 1;
      }
    }
  }

  addUnique(real);          // fyll så mye som mulig med ekte ting
  addUnique(math, 1);       // maks 1 matte-ting hvis vi mangler
  // Hvis vi fortsatt mangler, fyll med mest sannsynlige REAL først, så MATH
  if (picked.length < count) {
    const realMostLikely = staticEvents.slice().sort((a, b) => b.probability - a.probability);
    const mathMostLikely = dynamicEvents.slice().sort((a, b) => b.probability - a.probability);

    addUnique(realMostLikely);
    addUnique(mathMostLikely);
  }

  // Sikkerhet: alltid riktig antall
  const final = picked.slice(0, count);

  return {
    ok: true,
    error: null,
    odds,
    probability: pUser,
    results: final,
  };
}
