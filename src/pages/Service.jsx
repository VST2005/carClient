import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Service() {
  const [ServiceList, setServiceList] = useState([]);

  const fetchService = async () => {
    try {
      const res = await API.get("/service"); // API endpoint
      setServiceList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  // fallback sample services (if API returns empty)
  const sampleServices = [
    {
      _id: "1",
      title: "Oil Change",
      description:
        "Keep your engine running smoothly with our quick oil change service.",
      price: 499,
      image: { url: "https://img.freepik.com/premium-photo/pouring-oil-car-engine-fresh-oil-poured-oil-change-car_157125-11676.jpg" },
    },
    {
      _id: "2",
      title: "Car Wash",
      description:
        "Complete exterior & interior wash for a sparkling clean ride.",
      price: 699,
      image: { url: "https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg" },
    },
    {
      _id: "3",
      title: "Brake Inspection",
      description: "Ensure safety with professional brake inspection & repair.",
      price: 999,
      image: { url: "https://img.freepik.com/free-photo/worker-repairing-car-side-view_23-2150171257.jpg?semt=ais_incoming&w=740&q=80" },
    },
    {
      _id: "4",
      title: "Tire Replacement",
      description: "High-quality tires with expert fitting & balancing.",
      price: 3499,
      image: {
        url: "https://t4.ftcdn.net/jpg/01/05/74/79/360_F_105747996_EHa4sYuUbsAWbkr5jKp8nTXq9pkNuHOz.jpg",
      },
    },
  ];

  const servicesToShow =
    ServiceList.length > 0 ? ServiceList : sampleServices;

  return (
    <div className="container py-5">
      <br />
      <br />
      <h2 className="text-center fw-bold mb-5"> Popular Car Services :)</h2>
      <div className="row g-4">
        {servicesToShow.map((service) => (
          <div className="col-md-3" key={service._id}>
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img
                src={
                  service.image?.url ||
                  "https://via.placeholder.com/400x250?text=Service"
                }
                alt={service.title}
                className="card-img-top rounded-top-4"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{service.title}</h5>
                <p className="text-muted small">
                  {service.description?.substring(0, 50)}...
                </p>
                <p className="fw-bold text-primary">₹{service.price}</p>
                <Link
                  to={`/servicedetils/${service._id}`}
                  className="btn btn-outline-primary w-100 rounded-pill"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
