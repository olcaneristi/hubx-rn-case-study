import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface QuestionsState {
  questions: Questions[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk<Questions[]>(
  "questions/fetchQuestions",
  async () => {
    const response = await axios.get<Questions[]>("https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions");
    return response.data;
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong.";
      });
  },
});

export default questionsSlice.reducer;