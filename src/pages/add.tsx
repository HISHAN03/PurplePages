import { useState, useEffect } from 'react';

export default function Add() {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [imgLink, setImgLink] = useState('');
  const [imgName, setImgName] = useState('');
  const [imgPrice, setImgPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const enteredPassword = prompt('Enter the password:'); 
    setIsPasswordCorrect(enteredPassword === '12345');
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isPasswordCorrect) {
      alert('Incorrect password. Access denied.');
      return;
    }

    const formData = {
      ImgLink: imgLink,
      ImgName: imgName,
      ImgPrice: imgPrice,
      ImgCategory: selectedCategory,
    };

    try {
     
      const response = await fetch('/api/Arts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed
      if (response.ok) {
        console.log('Art submitted successfully');
        // You may want to redirect or show a success message here
      } else {
        console.error('Error submitting art:', response.statusText);
        // Handle error, show an error message, etc.
      }
    } catch (error) {
      console.error('Error submitting art:', error);
    }
  };
  return isPasswordCorrect ? (
    <div className="flex items-center justify-center h-screen">
      <div className="artboard phone-2 bg-black rounded">
        <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Art Link</span>
            </label>
            <input
              type="text"
              placeholder="Enter art link"
              className="input input-bordered"
              required
              value={imgLink}
              onChange={(e) => setImgLink(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Art Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter art name"
              className="input input-bordered"
              required
              value={imgName}
              onChange={(e) => setImgName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Art Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter art price"
              className="input input-bordered"
              required
              value={imgPrice}
              onChange={(e) => setImgPrice(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Art Category</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option disabled>Select Category</option>
              <option value="casual">Casual</option>
              <option value="aesthetic">Aesthetic</option>
              <option value="moody">Moody</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}
