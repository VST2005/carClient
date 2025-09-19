import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from "../services/api"

function ServiceDetail() {
  const { id } = useParams();
  console.log(id);
  const naviagte = useNavigate();
  const [service, setService] = useState(null);
  const [loading,setLoading] = useState(null);



  // check login sttaus from user in loaclStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  //fetch course detail
  const fetchService = async () => {
    try {
      const res = await API.get(`/serviceview/${id}`,{
        withCredentials:true,
      });
      setService(res.data);
    }
    catch (error) {
      console.log(error)
    }
  };
  console.log(service);
  useEffect(() => {
    fetchService()
  }, [id]);

  //book new handel

  const handleBookNow= async()=>{
    if(!isLoggedIn){
      naviagte("/login"); // redirect to login page
      return;
    }
    try{
      setLoading(true);
      const res = await API.post(
        `/booking/create/${id}`,
        {},
        {
          headers:{
            Authorization:`Bearer ${user.token}` ,// agar JWT backend verify karta hai
          },
        }
      );
      if(res.data.booking){
        alert("booking succefully");
        naviagte("/mybooking");  // ya koi confirmation page
      }
      else{
        alert(res.data.message || "Booking failed !");
      }
    }
    catch(err){
      console.log(err);
      alert(err.respond?.data?.message || "Something went wrong ");
    }
    finally{
      setLoading(false);
    }
  };
  
  if(!service){
    return <div className='text-center my-5'>Loading.....</div>
  }

  return (
    <>
      <img src="https://pninfosys.org/bannerFinal.jpg" alt="" className='w-100' style={{ height: "200px" }} />
      <div className="container my-5">
        {" "}
        {/* my-5 = margin top aur bottom */}
        <div className="row">
          <div className="col-md-5">
            <img
              src={service?.image.url}
              alt={service?.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h2>{service?.title}</h2>
            <p>{service?.description}</p>
            <p>
              <strong>Price:</strong> ₹{service?.price}
            </p>
            <button 
            className="btn btn-success"
            onClick = {handleBookNow}
            disable={loading}
            >
              {loading ? "booking .... " : isLoggedIn ? "Book Now" : "login to book "}
              </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default ServiceDetail
