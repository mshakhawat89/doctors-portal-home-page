import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
     _id: "6076c452fc13ae2ab2000000",
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "08:00 AM - 09:00 AM",
    totalSpace: 12
  }, 
  {
    _id: "6076c452fc13ae2ab2000001",
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "09:00 AM - 10:00 AM",
    totalSpace: 10
  }, 
  {
    _id: "6076c452fc13ae2ab2000002",
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "10:00 AM - 11:00 AM",
    totalSpace: 21
  }, 
  {
    _id: "6076c452fc13ae2ab2000003"
,
    id: 4,
    subject: "Cavity Protection",
    visitingHour: "05:00 PM - 06:00 PM",
    totalSpace: 17
  }, 
  {
    _id: "6076c452fc13ae2ab2000004",
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "06:00 PM - 07:00 PM",
    totalSpace: 26
  }, 
  {
    _id: "6076c452fc13ae2ab2000005"
    ,
    id: 6,
    subject: "Cosmetic Dentistry",
    visitingHour:"07:00 PM - 08:00 PM",
    totalSpace: 19
  }]

const BookAppointment = ({date}) => {
    return (
      <section>
          <h2 className="text-center text-brand mb-5  " >Available Appointments on {date.toDateString()} </h2>
     
<div className="row">

    {
    bookingData.map(booking =><BookingCard booking={booking} date ={date}  key={booking.id} ></BookingCard>)
    }
</div>

     
      </section>
    );
};

export default BookAppointment;