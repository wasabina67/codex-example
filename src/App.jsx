import './App.css';



export default function App() {
  const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <div className="app">
      <header>
        <h1>九九の表 (1〜9)</h1>
        <p>行と列の見出しを参考に、各マスの計算結果を確認できます。</p>
      </header>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              {numbers.map((col) => (
                <th key={`col-${col}`} scope="col">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {numbers.map((row) => (
              <tr key={`row-${row}`}>
                <th scope="row">{row}</th>
                {numbers.map((col) => (
                  <td key={`${row}-${col}`}>{row * col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
