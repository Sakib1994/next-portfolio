// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import userData from "../constants/data";
import getLatestRepos from './../lib/getLatestRepos';

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Nazmus Sakib - Developer, Writer, Creator and YouTuber"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}
export const getServerSideProps = async () => {
  // console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData.githubUsername, token);
  // console.log("REPOSITORIES", repositories[0]);

  return {
    props: {
      repositories,
    },
  };
};