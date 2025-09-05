import React, { useState } from "react";
import PaymentModal from "../PaymentModal";

export default function CardList() {
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: "course-001",
      title: "Course Name",
      price: 20900,
      priceUsd: 209,
      lessons: 40,
      duration: "4h 30m",
      students: 811,
      rating: 4.6,
      image: "img.jpg",
      enrolled: 312,
    },
    {
      id: "course-002",
      title: "Course Name",
      price: 29900,
      priceUsd: 299,
      lessons: 60,
      duration: "8h 15m",
      students: 1200,
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      enrolled: 521,
    },
    {
      id: "course-003",
      title: "Course Name Course",
      price: 25900,
      priceUsd: 259,
      lessons: 50,
      duration: "6h 20m",
      students: 950,
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      enrolled: 418,
    },
    {
      id: "course-003",
      title: "Course Name Course",
      price: 25900,
      priceUsd: 259,
      lessons: 50,
      duration: "6h 20m",
      students: 950,
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      enrolled: 418,
    },
  ];

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm border"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={course.image}
                // alt={course.title}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full flex items-center text-sm font-medium shadow">
                <span className="text-orange-500 mr-1">★</span> {course.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-zinc-500 mt-1">Expert level</p>

              {/* <div className="flex flex-wrap gap-3 mt-4 text-sm text-zinc-600">
                <span className="flex items-center gap-1 bg-zinc-100 px-2 py-1 rounded-md">
                  📚 {course.lessons} lessons
                </span>
                <span className="flex items-center gap-1 bg-zinc-100 px-2 py-1 rounded-md">
                  ⏱ {course.duration}
                </span>
                <span className="flex items-center gap-1 bg-zinc-100 px-2 py-1 rounded-md">
                  👥 {course.students} students
                </span>
              </div> */}

              <div className="mt-4">
                <p className="text-lg font-semibold">$ {course.priceUsd}.00 USD</p>
               </div>

              <div className="mt-5 flex justify-center items-center  ">
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setOpen(true);
                  }}
                  className="bg-black text-white lg:px-4 px-3 py-2 rounded text-center cursor-pointer hover:bg-zinc-800 transition   md:px-2 "
                >
                  Enroll now
                </button>
 
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {selectedCourse && (
        <PaymentModal
          open={open}
          onClose={() => setOpen(false)}
          course={selectedCourse}
          adminQRUrl=""
        />
      )}
    </>
  );
}
