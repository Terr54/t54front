import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "../../../store";
import { getSubscriptionsByTopic } from "../../../store/features/slices/newsletter/subscription.slice";
import { useTranslation } from "react-i18next";
import classes from './newsletter.module.css';

export const ContactList = () => {
    const { t } = useTranslation()
    const newsletterSubscription = useSelector(state => state.newsletterSubscription.payload);
    const dispatch = useDispatch();
    const effectRef = useRef(false);
    useEffect(() => {
        if (!effectRef.current) {
            dispatch(getSubscriptionsByTopic('weekly-info,welcome'));
        }
        effectRef.current = true;
    }, [])
    return (
            <div className={classes.tableContainer}>
                <h3>{t('newsletter-subscriptions')}</h3>
                {
                    newsletterSubscription?.content && newsletterSubscription?.content?.length > 0 ? (
                        <table className={classes.table}>
                            <thead className={classes.tHead}>
                                <tr>
                                    <th>{t('email')}</th>
                                    <th>{t('topic')}</th>
                                    <th>{t('date')}</th>
                                </tr>
                            </thead>
                            <tbody className={classes.tableBody}>
                                {
                                    newsletterSubscription?.content?.map(s => (
                                        <tr>
                                            <td>{s.email}</td>
                                            <td>{t(s.topic)}</td>
                                            <td>{s.createdAt ? new Date(s.createdAt)?.toLocaleDateString() : ''}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : null
                }
            </div>
    )
}

export default ContactList;
