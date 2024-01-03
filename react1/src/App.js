import React, { useState, useEffect } from "react";
import "./App.css";
import StudentList from "./Components/Students/StudentList";

const STU_DATA = [];

function App() {
  const [stuData, setStuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 组件一渲染就开始向服务器请求数据
  useEffect(() => {
    setLoading(true);
    setError(null)
    // fetch在执行的时候报错 then也会执行
    fetch("http://127.0.0.1:90/api/student")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        setLoading(false);
        throw new Error("数据加载错误！");
      })
      .then((json) => {
        setStuData(json);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {!loading && !error ? <StudentList stus={stuData} /> : ""}
      {loading ? "正在加载" : ""}
      {error ? "数据加载出错" : ""}
    </div>
  );
}

export default App;
