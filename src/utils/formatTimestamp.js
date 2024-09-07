/**
 * Convert timestamp
 *
 * @param timestampValue  The timestamp to convert
 * @returns Date in format "Wednesday, March 24, 2021"
 */
export const timestampToWeekDate = (timestampValue) => {
    const date = new Date(timestampValue)
    return date.toLocaleDateString('en-US', {
        hour: '2-digit',
        minute: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'short',
    })
}
