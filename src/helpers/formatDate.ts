
export const formatDate = (data: Date) => {
//Intl.DateTimeFormatOptions - этот интерфейс от библиотеки
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('en-US', options);
}