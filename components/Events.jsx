import Image from 'next/image';

const Events = () => {
    const eventsData = [
        {
          imgSrc: Img4,
          title: 'Tech Talk',
          subtitle: 'Getting Started With Elastic Stack for SEO',
          speaker: 'Ashish Tiwari',
          date: '11th January, 2023',
          link: 'https://gdsc.community.dev/e/mg96jj/',
        },
        {
          imgSrc: Img5,
          title: 'Web Development Workshop',
          subtitle: 'Hands On Workshop on HTML5, CSS3, JavaScript',
          speaker: 'Candida Noronha',
          date: '7th January, 2023',
          link: 'https://gdsc.community.dev/e/mgbsdq/',
        },
        {
          imgSrc: Img3,
          title: 'National Mathematics Day',
          subtitle: 'Contests: Just ∫du it & Creat-e-matics',
          date: '22nd December, 2022',
          link: 'https://gdsc.community.dev/e/mbucfv/',
        },
        {
          imgSrc: Img1,
          title: 'HackOver 3.0',
          subtitle: 'Virtual Hackathon - Domains: Web/App Dev, Blockchain & Game Dev',
          date: '4th & 5th October, 2022',
          link: 'https://hackover.netlify.app/',
        },
        {
          imgSrc: Img2,
          title: 'Tech Talk',
          subtitle: 'Workshop on Problem Solving & Ideation',
          speaker: 'Princeton Baretto',
          date: '30th August, 2022',
          link: 'https://gdsc.community.dev/e/m89s4t/',
        },
      ];
  return (
    <section id='services' className='section-bg'>
      <header className='section-header'>
        <h3>Events</h3>
        <p className='text-justify'>
          We conduct regular events including tech talks and workshops to make
          students familiar with the latest tech advancements and programs.
        </p>
      </header>
      <div
        className='container-fluid'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {eventsData.map((event, index) => (
            <div
              key={index}
              className='box max-w-sm rounded overflow-hidden shadow-lg'
              
            >
              <div className='img'>
                <Image
                  src={event.imgSrc}
                  alt={event.title}
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='w-full h-48 object-cover'
                />
              </div>
              <div className='px-6 py-4'>
                <a
                  href={event.link}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  target='_blank'
                >
                  <h4 className='title font-semibold text-xl mb-2'>
                    {event.title}
                  </h4>
                  <p className='description font-medium'>
                    <b>{event.subtitle}</b>
                  </p>
                  <p className='description'>
                    <b>Speaker: </b>
                    {event.speaker}
                  </p>
                  <p className='description'>
                    <b>Date: </b>
                    {event.date}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events