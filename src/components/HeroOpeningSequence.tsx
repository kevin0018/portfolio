type HeroOpeningSequenceProps = {
  words: readonly string[];
  label: string;
};

export function HeroOpeningSequence({words, label}: HeroOpeningSequenceProps) {
  const range = `01—${String(words.length).padStart(2, "0")}`;
  const loopWords = words.length > 0 ? [...words, words[0]] : [];

  return (
    <div className="hero-role" aria-label={label}>
      <span className="hero-role__index" aria-hidden="true">{range}</span>
      <span className="hero-role__window" aria-hidden="true">
        <span className="hero-role__track">
          {loopWords.map((word, index) => <span key={`${word}-${index}`}>{word}</span>)}
        </span>
      </span>
      <span className="hero-role__static">{words.join(" · ")}</span>
      <span className="hero-role__rule" aria-hidden="true" />
    </div>
  );
}
