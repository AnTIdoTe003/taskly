import  { useEffect, useState } from "react";
import axios from "axios";
const TestPage = () => {
  const [responseData, setResponseData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res?.data);
      setResponseData(res?.data);
    } catch (error) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {responseData?.map((ele, index) => {
        return <p key={index}>{ele?.title}</p>;
      })}
    </div>
  );
};

export default TestPage;
