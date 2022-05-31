import '../css/home.css';

export default function Home() {
  return (
    <main>
      <h2 style={{ color: 'red', textAlign: 'center' }}>Welcome to AbraMaths!</h2>
      <p style={{ textAlign: 'center', fontSize: '20px' }}>
        Here you will get to experience the magic that is Maths!
        <br />
        <br />
        Use the calculator to make all the basic maths calculation.
        <br />
        <br />
        You also get to read a random maths quote!
      </p>
      <div id="infinity" />
    </main>
  );
}
