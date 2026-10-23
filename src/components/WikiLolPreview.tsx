// Standalone transparent artwork; its native aspect ratio is preserved by the
// responsive project frame. The surrounding link opens the real case study.
const reference = `${import.meta.env.BASE_URL}assets/images/stage/wikilol-project-frame.png`;

export function WikiLolPreview() {
  return <div className="wiki-preview" aria-hidden="true">
    <img src={reference} alt="" draggable={false} />
  </div>;
}
