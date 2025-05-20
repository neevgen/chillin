import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-beige relative overflow-hidden">
      <Head>
        <title>Chillin.tech</title>
      </Head>

      <div className="absolute top-0 left-0 w-48 h-48 bg-brushRed opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brushBlue opacity-25 rounded-full transform translate-x-1/2 translate-y-1/2" />

      <main className="relative z-10 flex flex-col items-center justify-center h-screen p-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Добро пожаловать на Chillin.tech</h1>
        <p className="mb-8 text-lg">Выбирайте раскраски по категориям и сохраняйте свои любимые!</p>
        <a href="/colorings" className="px-6 py-3 bg-brushGreen text-white rounded-full shadow-lg hover:opacity-80 transition">
          Начать
        </a>
      </main>
    </div>
  );
}
