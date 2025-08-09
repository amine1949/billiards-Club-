import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import tournamentService from "./tournamentService.js";

export const fetchAllTournaments = createAsyncThunk(
    'tournament/fetchAllTournaments',
    async (_, thunkAPI) => {
        try{
            return await tournamentService.getAllTournament();
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

const initialState = {
    tournaments: [],
    isLoading: false,
    isError: null,
    isSuccess: false,
    message: '',
};

const tournamentSlice = createSlice({
    name: 'tournament',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTournaments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllTournaments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.tournaments = action.payload.map(tournament => ({
                    ...tournament,
                    date: new Date(tournament.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    }),
                }));
            })
            .addCase(fetchAllTournaments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.tournaments = [];
            });
    },
});

export const {reset} = tournamentSlice.actions;
export default tournamentSlice.reducer;