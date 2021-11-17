export function getIdFromUrl(url: string): number | null {
    const idInUrl: RegExpMatchArray | null = url.match(/\/[000-999]\/$/);
    if (idInUrl) {
        const id: number = parseInt(idInUrl[0].replace('/', ''));
        return id;
    }

    return null;
}
