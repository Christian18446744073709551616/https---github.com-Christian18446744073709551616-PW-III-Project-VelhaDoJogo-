// app/layout.tsx
import './styles/globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Tic Tac Toe</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
