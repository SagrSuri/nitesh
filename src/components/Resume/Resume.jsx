// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../print.css';
import ToggleDark from '../ToggleDark/ToggleDark.jsx';
import Print from '../Print/Print.jsx';
import { PiCertificateFill, PiGithubLogoBold, PiPhoneCallDuotone } from 'react-icons/pi';
import { LiaHtml5, LiaLinkedin } from 'react-icons/lia';
import { MdOutlineMailOutline, MdVerifiedUser } from 'react-icons/md';
import { HiExternalLink } from 'react-icons/hi';
import { TbBrandJavascript, TbBrandVite, TbBrandVscode } from 'react-icons/tb';
import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { RiBootstrapLine, RiChatVoiceLine, RiCss3Line, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri';
import { FaExternalLinkAlt, FaFastBackward, FaGitAlt, FaLaptopCode, FaRegKeyboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { resumeData, certifications } from './resumeData';
import { GiGraduateCap } from 'react-icons/gi';
import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx';
import { IoLocationOutline } from 'react-icons/io5';

function Resume() {
      const [timestamp, setTimestamp] = useState(new Date().toLocaleString());

      useEffect(() => {
            const interval = setInterval(() => {
                  setTimestamp(new Date().toLocaleString());
            }, 1000);

            return () => clearInterval(interval); // Clear the interval on component unmount
      }, []);

      return (
            <div className='Roboto'>
                  <div className='no-print'>
                        <div className='bg-gray-50 fixed w-full top-0 z-50 flex justify-between items-center px-6 py-4 shadow-lg dark:bg-gray-950'>
                              <Link to='https://www.sagarsuri.in/profile' className='flex items-center px-3 py-2 rounded-md text-white bg-gray-600 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600'>
                                    <FaFastBackward className='text-2xl' />
                              </Link>
                              <div className='flex items-center space-x-4'>
                                    <ToggleDark />
                                    <Print />
                              </div>
                        </div>
                        <div className='text-center pt-10 text-gray-800 dark:text-gray-200 font-semibold'>
                              <h2 className='px-4 py-1 text-lg text-transparent'>
                                    Before Printing the CV
                              </h2>
                              <h1 className='px-4 py-2 text-xl dark:text-green-600 hidden dark:block'>
                                    Please switch to light mode before printing the resume.
                              </h1>
                        </div>
                  </div>

                  <section className="resume-print">
                        <div className="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen p-2">
                              <div className="container mx-auto max-w-4xl">

                                    {/* Header Section */}
                                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:bg-gray-800 shadow-sm rounded-t-md p-4">
                                          <div className="flex justify-between items-center">
                                                <div className="text-white uppercase flex flex-col items-start">
                                                      <h1 className="text-3xl font-extrabold tracking-wider">
                                                            <Link >Nitesh Ukey</Link>
                                                      </h1>
                                                      <h3 className="text-2xl mt-1">Electrician</h3>
                                                </div>
                                                <div className="text-right flex flex-col items-end">
                                                      <p className="text-lg text-white flex items-center gap-1">
                                                            <a href="https://wa.me/917030413534" className="flex items-center gap-1">
                                                                  <PiPhoneCallDuotone /><span className="hover:underline">+91 7030413534</span>
                                                            </a>
                                                      </p>
                                                      <p className="text-lg text-white flex items-center gap-1">
                                                            <a href="mailto: ukeynitesh88@gmail.com" className="hover:underline flex items-center gap-1">
                                                                  <MdOutlineMailOutline />  ukeynitesh88@gmail.com
                                                            </a>
                                                      </p>
                                                      <p className="text-lg text-white flex items-center gap-[2px] justify-center ">

                                                            <IoLocationOutline /> Asoli, Nagpur, Maharashtra 441202

                                                      </p>

                                                </div>
                                          </div>
                                    </div>

                                    <hr className="border-gray-300 my-4" />

                                    {/* About Section */}
                                    <div className="bg-gray-100 dark:bg-gray-800 shadow-sm p-4 rounded-md mb-4">
                                          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white uppercase">About Me</h2>
                                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Motivated and detail-oriented electrician with an ITI certification, seeking an entry-level position to apply my foundational knowledge of electrical systems, wiring, and maintenance. I am eager to contribute to a team, delivering reliable and safe electrical solutions, while growing professionally in the field.
                                          </p>
                                    </div>

                                    {/* Skills Section */}
                                    <div className="bg-gray-100 dark:bg-gray-800 shadow-sm p-4 rounded-md mb-4">
                                          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white uppercase">Skills</h2>
                                          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                                                <li>Electrical Wiring & Installation</li>
                                                <li>Maintenance & Repair</li>
                                                <li>Electrical Circuit Troubleshooting</li>
                                                <li>Panel Wiring</li>
                                                <li>Equipment Testing & Calibration</li>
                                                <li>Adherence to Safety Protocols</li>
                                          </ul>
                                    </div>

                                    {/* Education Section */}
                                    <div className="bg-gray-100 dark:bg-gray-800 shadow-sm p-4 rounded-md mb-4">
                                          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white uppercase">Education</h2>
                                          <div className="space-y-3">
                                                <div className="flex items-center space-x-2">
                                                      <GiGraduateCap size="28px" />
                                                      <p className="text-lg text-gray-700 dark:text-gray-300">10th SSC - Vanita Vikash Vidyalaya (2020)- Grade: 57.40%</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                      <GiGraduateCap size="28px" />
                                                      <p className="text-lg text-gray-700 dark:text-gray-300">12th HSC - Vidhabha Buniyadi High School (2022) - Grade: 61.17%</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                      <GiGraduateCap size="28px" />
                                                      <p className="text-lg text-gray-700 dark:text-gray-300">ITI Diploma - Globus ITI Kamptee (2024) - Grade: 89%</p>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Personal Information Section */}
                                    <div className="bg-gray-100 dark:bg-gray-800 shadow-sm p-4 rounded-md ">
                                          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white uppercase">Personal Information</h2>
                                          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-1">
                                                <li><strong>Name:</strong> Nitesh Hirdilal Ukey</li>
                                                <li><strong>Date of Birth:</strong> 8 April 2004</li>
                                                <li><strong>Languages:</strong> Marathi, Hindi</li>
                                                <li><strong>Marital Status:</strong> Unmarried</li>
                                                <li><strong>Caste:</strong> OBC (Kalar)</li>
                                          </ul>
                                    </div>


                                    {/* Date & Faithfully Section */}
                                    <div className="text-lg text-gray-700 dark:text-gray-300 mb-6 py-2 flex justify-between px-8">
                                          <p>Date:{/* {new Date().toLocaleDateString('en-IN')} */}</p>
                                          <p>Faithfully</p>

                                    </div>

                                    {/* Footer Section */}
                                    <footer className=" no-print mt-6 pt-4 pb-2 bg-gray-100 dark:bg-gray-950 text-center text-sm text-gray-700 dark:text-gray-300">
                                          <div className="container mx-auto px-4">
                                                <p className="mb-2">
                                                      <a href="https://cv.sagarsuri.in" className="text-blue-600 hover:text-blue-800 font-medium text-center">
                                                            cv.sagarsuri.in
                                                      </a>
                                                </p>
                                                <p className="mb-2 text-lg">
                                                      © <span className="font-semibold">{new Date().getFullYear()}</span>
                                                </p>
                                          </div>
                                    </footer>
                              </div>
                        </div>
                  </section>


                  <span className='no-print'>
                        <ScrollToTop
                              color="dark:bg-blue-800"
                              hoverColor="hover:bg-blue-700"
                              darkColor="dark:bg-gray-700"
                              darkHoverColor="dark:hover:bg-gray-600"
                        />
                  </span>
            </div>
      );
}

export default Resume;
