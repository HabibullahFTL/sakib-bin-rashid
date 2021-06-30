import React from 'react';
import './Course.css';

const Course = () => {
    return (
        <div className="course-section py-5">
            <div className="container course-wrapper">
                <h2 className="title text-white text-center fw-bold pb-2 pt-5 mb-3">My <span className="text-warning fw-bold">Courses</span></h2>
                <div className="row">
                    <div className="col-md-6 text-white text-center">
                        <h3 className="pb-2 pt-4">English Grammar Crash Course</h3>
                        <div className="course-details p-4">
                            <span class="badge bg-warning text-dark mx-1">100+ Videos</span>
                            <span class="badge bg-warning text-dark mx-1">100+ Notes</span>
                            <span class="badge bg-warning text-dark mx-1">100+ Quizzes</span>
                        </div>
                        <button className="btn btn-outline-warning btn-md px-5 my-3">Enroll Now</button>
                    </div>
                    <div className="col-md-6 p-4">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8P-gi4gWQ4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;