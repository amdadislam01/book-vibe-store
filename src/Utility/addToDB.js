import Swal from "sweetalert2";

const getStoredBook = () => {
    const storedBook = localStorage.getItem("readList");
    if (storedBook) {
        return JSON.parse(storedBook);
    } else {
        return [];
    }
};

const addToStoreBook = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "This book is already in your Read List!",
            confirmButtonColor: "#3085d6",
        });
    } else {
        storedBookData.push(id);
        localStorage.setItem("readList", JSON.stringify(storedBookData));

        Swal.fire({
            icon: "success",
            title: "Added!",
            text: "Book has been added to your Read List.",
            confirmButtonColor: "#3085d6",
        });
    }
};

// ✅ Remove function
const removeFromStoreBook = (id) => {
    const storedBookData = getStoredBook();
    const updatedData = storedBookData.filter(bookId => bookId !== id);

    localStorage.setItem("readList", JSON.stringify(updatedData));

    Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Book has been removed from your Read List.",
        confirmButtonColor: "#3085d6",
    });
};

export { addToStoreBook, getStoredBook, removeFromStoreBook };
