// The project presentation is the exact approved artwork, including its mark
// and beveled screen frame. SVG viewports expose that fragment without editing
// or regenerating its pixels. The surrounding link opens the real case study.
const reference = `${import.meta.env.BASE_URL}assets/images/stage/wikilol-concept-source.png`;

export function WikiLolPreview() {
  return <div className="wiki-preview" aria-hidden="true">
    <svg className="wiki-preview__desktop" viewBox="0 80 1536 832" preserveAspectRatio="none">
      <image href={reference} width="1536" height="1024" />
    </svg>
    <svg className="wiki-preview__mobile" viewBox="520 85 1000 740">
      <image href={reference} width="1536" height="1024" />
    </svg>
  </div>;
}
