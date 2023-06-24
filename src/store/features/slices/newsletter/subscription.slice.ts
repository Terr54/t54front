import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncState } from "../../../util";
import { ApiResponse, NewsLetterSubscription, PageCopy } from "../../../../domain/domain";
import { getSubscriptions } from "../../../../api/newsletter";

const initialState: AsyncState<PageCopy<NewsLetterSubscription>> = {
    loading: false
};

export const getSubscriptionsByTopic = createAsyncThunk('newsletter_subscription/by_topic', async (topic: string) => {
    const sub = await getSubscriptions(topic, 0);
    return sub?.data?.content;
})

const newsletterSlice = createSlice({
    name: 'newsletter_subscription',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getSubscriptionsByTopic.pending, (state) => {
            state.loading = true;
        })
        .addCase(getSubscriptionsByTopic.fulfilled, (state, action) => {
            state.loading = false;
            state.payload = action.payload;
        })
        .addCase(getSubscriptionsByTopic.rejected, (state) => {
            state.loading = false;
        })
    }
});


export default newsletterSlice.reducer;

