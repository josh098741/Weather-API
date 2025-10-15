import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return(
    <>
      <div className=" min-h-screen flex flex-col">
        <header>
          <Header />
        </header>
        <main className='flex-grow'>
          <Body />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
        
    </>
  );
}

export default App
