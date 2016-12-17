

export default (Icons) => (image) => {
    if (typeof image == 'string') {
        return Icons[image];
    }
    return image;
}
