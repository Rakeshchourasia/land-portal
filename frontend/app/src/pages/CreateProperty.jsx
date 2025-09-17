import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, MarkerF, Autocomplete } from '@react-google-maps/api';
import api from "../api/api";
import { PenSquare, MapPin, Loader2 } from "lucide-react";

// --- Google Maps Configuration ---
const libraries = ["places"];
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '0.75rem'
};
// Default map center (Patna, India)
const initialCenter = { lat: 25.5941, lng: 85.1376 };

export default function CreateProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    area: "",
    facing: "East",
    openSides: "1",
    plotNumber: "",
    ownerName: "",
    ownerRelation: "",
    ownerPhone: "",
    propertyType: "Residential",
  });

  const [coordinates, setCoordinates] = useState(initialCenter);
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const autocompleteRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e, setFiles) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      setError("Please upload at least one property image.");
      return;
    }
    setLoading(true);
    setError("");

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });
    submissionData.append("latitude", coordinates.lat);
    submissionData.append("longitude", coordinates.lng);
    images.forEach((file) => submissionData.append("images", file));
    documents.forEach((file) => submissionData.append("documents", file));

    try {
      await api.post("/properties", submissionData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/dashboard/seller");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during submission.");
      setLoading(false);
    }
  };

  // --- Map Handlers ---
  const onMapClick = useCallback((e) => {
    setCoordinates({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  }, []);

  const onLoad = useCallback((autocomplete) => {
    autocompleteRef.current = autocomplete;
  }, []);

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCoordinates({ lat, lng });
      setFormData(prev => ({ ...prev, location: place.formatted_address }));
    }
  };
  
  const inputStyle = "w-full bg-transparent border-0 border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-blue-600 transition py-2 text-slate-700 placeholder-slate-400";
  const labelStyle = "block text-xs font-semibold text-slate-500 uppercase tracking-wider";

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
      <div className="bg-slate-50 font-sans min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <PenSquare className="mx-auto h-14 w-14 text-blue-600" />
            <h1 className="mt-4 text-4xl font-bold text-slate-800">List Your Property</h1>
            <p className="mt-2 text-lg text-slate-500">Fill in the details below to put your property on the market.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid lg:grid-cols-2 lg:gap-16">
              
              {/* --- Left Column: Form Fields --- */}
              <div className="space-y-8">
                {/* Property Details */}
                <fieldset>
                  <legend className="text-xl font-semibold text-slate-700 border-b pb-2 mb-6">Property Details</legend>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                    <div><label htmlFor="title" className={labelStyle}>Title *</label><input id="title" required value={formData.title} onChange={handleChange} className={inputStyle} /></div>
                    <div><label htmlFor="propertyType" className={labelStyle}>Type *</label><select id="propertyType" value={formData.propertyType} onChange={handleChange} className={inputStyle}><option>Residential</option><option>Commercial</option><option>Agricultural</option></select></div>
                    <div><label htmlFor="price" className={labelStyle}>Price (₹) *</label><input id="price" type="number" required value={formData.price} onChange={handleChange} className={inputStyle} /></div>
                    <div><label htmlFor="area" className={labelStyle}>Area (sq.ft) *</label><input id="area" type="number" required value={formData.area} onChange={handleChange} className={inputStyle} /></div>
                    <div><label htmlFor="facing" className={labelStyle}>Facing *</label><select id="facing" value={formData.facing} onChange={handleChange} className={inputStyle}><option>East</option><option>West</option><option>North</option><option>South</option><option>North-East</option><option>North-West</option><option>South-East</option><option>South-West</option></select></div>
                    <div><label htmlFor="openSides" className={labelStyle}>Open Sides *</label><input id="openSides" type="number" required value={formData.openSides} onChange={handleChange} className={inputStyle} /></div>
                    <div className="sm:col-span-2"><label htmlFor="plotNumber" className={labelStyle}>Plot Number</label><input id="plotNumber" value={formData.plotNumber} onChange={handleChange} className={inputStyle} /></div>
                  </div>
                </fieldset>
                
                {/* Owner Details */}
                <fieldset>
                   <legend className="text-xl font-semibold text-slate-700 border-b pb-2 mb-6">Owner Information</legend>
                   <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                    <div className="sm:col-span-2"><label htmlFor="ownerName" className={labelStyle}>Owner Name *</label><input id="ownerName" required value={formData.ownerName} onChange={handleChange} className={inputStyle} /></div>
                    <div><label htmlFor="ownerRelation" className={labelStyle}>Relation to Owner *</label><input id="ownerRelation" required value={formData.ownerRelation} onChange={handleChange} className={inputStyle} /></div>
                    <div><label htmlFor="ownerPhone" className={labelStyle}>Owner's Phone *</label><input id="ownerPhone" type="tel" required value={formData.ownerPhone} onChange={handleChange} className={inputStyle} /></div>
                   </div>
                </fieldset>
              </div>

              {/* --- Right Column: Map and Uploads --- */}
              <div className="space-y-8">
                {/* Location */}
                <fieldset>
                  <legend className="text-xl font-semibold text-slate-700 border-b pb-2 mb-6">Property Location</legend>
                  <div>
                    <label htmlFor="location" className={labelStyle}>Search Address or Pinpoint on Map *</label>
                    <div className="relative mt-1">
                      <MapPin className="absolute top-1/2 -translate-y-1/2 left-0 text-slate-400" size={20}/>
                      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                          <input id="location" type="text" placeholder="Search for a location..." onChange={handleChange} defaultValue={formData.location} className={`${inputStyle} pl-8`} />
                      </Autocomplete>
                    </div>
                  </div>
                  <div className="mt-4">
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={coordinates} zoom={15} onClick={onMapClick}>
                        <MarkerF position={coordinates} />
                    </GoogleMap>
                  </div>
                </fieldset>

                {/* Uploads */}
                <fieldset>
                  <legend className="text-xl font-semibold text-slate-700 border-b pb-2 mb-6">Uploads</legend>
                  <div className="space-y-6">
                    <div>
                      <label className="form-label">Property Images * <span className="text-xs font-normal normal-case">(First is cover)</span></label>
                      <input type="file" required multiple accept="image/*" className="form-file-input" onChange={(e) => handleFileChange(e, setImages)} />
                      <div className="flex flex-wrap gap-2 mt-2">
                        {images.map((file, i) => (<img key={i} src={URL.createObjectURL(file)} alt="preview" className="h-20 w-20 rounded-md object-cover" />))}
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Ownership Docs <span className="text-xs font-normal normal-case">(optional)</span></label>
                      <input type="file" multiple accept=".pdf" className="form-file-input" onChange={(e) => handleFileChange(e, setDocuments)} />
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* --- Description, Error, and Submit --- */}
            <div className="pt-8 border-t">
               <label htmlFor="description" className={labelStyle}>Description *</label>
               <textarea id="description" rows="4" required value={formData.description} placeholder="Describe the property's key features..." onChange={handleChange} className={inputStyle}></textarea>
            </div>
            {error && <p className="text-red-500 text-center text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="w-full py-4 text-lg mt-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="animate-spin" /> Submitting...</> : "Submit Property for Approval"}
            </button>
          </form>
        </div>
        <style jsx global>{`
          .form-label { @apply block text-xs font-semibold text-slate-500 uppercase tracking-wider; }
          .form-input { @apply w-full bg-transparent border-0 border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-blue-600 transition py-2 text-slate-700 placeholder-slate-400; }
          .form-file-input { @apply block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100; }
        `}</style>
      </div>
    </LoadScript>
  );
}