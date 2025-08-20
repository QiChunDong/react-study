import { useEffect, useState } from "react";

function Effect() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await res.json();
      setData(data.title);
      setLoading(false);
    }
    loadData();
  }, [id]);

  return (
    <>
      <h1>标题</h1>
      <div>{loading ? "加载中..." : data}</div>
      <div>
        <button onClick={() => setId(id + 1)}>更换</button>
      </div>
    </>
  );
}

export default Effect;
