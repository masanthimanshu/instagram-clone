import Card from "./card";
import { Details } from "./data/details";

function createEntry(userData) {
  return <Card key={userData.id} name={userData.name} img={userData.img} />;
}

export default function App() {
  return (
    <div>
      <dl>{Details.map(createEntry)}</dl>
    </div>
  );
}
