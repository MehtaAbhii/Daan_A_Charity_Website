// VolunteerPage.js
import React, { useState } from 'react';

const VolunteerPage = () => {
  const [selectedNGO, setSelectedNGO] = useState(null);
  const [schedule, setSchedule] = useState({
    date: '',
    time: '',
    place: '',
  });
  const [enrollForFuture, setEnrollForFuture] = useState(false);

  const handleNGOSelect = (ngo) => {
    setSelectedNGO(ngo);
  };

  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const handleEnrollForFutureChange = () => {
    setEnrollForFuture(!enrollForFuture);
  };

  const handleApplyNow = () => {
    console.log('Applying now to:', selectedNGO);
  };

  const handleEnrollForFuture = () => {
    console.log('Enrolling for future volunteering');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Volunteer Page</h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Choose NGO to Apply</h2>
        {/* Replace this with your actual NGO list component */}
        <div>
          NGO List: {selectedNGO ? selectedNGO.name : 'None selected'}
        </div>
      </div>

      {selectedNGO && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Schedule Volunteering</h2>
          <form>
            <label className="block mb-2">
              Date:
              <input
                type="date"
                name="date"
                value={schedule.date}
                onChange={handleScheduleChange}
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Time:
              <input
                type="time"
                name="time"
                value={schedule.time}
                onChange={handleScheduleChange}
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Place:
              <input
                type="text"
                name="place"
                value={schedule.place}
                onChange={handleScheduleChange}
                className="border p-2 w-full"
              />
            </label>
          </form>
        </div>
      )}

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={enrollForFuture}
            onChange={handleEnrollForFutureChange}
            className="mr-2"
          />
          Enroll for Future Volunteering
        </label>
      </div>

      <div>
        <button
          onClick={handleApplyNow}
          className="bg-blue-500 text-white px-4 py-2 mr-2"
        >
          Apply Now
        </button>
        <button
          onClick={handleEnrollForFuture}
          className="bg-green-500 text-white px-4 py-2"
        >
          Enroll for Future
        </button>
      </div>
    </div>
  );
};

export default VolunteerPage;

