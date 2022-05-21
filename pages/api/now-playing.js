import useSWR from 'swr';

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <>
      <section className='bg-gray-600'>
        <main className='flex justify-center items-center'>
          {console.log(data)}
        </main>
      </section>
    </>
  );
}