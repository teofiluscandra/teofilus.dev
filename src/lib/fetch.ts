import unfetch from 'unfetch';

export default async function fetch(url: string): Promise<any> {
    return await unfetch(url).then(r => r.json());
}
