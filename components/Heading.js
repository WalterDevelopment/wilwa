import Head from 'next/head';
import DefaultErrorPage from 'next/error';

const Heading = ({ title, description, errorCode, favicon }) => {
  if (errorCode)
    return (
      <>
        <DefaultErrorPage statusCode={errorCode} />
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      </>
    );
  return (
    <Head>
      <title>{title ? title : 'Add a title.'}</title>
      <meta name="description" content={description ? description : 'No description'} />
      <link rel="icon" href={favicon ? favicon : '/favicon.ico'} />
    </Head>
  );
};

export default Heading;
