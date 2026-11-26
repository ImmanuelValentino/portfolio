type ArtworkStyle = "garden" | "ledger" | "journal";

export default function ProjectArtwork({ style }: { style: ArtworkStyle }) {
  return (
    <div className={`project-art project-art--${style}`} aria-hidden="true">
      <div className="art-window">
        <div className="art-toolbar"><span /><span /><span /></div>
        {style === "garden" && (
          <div className="garden-layout">
            <div className="garden-copy"><i>RUANG HIJAU KOTA</i><b>Temukan jeda<br />di dekatmu.</b><span /></div>
            <div className="garden-map"><span /><span /><span /><span /><b /></div>
          </div>
        )}
        {style === "ledger" && (
          <div className="ledger-layout">
            <div className="ledger-sidebar"><b>N.</b><span /><span /><span /><span /></div>
            <div className="ledger-main"><i>OVERVIEW</i><b>Good morning.</b><div className="ledger-total"><small>Total balance</small><strong>$24,680.50</strong><span>+ 8.4%</span></div><div className="ledger-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div></div>
          </div>
        )}
        {style === "journal" && (
          <div className="journal-layout"><i>THE SLOW NOTES · VOL. 01</i><b>On paying<br />attention.</b><span /><small>Words for quieter days<br />and the things we keep.</small></div>
        )}
      </div>
      <span className="art-index">{style === "garden" ? "01" : style === "ledger" ? "02" : "03"}</span>
    </div>
  );
}