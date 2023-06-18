export const getImagePath = (imageName : string) => {
    if (process.env.NODE_ENV === 'production') {
        return imageName;
    } else {
        return `/${imageName}`;
    }
};