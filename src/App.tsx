import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface LessonData {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <ul>
      {data?.lessons.map((lesson: LessonData) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
