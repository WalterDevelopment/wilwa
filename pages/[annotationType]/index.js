import { useRouter } from 'next/router';
import Heading from '../../components/Heading';

const type = () => {
  const router = useRouter();
  const { annotationType } = router.query;

  const validTypes = ['book', 'song', 'video'];

  if (!validTypes.includes(annotationType)) {
    return <Heading errorCode="404" />;
  }

  return (
    <>
      <Heading title={titleCase(annotationType) + ' Annotations'} description="Book Annotations from wilwa.net" />
      <div>
        <h1>{titleCase(annotationType) + ' Annotations'}</h1>
      </div>
    </>
  );
};

function titleCase(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
}

export default type;
