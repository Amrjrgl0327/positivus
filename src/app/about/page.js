import Image from "next/image";

function Header() {
  return <h1>My website</h1>;

}

function Footer () {
  return (
    <footer>Thank you for visiting!</footer>
  );
}

function App () {
  return (
    <div>
      <header/>
      <p>Welcome</p>
      <footer/>
    </div>
  );
}

export default App;