import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncState } from "../../../util";
import { ContactInbox, PageCopy } from "../../../../domain/domain";
import { getContactInbox } from "../../../../api/newsletter";

const initialState: AsyncState<PageCopy<ContactInbox>> = {
    loading: false
};

export const getInbox = createAsyncThunk('newsletter_inbox/get', async (page: number) => {
    const sub = await getContactInbox(page);
    return sub?.data?.content;
})

const inboxSlice = createSlice({
    name: 'newsletter_inbox',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getInbox.pending, (state) => {
            state.loading = true;
        })
        .addCase(getInbox.fulfilled, (state, action) => {
            state.loading = false;
            state.payload = action.payload;
        })
        .addCase(getInbox.rejected, (state) => {
            state.loading = false;
        })
    }
});


export default inboxSlice.reducer;

