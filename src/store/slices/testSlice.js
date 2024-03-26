import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
   currentTest: {},
   currentQuestionIndex: 0,
   isStarted: false,
   currentResult: [], // {questionIndex, selectedAnswerIndex}
   currentResultCounter: 0,
   results: [], // {testId, resultCounter, {questionIndex, selectedAnswerIndex}[]}
};

const testSlice = createSlice({
   name: "test",
   initialState,
   reducers: {
      setIsStarted(state, action) {
         state.isStarted = action.payload;
      },

      setCurrentTest(state, action) {
         state.currentTest = action.payload;
      },

      nextQuestion(state) {
         state.currentQuestionIndex++;
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
            isStarted: state.isStarted
         };
      },
   },
});

export default testSlice;

export const {
   setIsStarted,
   setCurrentTest,
   nextQuestion,
   addToCurrentResult,
   addToResults,
   clearCurrentTestState,
} = testSlice.actions;
