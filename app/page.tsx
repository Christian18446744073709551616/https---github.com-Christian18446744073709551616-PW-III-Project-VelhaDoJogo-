// pages/index.tsx
import Head from 'next/head';
import TicTacToe from './components/game';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Tic Tac Toe Game built with Next.js and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Tic Tac Toe</h1>
        <TicTacToe />
      </main>

      <footer>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
};

export default Home;
