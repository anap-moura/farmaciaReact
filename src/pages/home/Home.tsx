import homeLogo from '../../assets/home.svg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-zinc-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>A sua saúde é a nossa prioridade! 💊🖤</h2>
              <p className='text-xl'>Para cada necessidade, conte com a Drogaria APMC. </p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-zinc-700 text-yellow-500 py-2 px-4'>Conheça nossos produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;