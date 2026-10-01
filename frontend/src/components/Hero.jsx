import "../styles/Hero.css";
import DataSources from "./DataSources";
import ContextLayer from "./ContextLayer";
import AgentsPanel from "./AgentsPanel";
import OutcomesPanel from "./OutcomesPanel"

function Hero({ dataSources, agents }) {
    return (
        <section className="hero">
            <div className="hero__content">
                <p className="hero__eyebrow">The Enterprise Context Operating System</p>

                <h1 className="hero__title">
                    Every Enterprise Has Data.
                    <span className="hero__title-gradient">Every AI Needs Context.</span>
                </h1>

                <p className="hero__description">
                    ContextIQ connects enterprise data, AI agents, and business
                    decisions, transforming fragmented information into trusted context
                    and actionable intelligence.
                </p>

                <div className="hero__actions">
                    <button className="hero__btn hero__btn--primary">
                        Explore Platform →
                    </button>
                    <button className="hero__btn hero__btn--secondary">
                        Request a Demo
                    </button>
                </div>
            </div>

            <div className="hero__visual">
                <DataSources sources={dataSources} />
                <ContextLayer />
                <AgentsPanel agents={agents} />
                <OutcomesPanel />
            </div>
        </section>
    );
}

export default Hero;