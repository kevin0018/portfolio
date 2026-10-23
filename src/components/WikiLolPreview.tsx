// A product excerpt made from wikiLoL's actual artwork and copy. The surrounding
// link opens the case study; these are not pretend interactive product controls.
export function WikiLolPreview() {
  return <div className="wiki-preview" data-ui aria-hidden="true">
    <div className="wiki-preview__bar">
      <span className="wiki-preview__brand"><span>ϟ</span>wikiLoL</span>
      <div><span>Search</span><span>Champions</span><span>Compare</span><span>Riot API</span><span>EN / ES</span></div>
    </div>
    <div className="wiki-preview__body">
      <img className="wiki-preview__art" src={`${import.meta.env.BASE_URL}assets/images/wikilol/ekko-hero.jpg`} alt="" width="1215" height="717" fetchPriority="high" />
      <div className="wiki-preview__copy">
        <p className="wiki-preview__title">Every player<br />leaves a<br /><span>mark</span> on the<br />Rift.</p>
        <p className="wiki-preview__description">Explore ranks, masteries, and recent champions from a single profile.</p>
        <div className="wiki-preview__search"><span>EUW⌄</span><span>Name#TAG</span><span>⌕ &nbsp; SEARCH PLAYER</span></div>
        <p className="wiki-preview__archive">Open champion archive &nbsp; →</p>
      </div>
    </div>
  </div>;
}
