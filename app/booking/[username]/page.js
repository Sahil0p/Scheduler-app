"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Calendar from "@/components/Calendar";
import TimeSlots from "@/components/TimeSlots";
import BookingForm from "@/components/BookingForm";
import Loader from "@/components/Loader";
import EmptyState from "@/components/EmptyState";
import { useSlots } from "@/hooks/useSlots";
import { useUser } from "@/hooks/useUser";
import axios from "axios";

export default function BookingPage({ params }) {
  const { username } = use(params);

  const { user, fetchUser } = useUser();
  const { slots, fetchSlots } = useSlots();

  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

useEffect(() => {
  fetchUser(username);
}, [username, fetchUser]);

  async function handleDateChange(d) {
    setDate(d);
    setSelectedTime("");

    if (user) {
      setLoading(true);
      await fetchSlots(user.id, d);
      setLoading(false);
    }
  }

  async function handleBooking() {
    try {
      await axios.post("/api/bookings", {
        userId: user.id,
        guestName: name,
        guestEmail: email,
        date,
        time: selectedTime,
      });

      alert("Booking Confirmed ✅");
    } catch {
      alert("Booking failed ❌");
    }
  }

  // if (!user) return <Loader />;
  if (!user) return <EmptyState text="User not found" />;

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        
        <h1 className="text-lg sm:text-2xl font-semibold mb-6 sm:mb-8">
          Book with {user.name}
        </h1>

        <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-6 grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* LEFT */}
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Select Date
            </p>

            <Calendar date={date} setDate={handleDateChange} />

            <p className="text-sm text-gray-500 mt-6 mb-2">
              Available Slots
            </p>

            {loading ? (
              <Loader />
            ) : slots.length === 0 && date ? (
              <EmptyState text="No slots available" />
            ) : (
              <TimeSlots
                slots={slots}
                selected={selectedTime}
                setSelected={setSelectedTime}
              />
            )}
          </div>

          {/* RIGHT */}
          <div>
            {selectedTime ? (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  <p><strong>Date:</strong> {date}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                </div>

                <BookingForm
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  onSubmit={handleBooking}
                />
              </>
            ) : (
              <div className="text-gray-400 text-sm flex items-center justify-center h-full">
                Select a time slot
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}