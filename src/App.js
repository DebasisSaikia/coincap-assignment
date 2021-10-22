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
      .catch((err) => console.log(err));
  }, [pageItem]);

  return (
    <Layout>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Banner />
          <TableData data={apiData} pageSet={pageItem} loading={loading} />
          <Footer/>
        </>
      )}
    </Layout>
  );
}

export default App;
