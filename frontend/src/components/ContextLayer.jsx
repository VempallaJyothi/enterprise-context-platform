import "../styles/ContextLayer.css";

function ContextLayer() {
  return (
    <div className="context-layer">
      <div className="context-layer__tag">
        UNIFY
        <br />
        UNDERSTAND
        <br />
        GOVERN
      </div>

      <div className="context-layer__orb-wrapper">
        <div className="context-layer__glow"></div>
        <div className="context-layer__ring context-layer__ring--outer"></div>
        <div className="context-layer__ring context-layer__ring--middle"></div>
        <div className="context-layer__core">
          <span className="context-layer__title">ContextIQ</span>
          <span className="context-layer__subtitle">CONTEXT LAYER</span>
        </div>
      </div>

      <div className="context-layer__footer">
        TRUSTED CONTEXT
        <br />
        FOR AI
      </div>
    </div>
  );
}

export default ContextLayer;