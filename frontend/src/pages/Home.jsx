import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { fetchSummary, fetchDataSources, fetchAgents } from "../services/api";
import AdminPanel from "../components/AdminPanel";
import { useAuth } from "../context/AuthContext";
import Classifier from "../components/Classifier";
import AskPanel from "../components/AskPanel";

function Home() {
  const { isLoggedIn } = useAuth();
  const [summary, setSummary] = useState(null);
  const [dataSources, setDataSources] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadData(showSpinner = true) {
  if (showSpinner) {
    setLoading(true);
  }
  setError(null);

    try {
      const [summaryData, sourcesData, agentsData] = await Promise.all([
        fetchSummary(),
        fetchDataSources(),
        fetchAgents(),
      ]);

      setSummary(summaryData);
      setDataSources(sourcesData);
      setAgents(agentsData);
    } catch (err) {
      setError("We could not reach the server. Please check that the backend is running.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => loadData()} />;
  }

 return (
  <>
    <Hero dataSources={dataSources} agents={agents} />
    {isLoggedIn && (
      <AdminPanel dataSources={dataSources} onChanged={() => loadData(false)} />
    )}
    <Classifier />
    <AskPanel />
    <Dashboard summary={summary} />
  </>
);
}

export default Home;