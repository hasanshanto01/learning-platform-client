import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='bg-custom border border-start-0 border-end-0 border-warning'>
            <h2 className='text-center text-warning mt-3'>Frequently Asked Questions</h2>

            <div className='w-75 mx-auto my-4'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is MERN stack web development?</Accordion.Header>
                        <Accordion.Body>
                            MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. It is a contraction for four different technologies as mentioned: <strong>M - MongoDB, E - ExpressJS, R - ReactJS, N - NodeJS.
                            </strong>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is full stack web development?</Accordion.Header>
                        <Accordion.Body>
                            Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the front end and the back end.

                            The front end includes everything that a client, or site viewer, can see and interact with. By contrast, the back end refers to all the servers, databases, and other internal architecture that drives the application; usually, the end-user never interacts with this realm directly.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is the main difference between developing iOS and Android?</Accordion.Header>
                        <Accordion.Body>
                            iOS app developers use Swift, whereas Android app developers use Java or Kotlin.
                            With Apple devices, there are standardized screen sizes for iPhones and iPads. With Android devices, there is a large variety of screen sizes—meaning you need to work more on interface design and case-by-case programming to ensure compatibility and functionality across devices.
                            Android apps take longer to develop because of device fragmentation—the fact that there are so many different Android OS versions on the market. Different devices get important security updates at different times, and this makes maintaining and developing Android apps more challenging.
                            iOS and Android apps have different user demographics—age, income, hours spent on apps, locations, and so on. Apple users tend to be younger and more affluent than Android users.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What do app developers do?</Accordion.Header>
                        <Accordion.Body>
                            A mobile app developer uses programming languages and development skills to create, test, and develop applications on mobile devices. They work in popular operating system environments like iOS and Android and often take into account UI and UX principles when creating applications.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What is SEO and how it works?</Accordion.Header>
                        <Accordion.Body>
                            Well, SEO stands for 'Search Engine Optimization', which is the process of getting traffic from free, organic, editorial, or natural search results in search engines. It aims to improve your website's position in search results pages. Remember, the higher the website is listed, the more people will see it.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>What is the role of digital marketing?</Accordion.Header>
                        <Accordion.Body>
                            A digital marketer is responsible for getting the word out in the market about a brand. They use a wide variety of digital channels to build brand awareness and generate leads. The digital channels include the company's website, and social media platforms such as YouTube, Facebook, Instagram and Twitter, and others.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>What a graphic designer does?</Accordion.Header>
                        <Accordion.Body>
                            Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

        </div>
    );
};

export default FAQ;