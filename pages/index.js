import Link from 'next/link';
import Heading from '../components/Heading';

export default function Home() {
  // Loop through possible items, and create a link for each one with the item's NAME and a link to it's ID (using client requesting)
  const annotations = [
    {
      id: 1,
      title: 'The First Thing Annotated',
    },
    {
      id: 2,
      title: 'A second thing',
    },
    {
      id: 3,
      title: 'A third thing',
    },
    {
      title: 'jameson test',
      id: 'jameson',
    },
  ];

  return (
    <>
      <div className="container pt-4 my-2 bg-dark text-white">
        <Heading title="wilwa" description="Welcome to wilwa.net!" />
        <ul className="list-disc flex">
          {annotations.map(annotation => (
            <li className="" key={annotation.id}>
              <Link href={'/annotation/' + annotation.id}>
                <a className="text-primary">{annotation.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
