import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';




export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title> First post</title>
            </Head>

            <h1>First Post</h1>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <div>
                <h3>My name is Laura and i am a Danish exchange at Hanyang University.</h3>
                <img src={"/images/shiba.jpg"} alt="shiba"/>
                <p>This shiba dog wishes you a very good day!  </p>
            </div>
        </Layout>

    );
}
