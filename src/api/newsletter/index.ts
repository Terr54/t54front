import { backend } from "..";
import { ApiResponse, ContactInbox, ContactInboxRequest, NewsLetterSubscription, PageCopy } from "../../domain/domain";
import { backendUrls } from "../urls";

export const subscribeToNewsLetter = (email: string, topic: string) => backend.get(backendUrls.newsletter.subscribe, {
    params: {
        email,
        topic
    }
});

export const getSubscriptions = (topic: string, page: number) => backend.get<ApiResponse<PageCopy<NewsLetterSubscription>>>(backendUrls.newsletter.subscriptions, {
    params: {
        topic,
        size: 100,
        page,
    }
});
export const getContactInbox = (page: number) => backend.get<ApiResponse<PageCopy<ContactInbox>>>(backendUrls.newsletter.inbox, {
    params: {
        page,
        size: 100
    }
});

export const submitContactForm = (data: Partial<ContactInboxRequest>) => backend.post<ApiResponse<ContactInbox>>(backendUrls.newsletter.contact, data);

