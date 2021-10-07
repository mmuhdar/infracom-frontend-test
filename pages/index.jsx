import Head from "next/head";
import HomeLayout from "../components/HomeLayout";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <HomeLayout />
    </Layout>
  );
}
