export function ifCloseToBottom({
    layoutMeasurement,
    contentOffset,
    contentSize,
}) {
    return (
        layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
    );
}

export function ifCloseToTop({
    layoutMeasurement,
    contentOffset,
    contentSize,
}) {
    return contentOffset.y === 0;
}
