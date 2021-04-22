const addZere = (number) => {
    if (number < 10) {
        return `0${number}`;
    }
    return '' + number;
};

module.exports = {
    formatDate: (date) => {
        if (date instanceof Date) {
            const year = date.getFullYear();
            let month = addZere(date.getMonth() + 1);
            const day = addZere(date.getDate());
            const hour = addZere(date.getHours());
            const minute = addZere(date.getMinutes());
            const second = addZere(date.getSeconds());
            return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        } else {
            throw new Error('Incorrect data type');
        }
    },
};
