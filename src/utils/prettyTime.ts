export default function prettyTimeLeft(toTime: Date) {
    const now = new Date();
    const diff = toTime.getTime() - now.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    switch (true) {
        case years > 0:
            return `${years} year${years > 1 ? "s" : ""}`;
        case months > 0:
            return `${months} month${months > 1 ? "s" : ""}`;
        case weeks > 0:
            return `${weeks} week${weeks > 1 ? "s" : ""}`;
        case days > 0:
            return `${days} day${days > 1 ? "s" : ""}`;
        case hours > 0:
            return `${hours} hour${hours > 1 ? "s" : ""}`;
        case minutes > 0:
            return `${minutes} minute${minutes > 1 ? "s" : ""}`;
        default:
            return `${seconds} second${seconds > 1 ? "s" : ""}`;
    }
}