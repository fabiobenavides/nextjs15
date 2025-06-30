import { createContext, useState, useEffect } from "react";


const NotificationContext = createContext({  
    notification: [],
    showNotification: (notificationData) => {},
    hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {

    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if (activeNotification 
            && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
            const timer = setTimeout(() => {
                hideNotification(null);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [activeNotification]);

    // Function to show notification
    // This function will be called from components to show notifications
    function showNotification(notificationData) {
        setActiveNotification(notificationData);
    }

    function hideNotification() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotification,
        hideNotification: hideNotification,
    };

    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    );
}


export default NotificationContext;