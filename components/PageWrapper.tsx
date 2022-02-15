import Head from "next/head";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface PageWrapperProps {
  title: string;
  description?: string;
  children?: any;
}

const PageWrapper = ({ title, description, children }: PageWrapperProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://music.cerdenia.com/images/headshot-2.jpeg"
        />
        <link rel="icon" href="music-note.svg" />
        <title>{title}</title>
      </Head>
      <NavBar />
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default PageWrapper;