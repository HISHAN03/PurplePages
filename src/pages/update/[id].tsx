import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Update() {

  const [arts, setArts] = useState<{ _id: any; ImgLink: string; ImgName: string; ImgPrice: number }>();
  const [imgLink, setImgLink] = useState('');
  const [imgName, setImgName] = useState('');
  const [imgPrice, setImgPrice] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const find = async () => {
      try {
        console.log('request');
        const response = await fetch('/api/find', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ id }),
        });
        const foundart = await response.json();
        setArts(foundart.foundArt);
        console.log(foundart.foundArt.ImgName);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    find();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      ImgLink: imgLink,
      ImgName: imgName,
      ImgPrice: imgPrice,
    };

    try {
      const response = await fetch('/api/Arts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Art submitted successfully');
      } else {
        console.error('Error submitting art:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting art:', error);
    }
  };

  return (
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
              defaultValue={arts?.ImgLink}
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
              defaultValue={arts?.ImgName}
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
              defaultValue={arts?.ImgPrice}
              onChange={(e) => setImgPrice(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
