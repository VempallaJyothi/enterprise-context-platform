def answer_question(question: str, context: dict) -> dict:
    """Mock LLM. Replace the body of this function with a real provider later.

    context contains: data_sources (list of names), agents (list of dicts),
    summary (dict or None), classification (list of label/confidence dicts).
    """
    q = question.lower()
    sources_used = []
    parts = []

    if any(word in q for word in ("source", "connect", "database", "system")):
        names = ", ".join(context["data_sources"]) or "none yet"
        parts.append(f"The platform currently connects these data sources: {names}.")
        sources_used.append("data_sources table")

    if any(word in q for word in ("agent", "who", "analyst", "governance", "insight")):
        lines = [f"{a['name']} ({a['description'].lower()})" for a in context["agents"]]
        parts.append("Available AI agents: " + "; ".join(lines) + ".")
        sources_used.append("agents table")

    if any(word in q for word in ("coverage", "how many", "total", "assets", "summary", "stats")):
        s = context["summary"]
        if s:
            parts.append(
                f"The platform tracks {s.data_sources}+ data sources and "
                f"{s.metadata_assets} metadata assets, with {s.coverage}% coverage "
                f"and {s.ai_agents} AI agents."
            )
            sources_used.append("summary table")

    if context["classification"]:
        top = context["classification"][0]
        if top["confidence"] >= 0.5 or not parts:
            parts.append(
                f"Based on the classifier, this topic looks like "
                f"{top['label']} data ({round(top['confidence'] * 100)}% confidence)."
            )
            sources_used.append("FastText classifier")

    if not parts:
        parts.append(
            "I can answer questions about the data sources, AI agents, platform "
            "statistics, or the sensitivity of a kind of data. Try asking: "
            "'Which data sources are connected?'"
        )

    return {"answer": " ".join(parts), "sources": sources_used}