"use client";
function Course({ course }) {
    return (
        <>



            <div className="max-w-xs rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://via.placeholder.com/150" alt="Placeholder" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{course.title}</div>
                    <p className="text-gray-700 text-base">
                        {course.discription}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Course;