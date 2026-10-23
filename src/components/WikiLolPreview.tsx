// The project presentation is the exact approved artwork, including its mark
// and beveled screen frame, cropped to a transparent standalone asset.
// SVG coordinates retain its placement. The link opens the real case study.
const reference = `${import.meta.env.BASE_URL}assets/images/stage/wikilol-project-frame.png`;

export function WikiLolPreview() {
  return <div className="wiki-preview" aria-hidden="true">
    <svg className="wiki-preview__desktop" viewBox="0 80 1536 832" preserveAspectRatio="none">
      <image href={reference} x="520" y="85" width="1000" height="740" />
    </svg>
    <svg className="wiki-preview__mobile" viewBox="520 85 1000 740">
      <image href={reference} x="520" y="85" width="1000" height="740" />
    </svg>
  </div>;
}
