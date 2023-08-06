import { createSlice } from "@reduxjs/toolkit";

const counterinitialState = {
  playerchoice: null,
  pcchoice: null,
  result: "",
  playerwin: 0,
  pcwin: 0,
  choices: ["rock", "paper", "scissors"],
};
const gameslice = createSlice({
  name: "game",
  initialState: counterinitialState,
  reducers: {
    playerchoice(state, action) {
      state.playerchoice = action.payload;
    },
    setpcchoise(state) {
     const getRandomChoice = () => state.choices[Math.floor(Math.random() * state.choices.length)];
     state.pcchoice = getRandomChoice();
    
    },
    setresult(state) {
      if (state.playerchoice === state.pcchoice) {
        state.result = "It's a tie!";
      } else if (
        (state.playerchoice === "rock" && state.pcchoice === "scissors") ||
        (state.playerchoice === "paper" && state.pcchoice === "rock") ||
        (state.playerchoice === "scissors" && state.pcchoice === "paper")
      ) {
        state.result = "You win!";
        state.playerwin = state.playerwin + 1;
      } else {
        state.result = "Computer wins!";
        state.pcwin = state.pcwin + 1;
      }
    },
  },
});

export const gameActions = gameslice.actions;
export default gameslice.reducer;
