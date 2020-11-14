import { useRouter } from 'next/router';
import Heading from '../../components/Heading';

const annotation = () => {
  const router = useRouter();
  const { id } = router.query;

  const hashMap = {
    1: {
      title: 'The First Thing Annotated',
      text: 'blah blah blah blah blah',
    },
    2: {
      title: 'The Second Thing',
      text: 'blah I am very cool',
    },
    3: {
      title: 'oof',
    },
    jameson: {
      title: 'jameson test',
      text: 'i hope this works',
    },
  };

  let currentAnnotation = hashMap[id];

  // Grab the data for item with id ID and then display it
  if (currentAnnotation == undefined || currentAnnotation == null) return <Heading errorCode="404" />;
  return (
    <div>
      <Heading title={currentAnnotation.title} description={'Annotation ' + id} />
      <h1>{currentAnnotation.title}</h1>
      <p>{currentAnnotation.text}</p>
    </div>
  );
};

export default annotation;
