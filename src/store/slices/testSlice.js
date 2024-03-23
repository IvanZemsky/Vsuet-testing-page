import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
   currentTest: {},
   currentQuestionIndex: 0,
   currentResult: [], // {questionIndex, selectedAnswerIndex}
   currentResultCounter: 0,
   results: [], // {testId, resultCounter, {questionIndex, selectedAnswerIndex}[]}
};

const testSlice = createSlice({
   name: "test",
   initialState,
   reducers: {
      setCurrentTest(state, action) {
         state.currentTest = action.payload;
         console.log(state.currentTest);
      },

      nextQuestion(state) {
         state.currentQuestionIndex++;
         console.info(current(state));
      },

      addToCurrentResult(state, action) {
         const { selectedAnswerIndex } = action.payload;
   
         const currentAnswer = state.currentTest.questions[state.currentQuestionIndex]
         const answerScore = currentAnswer.answers[selectedAnswerIndex].score
         
         state.currentResultCounter += answerScore;

         state.currentResult.push({
            questionIndex: state.currentQuestionIndex,
            selectedAnswerIndex: +selectedAnswerIndex,
         });

         console.info(current(state.currentResult));
      },

      addToResults(state) {
         const resultIndex = state.results.findIndex(
            (result) => result.testId === state.currentTest.id
         );
         const result = {
            testId: state.currentTest.id,
            resultCounter: state.currentResultCounter,
            results: state.currentResult,
         };

         if (resultIndex === -1) {
            state.results.push(result);
         } else {
            state.results[resultIndex] = result;
         }
      },

      clearCurrentTestState: (state) => {
         return {
            ...initialState,
            results: state.results,
         };
      },
   },
});

export default testSlice;

export const {
   setCurrentTest,
   nextQuestion,
   addToCurrentResult,
   addToResults,
   clearCurrentTestState,
} = testSlice.actions;