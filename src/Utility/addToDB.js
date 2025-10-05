const getStoredBook = () => {
    const storedBook = localStorage.getItem('readList')
    if (storedBook) {
        const storedBookData = JSON.parse(storedBook);
        return storedBookData;
    }
    else {
        return [];
    }
}

const addToStoreBook = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert('ID Already excit')
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data)
    }
}

export { addToStoreBook };