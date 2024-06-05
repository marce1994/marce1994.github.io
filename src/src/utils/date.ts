const formatDate = (date: string) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    } as Intl.DateTimeFormatOptions;
    return new Date(date).toLocaleDateString(undefined, options);
};

const dateToString = (date: Date) => {
    // convert and format date to string
    return formatDate(date.toISOString());
}

export { formatDate, dateToString };