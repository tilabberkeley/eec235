import Navbar from "./Navbar"
import Footer from "./Footer"

const Info = () => {
    return (
        <>
            <Navbar current="Info" expand={false}/>
                <div className="course-container">
                    <h2>Overview</h2>
                    <p>
                    This course discusses various top-down and bottom-up approaches to synthesizing and processing nanostructured materials. The topics include fundamentals of self assembly, nano-imprint lithography, electron beam lithography, nanowire and nanotube synthesis, quantum dot synthesis (strain patterned and colloidal), postsynthesis modification (oxidation, doping, diffusion, surface interactions, and etching techniques). In addition, techniques to bridging length scales such as heterogeneous integration will be discussed. We will discuss new electronic, optical, thermal, mechanical, and chemical properties brought forth by the very small sizes. 
                    </p>
                </div>

                <div class="course-container">
                    <h2>Lecture</h2>
                    <p>
                    Professor Grigory Tikhomirov will deliver lectures in-person from 2:30-4:00 PM on Wednesdays and Fridays at <u>Cory 299</u>. These will not be recorded so while the attendance is not mandatory is highly encouraged. Lecture schedule is still being drafted but will not deviate far from the current schedule. 
                    </p>
                </div>

                <div class="course-container">
                    <h2>Assignments and Readings</h2>
                    
                    <h4 className="subtitle-heading">Homework</h4>
                    <p>
                    There will be 3 main homework assignments. These assignments will be presented in class. 
                        <ol>
                            <li><b>Your Project</b> (10 min, 5 slides max)</li>
                            Tell us about your project and how nanofabrication can help.    
                            <li><b>Paper Presentation</b> (last 5 years, 10 min, 5 slides max)</li>
                            Present a recent paper on a new nanofabrication technique.
                            <li><b>Nanofabrication Process</b> (5 min max)</li>
                            Animate a nanofabrication process (movie or gif)
                            <li><b>[Extra credit] Nanofabrication Meme</b></li>
                            Make a nanofabrication meme (jpg or gif)
                        </ol> 
                    </p>
 

                    <h4 className="subtitle-heading">Tutorial</h4>
                    <p>
                    Teach us a nanofabrication technique not in the syllabus, 45 min lecture. Choose anything interesting to you, but please approve with Prof. Tikhomirov so that we have a balance of top-down, bottom-up, and integration. Tutorials will begin in early March, consult course schedule for more details. Sign up sheet for presentation dates will be available the week before.
                    </p>
                    
                    <h4 className="subtitle-heading">Project</h4>
                    <p>
                        You will use the knowledge gained throughout the course to come up with an idea for a new nanofabrication tecnique. The project will include an academic paper (20%) and a presentation of thereof (10%). The academic paper should be 5-10 pages including figures and the presentation should be around 20 minutes long.

                    </p>
                    

                    
                </div>

                <div className="course-container">
                    <h2>Grading</h2>
                    <p>
                    We will compute grades from a weighted average, as follows:
                    </p>
                    <ul>
                        <li>10% participation</li>
                        <li>30% homework</li>
                        <li>30% tutorial</li>
                        <li>30% project</li>
                    </ul>
                    <p>
                    The class will be curved at the end of the semester. There is no clobbering policy, but we may take into account participation on lectures, discussions, office hours, and student performance when considering students on grade borderlines.
                    </p>
                </div>

                <div className="course-container">
                    <h2>Office Hours</h2>
                    <p>
                        Office hours are by appointment only. Contact Prof. Tikhomirov at <a href="mailto:gt3@berkeley.edu">gt3@berkeley.edu</a> to set up an appointment.
                    </p>
                </div>

                <div className="course-container">
                    <h2>Academic Integrity</h2>
                    <p>
                        Academic dishonesty is not acceptable at UC Berkeley. Academic dishonesty is any action that may result in creating an unfair academic advantage for oneself or unfair academic disadvantage for another member of the academic community. Therefore, any exam, quiz, paper, and/or homework assignment submitted by you for any class that bears your name should be your own original work. In all of your assignments, including your homework, you may use words or ideas written by other individuals in publications, web sites, or other sources, but only with proper attribution. 'Proper attribution' means that you have fully identified the original source and extent of your use of the words or ideas of others that you reproduce in your work for this course, usually in the form of a footnote, parentheses or quotations. If you are not clear about the expectations for completing an assignment, be sure to seek clarification from the instructor beforehand. Cheating and plagiarism are forms of academic dishonesty and are not tolerated under any circumstances. Any evidence of academic dishonesty will result in a score of zero (0) on that assignment and will be reported as soon as possible to the Center for Student Conduct (http://sa.berkeley.edu/conduct). This will result in a permanent scar on your academic record.
                    </p>
                </div>
            <Footer/>
        </>
    )
}

export default Info
