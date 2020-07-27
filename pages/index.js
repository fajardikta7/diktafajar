import Head from 'next/head'
import Menu from '../components/menu';
export default function Home() {
return (
<div>
<Head>
<title>Home</title>
</Head>
<Menu />
<div>
<h1>Selamat Datang di Smart store</h1>
<p>Smart store adaah brand nama toko pada situs online yang dapat menyediakan barang - barang yang di butuhkan dengan cara membeli atau menjual berbagai barang di situs online .</p>
</div>
</div>
);
}