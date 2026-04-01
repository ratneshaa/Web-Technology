import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Cards</h1>

      <StudentCard 
        name="Rahul Sharma"
        department="Computer Science"
        marks="85"
      />

      <StudentCard 
        name="Ananya Rao"
        department="Information Technology"
        marks="90"
      />

      <StudentCard 
        name="Arjun Patel"
        department="Electronics"
        marks="78"
      />

    </div>
  );
}

export default App;