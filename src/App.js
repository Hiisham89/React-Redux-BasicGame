import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';
import { gameActions } from './store/game-slice';


function App() {
  const isauthen = useSelector((state)=>state.authentication.isAuthenticated);
  const playerchoice = useSelector((state)=>state.game.playerchoice);
  const pcchoice = useSelector((state)=>state.game.pcchoice);
  const result = useSelector((state)=>state.game.result);
  const playerwins = useSelector((state)=>state.game.playerwin);
  const pcwins = useSelector((state)=>state.game.pcwin);
  const dispatch = useDispatch();
  const handlePlayerChoice=(choice)=>{
    dispatch(gameActions.playerchoice(choice))
    dispatch(gameActions.setpcchoise());
    dispatch(gameActions.setresult());

  }
  //const playerchoice = useSelector((state)=>state.game.p);
  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={() => handlePlayerChoice('rock')}>Rock</button>
        <button onClick={() => handlePlayerChoice('paper')}>Paper</button>
        <button onClick={() => handlePlayerChoice('scissors')}>Scissors</button>
        {/* <button onClick={handleReset}>Reset</button>
       */}
      </div>
      {playerchoice && pcchoice && <p>You chose {playerchoice}, Computer chose {pcchoice}.</p>}
      {result && <h2>{result}</h2>}
      <p>Player Wins: {playerwins}</p>
      <p>Computer Wins: {pcwins}</p>
    </div>
    // <Fragment>
    //   {/* <Header />
    //  {!isauthen&& <Auth/>}
    //   {isauthen && <UserProfile />}
    // <Counter /> */}

    // </Fragment>
  );
}

export default App;
