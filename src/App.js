import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner";
import Layout from "./components/layout";
import TableData from "./components/table";
import { base_url } from "./api";
import Loader from "./components/loader";
import Footer from "./components/footer";

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let pageItem = 50;

  // api call
  useEffect(() => {
    fetch(`${base_url}`)
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        setApiData(item.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [pageItem]);

  const ErrorComponent=()=>{
    return(
      <div className="error_container">
        <h1>Something Went Wrong ! Please refresh the page</h1>
      </div>
    )
  }

  return (
    <Layout>
      {loading ? (
        <>
        {error && <ErrorComponent/>}
        <Loader />
        </>
      ) : (
        <>
          <Banner />
          <TableData data={apiData} pageSet={pageItem} loading={loading} />
          <Footer />
        </>
      )}
    </Layout>
  );
}

export default App;
