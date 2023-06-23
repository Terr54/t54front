import { backend } from "..";
import { ApiResponse, NewsLetterSubscription, PageCopy } from "../../domain/domain";
import { backendUrls } from "../urls";

export const subscribeToNewsLetter = (email: string, topic: string) => backend.get(backendUrls.newsletter.subscribe, {
    params: {
        email,
        topic
    }
});

export const getSubscriptions = (topic: string) => backend.get<ApiResponse<PageCopy<NewsLetterSubscription>>>(backendUrls.newsletter.subscriptions, {
    params: {
        topic
    }
});

