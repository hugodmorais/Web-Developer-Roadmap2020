import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href='/'>
        <a>Back</a>
      </Link>
    </div>
  )
};

export default About