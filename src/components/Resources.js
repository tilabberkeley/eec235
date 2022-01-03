import Navbar from "./Navbar"
import Footer from "./Footer"
import Table from 'react-bootstrap/Table'
import Book1 from "../assets/book1.jpg"
import Book2 from "../assets/book2.jpg"
import Book3 from "../assets/book3.jpg"
import "./Resources.css"

const Resources = () => {
    return (
        <>
            <Navbar current="Resources"/>
                <div className="course-container">
                    <h2>Resources</h2>

                    <div>
                        <h4>Textbooks</h4>
                        <p>
                            The textbooks below are supplementary material that can help you become familiar with some of the concepts and technologies used in nanoscale fabrication. No one textbook is fully reflective of the content covered in this course, but each provide adequate background for understanding challanging concepts in nano. 
                        </p>
                        <div className="book-container">
                        <Table bordered>
                            <tbody>
                                <tr>
                                    
                                    <td><img className="resource-book" src={Book1}/></td>
                                    <td><a className="a-link" href="https://www.amazon.com/Fabrication-Optimization-Biological-Pharmaceutical-Nanotechnology/dp/0128136294">Nanoscale Fabrication, Optimization, Scale-up and Biological Aspects of Pharmaceutical Nanotechnology 
                                    </a><br/>
                                    Author: Alexandru Mihai Grumezescu
                                    </td>
                                    <td>Elsevier; 1st edition (December 13, 2017)</td>
                                    
                                </tr>
                                <tr>
                                    <td><img className="resource-book" src={Book2}/></td>
                                    <td><a className="a-link" href="https://www.amazon.com/Fabrication-Engineering-Nanoscale-Electrical-Computer/dp/0199861226">Fabrication Engineering at the Micro- and Nanoscale</a>
                                    <br/>
                                    Author: Stephen Campbell
                                    </td>
                                    <td>Oxford University Press; 4th edition (2013)</td>
                                </tr>
                                <tr>
                                    <td><img className="resource-book" src={Book3}/></td>
                                    <td><a className="a-link" href="#">Nanoscale Processing</a> <br/>Authors: Sabu Thomas and Preetha Balakrishnan </td>
                                    <td>Oxford Press (October 22, 2020)</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </div>

                    <div>
                        <h4>Scholarly Articles</h4>
                        <p>Below are some scholalrly articles which will not be covered in the course but are considered pioneering works in the fields of self-assembly, nanolithography, and other various techniques of nanofabrication.</p>
                    
                        <ul>
                            <li>
                                <a className="a-link" href="https://ieeexplore.ieee.org/abstract/document/1236879/">Electron beam lithography in nanoscale fabrication: recent development</a>
                            </li>
                            <li>
                                <a className="a-link" href="https://pubs.rsc.org/en/content/articlelanding/2015/nr/c5nr02048d/unauth">Three-dimensional micro/nanoscale architectures: fabrication and applications</a>
                            </li>
                            <li>
                                <a className="a-link" href="https://pubs.acs.org/doi/full/10.1021/acs.chemrev.5b00047">Fabrication of micro/nanoscale motors</a>
                            </li>
                            <li>
                                <a className="a-link" href="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.0020424">Algorithmic self-assembly of DNA Sierpinski triangles</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Additional Resources</h4>
                        <ul>
                            <li><a className="a-link" href="https://docs.google.com/forms/d/e/1FAIpQLSc4NYHdUJ8IzYA1SoiTinWBybGWkj0mfmdnHAeygAxkZajelQ/viewform">EECS Student Climate & Incident Reporting Form</a></li>
                            <li>National Suicide Prevention Hotline: 1-800-273-TALK (8255)</li>
                        </ul>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Resources
