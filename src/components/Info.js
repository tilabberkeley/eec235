import Navbar from "./Navbar"
import Footer from "./Footer"

const Info = () => {
    return (
        <>
            <Navbar current="Info" expand={false}/>
                <div class="course-container">
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
                    There will be 5 main homework assignments, due by 11:59pm on the days indicated in the syllabus below. Assignments should be submitted via Gradescope (entry code: XXXXX). Over the course of the semester, each student is allowed a total of up to 5 late days on the homework assignments with no penalty. Once these late days are used up, late assignments can still be submitted, with a 10% penalty for each additional late day beyond the 5 allowed. 
                    </p>
 

                    <h4 className="subtitle-heading">Paper questions</h4>
                    <p>
                    There will also be 2-3 short questions on each of the research papers presented in class, due by 2:30pm (before class) on each of the paper presentation days. These should be submitted in Gradescope as well. There are no allowed late days on the paper questions, but each student will have their lowest score dropped at the end of the semester.
                    </p>
                    
                    <h4 className="subtitle-heading">Paper presentation</h4>
                    <p>
                    Each course topic will include student-led presentations of relevant research papers. Groups of ~3 students will jointly present each paper, and each student in the group should give part of the presentation. Each student will participate in one paper presentation during the semester. Students can sign up for their preferred presentation day/paper using <a href="#">this link</a>. Presentation guidelines are available <a href="#">here</a>. Also some tips on how to analyze a paper are <a href="https://www.eecs.harvard.edu/~michaelm/postscripts/ReadPaper.pdf">here</a>.
                    </p>
                    
                    <h4 className="subtitle-heading">Final project</h4>
                    <p>
                    Students will also carry out a final project related to the topics discussed in class, working in groups of up to 3 students. Please contact the instructors if you would like us to connect you to other students looking for group members. Each group will submit a 1-page project proposal (due Friday April 8) and a 4-page final project report (due Friday May 6).
                    </p>

                    
                </div>

                <div class="course-container">
                    <h2>Grading</h2>
                    <p>
                    We will compute grades from a weighted average, as follows:
                    </p>
                    <ul>
                        <li>5% class participation</li>
                        <li>30% homework assignments</li>
                        <li>20% paper questions</li>
                        <li>20% paper presentation</li>
                        <li>25% final project</li>
                    </ul>
                    <p>
                    The class will be curved at the end of the semester. There is no clobbering policy, but we may take into account participation on Piazza, discussion, office hours, and student performance when considering students on grade borderlines.
                    </p>
                </div>

                <div class="course-container">
                    <h2>Piazza</h2>
                    <p>
                    <a href="#">Piazza</a> will be the main mode of communication. It is your responsibility to check Piazza on a frequent basis to make sure you're up to date on important logistics.

                    The following rules are in place to keep Piazza organized. Any violation of the rules may result in your post being removed.
                    </p>
                    <h4 className="subtitle-heading">Posts</h4>
                    <p>
                    Prior to making a Piazza post, make sure you've spent some time trying to tackle the problem on your own. These include
                    </p>
                    <ul>
                        <li>Reading through similar posts/follow-ups</li>
                        <li>Searching the internet for help (within the rules of integrity)</li>
                    </ul>
                    <h4 className="subtitle-heading">Format</h4>
                    <p>
                    In the body of your post, you should make sure to include
                    </p>
                    <ul>
                        <li>A clear and concise description of the problem</li>
                        <li>What you believe is causing the problem</li>
                        <li>Some of the things you've done to try to resolve the problem</li>
                    </ul>
                    <p>
                    Please format your question in a legible way! If using any code, make sure to use the code formatter and similarly for math equations. Check out Piazza's text editor options or use markdown! 
                    </p>

                    <h4 className="subtitle-heading">Inclusivity</h4>

                    <p>
                        Any content on public forums like Piazza that similarly targets, excludes, disrespects or discriminates against a certain individual or community will be removed and the person responsible for the content will face repercussions. Please aim to keep the climate inclusive for everyone.

                    If at any point you have felt targeted, excluded, disrespected, or discriminated against by a student or someone from course staff, please report the incident directly to Professor Tikhomirov. If you would rather not speak to someone from staff, consider contacting the ASUC Student Advocate’s Office. 
                    </p>
                </div>

                <div class="course-container">
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
