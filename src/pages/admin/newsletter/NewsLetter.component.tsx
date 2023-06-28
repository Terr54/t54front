import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "../../../store";
import { getSubscriptionsByTopic } from "../../../store/features/slices/newsletter/subscription.slice";
import { useTranslation } from "react-i18next";
import classes from './newsletter.module.css';
import { getInbox } from "../../../store/features/slices/newsletter/inbox.slice";

export const ContactList = () => {
    const { t } = useTranslation()
    const newsletterSubscription = useSelector(state => state.newsletterSubscription.payload);
    const newsletterInbox = useSelector(state => state.newsletterInbox.payload);

    const dispatch = useDispatch();
    const effectRef = useRef(false);
    useEffect(() => {
        if (!effectRef.current) {
            dispatch(getSubscriptionsByTopic('weekly-info,welcome'));
            dispatch(getInbox(0));
        }
        effectRef.current = true;
    }, [])
    return (
            <>
                <div className={classes.tableContainer}>
                <h3>{t('newsletter-subscriptions')}</h3>
                {
                    newsletterSubscription?.content && newsletterSubscription?.content?.length > 0 ? (
                        <table className={classes.table}>
                            <thead className={classes.tHead}>
                                <tr>
                                    <th>{t('date')}</th>
                                    <th>{t('email')}</th>
                                    <th>{t('topic')}</th>
                                </tr>
                            </thead>
                            <tbody className={classes.tableBody}>
                                {
                                    newsletterSubscription?.content?.map(s => (
                                        <tr>
                                            <td>{s.createdAt ? new Date(s.createdAt)?.toLocaleDateString() : ''}</td>
                                            <td>{s.email}</td>
                                            <td>{t(s.topic)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : null
                }
            </div>
            <div className={classes.tableContainer}>
                <h3>{t('contact-forms')}</h3>
                {
                    newsletterInbox?.content && newsletterInbox?.content?.length > 0 ? (
                        <table className={classes.table}>
                            <thead className={classes.tHead}>
                                <tr>
                                    <th>{t('date')}</th>
                                    <th>{t('email')}</th>
                                    <th>{t('subject')}</th>
                                    <th>{t('message')}</th>
                                </tr>
                            </thead>
                            <tbody className={classes.tableBody}>
                                {
                                    newsletterInbox?.content?.map(s => (
                                        <tr>
                                            <td>{s.createdAt ? new Date(s.createdAt)?.toLocaleDateString() : ''}</td>
                                            <td>{s.email}</td>
                                            <td>{t(s.subject)}</td>
                                            <td><p>{s.message}</p></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : null
                }
            </div>
            </>
    )
}

export default ContactList;
