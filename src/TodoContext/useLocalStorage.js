import React from "react";
// 'TODO-APP-MAIN-V1'

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        try {
            let parsedItem;
            const localStorageItem = localStorage.getItem(itemName);
            
            if(!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorage.getItem(itemName));
            }
            setItem(parsedItem);
        } catch(error) {
            console.error(error);
        }
    }, []);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch(error) {
            console.error(error);
        }
    };

    return{ 
        item, 
        saveItem,
    };
}

export { useLocalStorage };