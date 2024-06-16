
export const formatDateTime = (dateTimeString) => {
    const createdAtDate = new Date(dateTimeString);
    const formattedDate = createdAtDate.toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
    const formattedTime = createdAtDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    return { formattedDate, formattedTime };
};
