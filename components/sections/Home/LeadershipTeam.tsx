import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const leaders = [
    {
        name: 'Mawethu Sidzamba',
        title: 'Chief Executive Officer',
        image: '/images/team/mawethu-home.jpg',
        delay: 0,
    },
    {
        name: 'Andile Kenqu',
        title: 'Chief Operating Officer',
        image: '/images/team/andile-home.jpg',
        delay: 150,
    },
];

export default function LeadershipTeam() {
    return (
        <section className="bg-white dark:bg-darkmode py-32">
            <div className="container overflow-hidden">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="font-bold dark:text-white mb-4">Our Leadership Team</h2>
                    <p className="text-SlateBlueText dark:text-darktext max-w-2xl mx-auto">
                        Guided by visionaries with a passion for innovation and digital transformation.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-12 items-start px-4">
                    {leaders.map((leader) => (
                        <div
                            key={leader.name}
                            className="group max-w-[300px] w-full"
                            data-aos="fade-up"
                            data-aos-delay={leader.delay}
                        >
                            <div className="relative overflow-hidden rounded-22 shadow-lg h-[380px] mb-6">
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    width={300}
                                    height={380}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="space-y-1 text-center">
                                <h4 className="text-2xl font-bold dark:text-white">{leader.name}</h4>
                                <p className="text-primary font-bold">{leader.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16" data-aos="fade-up">
                    <Button href="/team" variant="outline">View Entire Team</Button>
                </div>
            </div>
        </section>
    );
}