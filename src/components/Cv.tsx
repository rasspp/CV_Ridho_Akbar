import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

interface Experience {
    company: string;
    title: string;
    year: string;
    description: string;
}

interface Education {
    institution: string;
    degree: string;
    year: string;
}

export const Cv: FunctionalComponent = () => {
    const [name, setName] = useState<string>('John Doe');
    const [email, setEmail] = useState<string>('john@example.com');
    const [phone, setPhone] = useState<string>('123-456-7890');
    const [summary, setSummary] = useState<string>('A passionate web developer with experience in React.');
    const [experience, setExperience] = useState<Experience[]>([
        { company: 'ABC Inc.', title: 'Frontend Developer', year: '2018-2021', description: 'Developed user interfaces using React.js.' },
        { company: 'XYZ Corp.', title: 'UI/UX Designer', year: '2016-2018', description: 'Designed and prototyped user interfaces for web applications.' }
    ]);
    const [education, setEducation] = useState<Education[]>([
        { institution: 'University of ABC', degree: 'Bachelor of Science in Computer Science', year: '2012-2016' }
    ]);

    return (
        <div className="container mx-auto py-10">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-lg">{email} | {phone}</p>
            </header>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                <p>{summary}</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                {experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company} ({exp.year})</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution} ({edu.year})</p>
                    </div>
                ))}
            </section>
        </div>
    );
};
